import io
import json
import struct
import sys
from pathlib import Path

from PIL import Image


def align4(data: bytearray) -> None:
    while len(data) % 4:
        data.append(0)


def read_glb(path: Path):
    data = path.read_bytes()
    if data[:4] != b"glTF":
        raise ValueError("Not a binary GLB file")

    offset = 12
    gltf = None
    binary = None

    while offset < len(data):
        chunk_length = struct.unpack_from("<I", data, offset)[0]
        chunk_type = data[offset + 4 : offset + 8]
        chunk_data = data[offset + 8 : offset + 8 + chunk_length]

        if chunk_type == b"JSON":
            gltf = json.loads(chunk_data.decode("utf-8"))
        elif chunk_type == b"BIN\x00":
            binary = chunk_data

        offset += 8 + chunk_length

    if gltf is None or binary is None:
        raise ValueError("GLB must contain JSON and BIN chunks")

    return gltf, binary


def build_glb(gltf, binary: bytes) -> bytes:
    json_bytes = json.dumps(gltf, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
    json_padding = b" " * ((4 - len(json_bytes) % 4) % 4)
    bin_padding = b"\x00" * ((4 - len(binary) % 4) % 4)
    total_length = 12 + 8 + len(json_bytes) + len(json_padding) + 8 + len(binary) + len(bin_padding)

    return b"".join(
        [
            b"glTF",
            struct.pack("<II", 2, total_length),
            struct.pack("<I4s", len(json_bytes) + len(json_padding), b"JSON"),
            json_bytes,
            json_padding,
            struct.pack("<I4s", len(binary) + len(bin_padding), b"BIN\x00"),
            binary,
            bin_padding,
        ]
    )


def optimize(input_path: Path, output_path: Path, max_edge: int = 1024, quality: int = 72):
    gltf, source_binary = read_glb(input_path)
    buffer_views = gltf["bufferViews"]
    images = gltf.get("images", [])
    new_binary = bytearray()
    replaced_views = set()

    for image in images:
      view_index = image["bufferView"]
      view = buffer_views[view_index]
      start = view.get("byteOffset", 0)
      end = start + view["byteLength"]
      source_blob = source_binary[start:end]

      with Image.open(io.BytesIO(source_blob)) as opened:
          converted = opened.convert("RGB")
          converted.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
          output = io.BytesIO()
          converted.save(output, format="JPEG", quality=quality, optimize=True, progressive=True)
          blob = output.getvalue()

      align4(new_binary)
      view["byteOffset"] = len(new_binary)
      view["byteLength"] = len(blob)
      image["mimeType"] = "image/jpeg"
      image["name"] = f"{image.get('name', 'texture')}.jpg"
      new_binary.extend(blob)
      replaced_views.add(view_index)

    for index, view in enumerate(buffer_views):
        if index in replaced_views:
            continue

        start = view.get("byteOffset", 0)
        end = start + view["byteLength"]
        align4(new_binary)
        view["byteOffset"] = len(new_binary)
        view["byteLength"] = end - start
        new_binary.extend(source_binary[start:end])

    gltf["buffers"][0]["byteLength"] = len(new_binary)
    output_path.write_bytes(build_glb(gltf, bytes(new_binary)))


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: optimize-glb-images.py input.glb output.glb")

    optimize(Path(sys.argv[1]), Path(sys.argv[2]))
