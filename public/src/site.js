import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const variants = {
  mist: {
    id: 'mist',
    label: 'Mist Silver',
    short: '银雾',
    color: '#dce7ee',
    dark: '#8798a5',
    accent: '#8fd4ff',
    price: 2899
  },
  graphite: {
    id: 'graphite',
    label: 'Graphite Black',
    short: '曜石',
    color: '#20242a',
    dark: '#0d1014',
    accent: '#7af3d1',
    price: 2999
  },
  clay: {
    id: 'clay',
    label: 'Soft Clay',
    short: '陶杏',
    color: '#d8b79e',
    dark: '#8d6a55',
    accent: '#ffd08a',
    price: 2899
  }
};

const state = {
  variant: variants.mist,
  quantity: 1,
  exploded: false,
  productGroup: null,
  animatedParts: []
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    maximumFractionDigits: 0
  }).format(value);

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        width: 18,
        height: 18,
        'stroke-width': 2.2
      }
    });
  }
}

function makeFabricTexture(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  ctx.lineWidth = 1;

  for (let x = -30; x < 286; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 52, 256);
    ctx.stroke();
  }

  for (let y = 0; y < 256; y += 12) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y + 22);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3.2, 2.5);
  return texture;
}

function createProduct(variant) {
  const group = new THREE.Group();
  group.rotation.set(0, -0.34, 0);

  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: variant.color,
    metalness: 0.42,
    roughness: 0.28,
    clearcoat: 0.74,
    clearcoatRoughness: 0.18
  });

  const darkShellMaterial = new THREE.MeshPhysicalMaterial({
    color: variant.dark,
    metalness: 0.3,
    roughness: 0.34,
    clearcoat: 0.38
  });

  const fabricMaterial = new THREE.MeshStandardMaterial({
    color: variant.dark,
    roughness: 0.76,
    metalness: 0.05,
    map: makeFabricTexture(variant.dark)
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: variant.accent,
    transparent: true,
    opacity: 0.38,
    roughness: 0.08,
    metalness: 0.02,
    transmission: 0.28,
    ior: 1.45
  });

  const glowMaterial = new THREE.MeshStandardMaterial({
    color: variant.accent,
    emissive: variant.accent,
    emissiveIntensity: 0.78,
    metalness: 0.12,
    roughness: 0.16
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.1, 0.4, 128), shellMaterial);
  base.position.set(0, -1.07, 0);
  base.castShadow = true;
  base.receiveShadow = true;
  base.userData.baseY = base.position.y;
  base.userData.explodedY = -1.39;
  group.add(base);

  const fabric = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.98, 1.16, 128, 1, true), fabricMaterial);
  fabric.position.set(0, -0.64, 0);
  fabric.castShadow = true;
  fabric.receiveShadow = true;
  fabric.userData.baseY = fabric.position.y;
  fabric.userData.explodedY = -0.64;
  group.add(fabric);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.84, 0.055, 18, 128), glowMaterial);
  ring.position.set(0, 0.05, 0);
  ring.castShadow = true;
  ring.userData.baseY = ring.position.y;
  ring.userData.explodedY = 0.3;
  group.add(ring);

  const glass = new THREE.Mesh(
    new THREE.SphereGeometry(0.86, 96, 48, 0, Math.PI * 2, 0, Math.PI / 2),
    glassMaterial
  );
  glass.position.set(0, 0.54, 0);
  glass.castShadow = true;
  glass.receiveShadow = true;
  glass.userData.baseY = glass.position.y;
  glass.userData.explodedY = 1.04;
  group.add(glass);

  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.86, 0.1, 128), shellMaterial);
  cap.position.set(0, 0.5, 0);
  cap.castShadow = true;
  cap.receiveShadow = true;
  cap.userData.baseY = cap.position.y;
  cap.userData.explodedY = 1;
  group.add(cap);

  const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 48), darkShellMaterial);
  knob.position.set(0, -1.29, 0.72);
  knob.rotation.x = Math.PI / 2;
  knob.castShadow = true;
  knob.userData.baseY = knob.position.y;
  knob.userData.explodedY = -1.61;
  group.add(knob);

  const sensor = new THREE.Mesh(new THREE.CircleGeometry(0.14, 48), glowMaterial);
  sensor.position.set(0, -0.38, 0.995);
  sensor.rotation.x = Math.PI / 2;
  sensor.userData.baseY = sensor.position.y;
  sensor.userData.explodedY = -0.38;
  group.add(sensor);

  state.animatedParts = [base, fabric, ring, glass, cap, knob, sensor];
  return group;
}

function disposeGroup(group) {
  group.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      if (object.material.map) object.material.map.dispose();
      object.material.dispose();
    }
  });
}

function initViewer() {
  const canvas = document.getElementById('product-canvas');
  const frame = canvas.closest('.viewer-frame');
  const scene = new THREE.Scene();
  scene.background = null;
  frame.style.setProperty('--product-color', state.variant.color);
  frame.style.setProperty('--product-dark', state.variant.dark);
  frame.style.setProperty('--product-accent', state.variant.accent);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.7, 5);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const ambient = new THREE.AmbientLight('#ffffff', 1.6);
  scene.add(ambient);

  const keyLight = new THREE.SpotLight('#ffffff', 3.2, 12, 0.55, 0.8, 1.2);
  keyLight.position.set(-3, 4.5, 4);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);

  const accentLight = new THREE.PointLight(state.variant.accent, 1.45, 8);
  accentLight.position.set(3, 1.5, 3);
  scene.add(accentLight);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1.55, 96),
    new THREE.ShadowMaterial({ color: '#2c241d', opacity: 0.22 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.52;
  shadow.receiveShadow = true;
  scene.add(shadow);

  state.productGroup = createProduct(state.variant);
  scene.add(state.productGroup);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 3.2;
  controls.maxDistance = 6.2;
  controls.minPolarAngle = Math.PI / 3.2;
  controls.maxPolarAngle = Math.PI / 1.78;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.72;

  function resize() {
    const rect = frame.getBoundingClientRect();
    const width = Math.max(320, Math.floor(rect.width));
    const height = Math.max(420, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(frame);
  resize();

  function updateVariant(variant) {
    scene.remove(state.productGroup);
    disposeGroup(state.productGroup);
    state.variant = variant;
    frame.style.setProperty('--product-color', variant.color);
    frame.style.setProperty('--product-dark', variant.dark);
    frame.style.setProperty('--product-accent', variant.accent);
    state.productGroup = createProduct(variant);
    scene.add(state.productGroup);
    accentLight.color.set(variant.accent);
  }

  let reportedCanvasQuality = false;
  let renderedFrames = 0;

  function reportCanvasQuality() {
    const gl = renderer.getContext();
    const width = renderer.domElement.width;
    const height = renderer.domElement.height;
    const pixels = new Uint8Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    let varied = 0;
    let total = 0;
    const step = 16;

    for (let index = 0; index < pixels.length; index += 4 * step) {
      const r = pixels[index];
      const g = pixels[index + 1];
      const b = pixels[index + 2];
      const a = pixels[index + 3];
      const difference = Math.abs(r - 245) + Math.abs(g - 241) + Math.abs(b - 234);

      if (a > 0) {
        total += 1;
      }

      if (a > 0 && difference > 34) {
        varied += 1;
      }
    }

    document.documentElement.dataset.viewerReady = 'true';
    document.documentElement.dataset.canvasVariedRatio = total > 0 ? (varied / total).toFixed(4) : '0';
  }

  function animate() {
    requestAnimationFrame(animate);
    const time = performance.now() * 0.001;
    state.productGroup.position.y = Math.sin(time * 1.6) * 0.035;
    state.productGroup.rotation.z = Math.sin(time * 1.1) * 0.018;

    for (const part of state.animatedParts) {
      const targetY = state.exploded ? part.userData.explodedY : part.userData.baseY;
      part.position.y += (targetY - part.position.y) * 0.09;
    }

    controls.update();
    renderer.render(scene, camera);

    renderedFrames += 1;
    if (!reportedCanvasQuality && renderedFrames > 20) {
      reportedCanvasQuality = true;
      reportCanvasQuality();
    }
  }

  controls.update();
  renderer.render(scene, camera);
  reportCanvasQuality();
  reportedCanvasQuality = true;
  animate();
  return { updateVariant };
}

function initInterface(viewer) {
  const nav = document.getElementById('site-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const explodeToggle = document.getElementById('explode-toggle');
  const explodeLabel = explodeToggle.querySelector('span');
  const variantShort = document.getElementById('variant-short');
  const variantPrice = document.getElementById('variant-price');
  const variantLabel = document.getElementById('variant-label');
  const quantityValue = document.getElementById('quantity-value');
  const checkoutTotal = document.getElementById('checkout-total');
  const addToBag = document.getElementById('add-to-bag');

  function syncPrice() {
    variantPrice.textContent = formatCurrency(state.variant.price);
    checkoutTotal.textContent = formatCurrency(state.variant.price * state.quantity);
    quantityValue.textContent = state.quantity;
  }

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-label', '打开导航');
      menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
      initIcons();
    });
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
    menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" aria-hidden="true"></i>`;
    initIcons();
  });

  explodeToggle.addEventListener('click', () => {
    state.exploded = !state.exploded;
    document.querySelector('.viewer-frame').classList.toggle('is-exploded', state.exploded);
    explodeToggle.classList.toggle('is-active', state.exploded);
    explodeLabel.textContent = state.exploded ? '合拢结构' : '分层查看';
  });

  document.querySelectorAll('.swatch').forEach((button) => {
    button.addEventListener('click', () => {
      const variant = variants[button.dataset.variant];
      document.querySelectorAll('.swatch').forEach((swatch) => swatch.classList.remove('is-selected'));
      button.classList.add('is-selected');
      variantShort.textContent = variant.short;
      variantLabel.textContent = variant.label;
      state.variant = variant;
      syncPrice();
      viewer.updateVariant(variant);
    });
  });

  document.getElementById('quantity-minus').addEventListener('click', () => {
    state.quantity = Math.max(1, state.quantity - 1);
    syncPrice();
  });

  document.getElementById('quantity-plus').addEventListener('click', () => {
    state.quantity = Math.min(9, state.quantity + 1);
    syncPrice();
  });

  addToBag.addEventListener('click', () => {
    addToBag.querySelector('span').textContent = '已加入购物袋';
    addToBag.classList.add('is-confirmed');
    window.setTimeout(() => {
      addToBag.querySelector('span').textContent = '加入购物袋';
      addToBag.classList.remove('is-confirmed');
    }, 1600);
  });

  syncPrice();
}

function reportLayoutMetrics() {
  const root = document.documentElement;
  const headline = document.querySelector('h1');
  root.dataset.viewportWidth = String(window.innerWidth);
  root.dataset.documentWidth = String(root.scrollWidth);
  root.dataset.headlineWidth = String(Math.ceil(headline.getBoundingClientRect().width));
}

initIcons();
const viewer = initViewer();
initInterface(viewer);
reportLayoutMetrics();
window.addEventListener('resize', reportLayoutMetrics);
