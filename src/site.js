import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const EXTERNAL_MODEL_URL = '/assets/aroma-speaker.glb';

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

const scenes = {
  focus: {
    id: 'focus',
    label: 'Focus',
    short: '专注',
    scent: '雪松柑橘',
    accent: '#d9ff58',
    copy: '清爽木质调与偏冷白光，适合工作、阅读和清晨启动。'
  },
  calm: {
    id: 'calm',
    label: 'Calm',
    short: '放松',
    scent: '白茶橙花',
    accent: '#8ff4d2',
    copy: '柔和茶香与低饱和绿光，适合晚间放空和轻音乐。'
  },
  sleep: {
    id: 'sleep',
    label: 'Sleep',
    short: '睡眠',
    scent: '薰衣草岩兰草',
    accent: '#b9a8ff',
    copy: '低亮度紫调与缓释香氛，适合睡前舒缓和夜间播放。'
  }
};

const STORAGE_KEY = 'aureon-shop-state';

function readSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function writeSavedState() {
  try {
    const snapshot = {
      variant: state.variant.id,
      scene: state.scene.id,
      scentLevel: state.scentLevel,
      lightLevel: state.lightLevel,
      cartQuantity: state.cartQuantity,
      wishlist: state.wishlist
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Storage can be unavailable in private browsing modes.
  }
}

const savedState = readSavedState();

const state = {
  variant: variants[savedState.variant] || variants.mist,
  scene: scenes[savedState.scene] || scenes.focus,
  quantity: 1,
  exploded: false,
  productGroup: null,
  animatedParts: [],
  usingExternalModel: false,
  autoRotate: true,
  scentLevel: Number.isFinite(savedState.scentLevel) ? savedState.scentLevel : 62,
  lightLevel: Number.isFinite(savedState.lightLevel) ? savedState.lightLevel : 70,
  cartQuantity: Number.isFinite(savedState.cartQuantity) ? savedState.cartQuantity : 0,
  wishlist: Boolean(savedState.wishlist)
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

function normalizeExternalModel(model) {
  const group = new THREE.Group();
  model.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;

      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          material.side = THREE.FrontSide;
          material.needsUpdate = true;
        });
      }
    }
  });

  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const targetSize = 2.75;

  model.position.sub(center);
  model.scale.setScalar(targetSize / maxDimension);
  group.add(model);

  const fittedBox = new THREE.Box3().setFromObject(group);
  group.position.y += -1.28 - fittedBox.min.y;
  group.rotation.set(0, -0.26, 0);
  group.userData.baseY = group.position.y;
  group.userData.externalModel = true;
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
  scene.background = new THREE.Color('#ffffff');
  frame.style.setProperty('--product-color', state.variant.color);
  frame.style.setProperty('--product-dark', state.variant.dark);
  frame.style.setProperty('--product-accent', state.variant.accent);
  frame.style.setProperty('--mood-accent', state.scene.accent);

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

  const accentLight = new THREE.PointLight(state.scene.accent, 1.45, 8);
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

  function loadExternalModel() {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://unpkg.com/three@0.171.0/examples/jsm/libs/draco/gltf/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    document.documentElement.dataset.productModel = 'loading';

    loader.load(
      EXTERNAL_MODEL_URL,
      (gltf) => {
        const externalModel = normalizeExternalModel(gltf.scene);
        scene.remove(state.productGroup);
        disposeGroup(state.productGroup);
        state.productGroup = externalModel;
        state.animatedParts = [];
        state.usingExternalModel = true;
        scene.add(state.productGroup);
        frame.classList.add('model-loaded');
        document.documentElement.dataset.productModel = 'loaded';
        reportCanvasQuality();
      },
      (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          document.documentElement.dataset.productModelProgress = String(progress);
        }
      },
      (error) => {
        console.warn('Product model failed to load:', error);
        document.documentElement.dataset.productModel = 'failed';
        frame.classList.add('model-failed');
      }
    );
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.target.set(0, -0.12, 0);
  controls.minDistance = 3.2;
  controls.maxDistance = 6.2;
  controls.minPolarAngle = Math.PI / 3.2;
  controls.maxPolarAngle = Math.PI / 1.78;
  controls.autoRotate = state.autoRotate;
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
    state.variant = variant;
    frame.style.setProperty('--product-color', variant.color);
    frame.style.setProperty('--product-dark', variant.dark);
    frame.style.setProperty('--product-accent', variant.accent);

    if (!state.usingExternalModel) {
      scene.remove(state.productGroup);
      disposeGroup(state.productGroup);
      state.productGroup = createProduct(variant);
      scene.add(state.productGroup);
    }
  }

  function setScene(sceneMode) {
    state.scene = sceneMode;
    frame.style.setProperty('--mood-accent', sceneMode.accent);
    accentLight.color.set(sceneMode.accent);
    setLightLevel(state.lightLevel);
  }

  function setLightLevel(level) {
    const normalized = level / 100;
    state.lightLevel = level;
    accentLight.intensity = 0.55 + normalized * 2.2;
    keyLight.intensity = 2.45 + normalized * 1.15;
    shadow.material.opacity = 0.12 + normalized * 0.16;
    renderer.toneMappingExposure = 0.9 + normalized * 0.18;
    frame.style.setProperty('--light-level', normalized.toFixed(2));
  }

  function setAutoRotate(enabled) {
    state.autoRotate = enabled;
    controls.autoRotate = enabled;
  }

  function setViewPreset(preset) {
    const presets = {
      front: {
        position: [0, 0.7, 5],
        target: [0, -0.12, 0]
      },
      top: {
        position: [0, 4.8, 1.2],
        target: [0, -0.55, 0]
      },
      detail: {
        position: [1.8, 0.24, 3.35],
        target: [0.06, -0.28, 0]
      }
    };
    const selected = presets[preset] || presets.front;

    camera.position.set(...selected.position);
    controls.target.set(...selected.target);
    controls.update();
  }

  function setInspection(enabled) {
    state.exploded = enabled;
    frame.classList.toggle('is-exploded', enabled);
  }

  function resetView() {
    setInspection(false);
    setViewPreset('front');
  }

  let reportedCanvasQuality = false;
  let renderedFrames = 0;
  const scaleTarget = new THREE.Vector3(1, 1, 1);

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
    const baseY = state.productGroup.userData.baseY || 0;
    state.productGroup.position.y += (baseY + Math.sin(time * 1.6) * 0.035 - state.productGroup.position.y) * 0.02;
    state.productGroup.rotation.z = Math.sin(time * 1.1) * 0.018;
    scaleTarget.setScalar(state.exploded ? 1.045 : 1);
    state.productGroup.scale.lerp(scaleTarget, 0.055);

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
  setScene(state.scene);
  setLightLevel(state.lightLevel);
  loadExternalModel();
  animate();
  return { resetView, setAutoRotate, setInspection, setLightLevel, setScene, setViewPreset, updateVariant };
}

function initInterface(viewer) {
  const nav = document.getElementById('site-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const wishlistToggle = document.getElementById('wishlist-toggle');
  const cartToggle = document.getElementById('cart-toggle');
  const cartCount = document.getElementById('cart-count');
  const explodeToggle = document.getElementById('explode-toggle');
  const explodeLabel = explodeToggle.querySelector('span');
  const viewerAuto = document.getElementById('viewer-auto');
  const viewerReset = document.getElementById('viewer-reset');
  const viewerStatus = document.getElementById('viewer-status');
  const variantShort = document.getElementById('variant-short');
  const variantPrice = document.getElementById('variant-price');
  const variantLabel = document.getElementById('variant-label');
  const sceneLabel = document.getElementById('scene-label');
  const scentRange = document.getElementById('scent-range');
  const lightRange = document.getElementById('light-range');
  const scentValue = document.getElementById('scent-value');
  const lightValue = document.getElementById('light-value');
  const moodTitle = document.getElementById('mood-title');
  const moodScore = document.getElementById('mood-score');
  const quantityValue = document.getElementById('quantity-value');
  const checkoutTotal = document.getElementById('checkout-total');
  const addToBag = document.getElementById('add-to-bag');
  const buyNow = document.getElementById('buy-now');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartClose = document.getElementById('cart-close');
  const drawerEmpty = document.getElementById('drawer-empty');
  const drawerContent = document.getElementById('drawer-content');
  const cartLineMeta = document.getElementById('cart-line-meta');
  const drawerTotal = document.getElementById('drawer-total');
  const drawerCheckout = document.getElementById('drawer-checkout');
  const drawerClear = document.getElementById('drawer-clear');
  const toast = document.getElementById('site-toast');
  const hotspotLabels = {
    front: '柔光舱',
    top: '香氛扩散环',
    detail: '微孔声学织物'
  };
  let toastTimer = 0;

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2200);
  }

  function syncPrice() {
    variantPrice.textContent = formatCurrency(state.variant.price);
    checkoutTotal.textContent = formatCurrency(state.variant.price * state.quantity);
    quantityValue.textContent = state.quantity;
  }

  function syncCart() {
    const hasItems = state.cartQuantity > 0;
    cartCount.textContent = state.cartQuantity;
    cartCount.classList.toggle('is-empty', !hasItems);
    drawerEmpty.hidden = hasItems;
    drawerContent.hidden = !hasItems;

    if (hasItems) {
      cartLineMeta.textContent = `${state.variant.label} · ${state.scene.label} · ${state.scene.scent} · ${state.cartQuantity} 件`;
      drawerTotal.textContent = formatCurrency(state.variant.price * state.cartQuantity);
    }
  }

  function openCart() {
    syncCart();
    cartOverlay.hidden = false;
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
  }

  function closeCart() {
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
    window.setTimeout(() => {
      if (!document.body.classList.contains('cart-open')) {
        cartOverlay.hidden = true;
      }
    }, 220);
  }

  function syncVariantButtons() {
    document.querySelectorAll('.swatch').forEach((button) => {
      button.classList.toggle('is-selected', button.dataset.variant === state.variant.id);
    });
  }

  function syncSceneButtons() {
    document.querySelectorAll('[data-scene]').forEach((button) => {
      const selected = button.dataset.scene === state.scene.id;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function syncMood() {
    document.documentElement.dataset.scene = state.scene.id;
    document.documentElement.style.setProperty('--mood-accent', state.scene.accent);
    sceneLabel.textContent = state.scene.label;
    moodTitle.textContent = `${state.scene.label} / ${state.scene.scent}`;
    moodScore.textContent = `${state.scene.short} · 香氛 ${state.scentLevel} · 灯光 ${state.lightLevel}`;
    viewer.setScene(state.scene);
    syncSceneButtons();
  }

  function syncRanges() {
    const scentNormalized = state.scentLevel / 100;
    const lightNormalized = state.lightLevel / 100;

    scentRange.value = String(state.scentLevel);
    lightRange.value = String(state.lightLevel);
    scentValue.textContent = `${state.scentLevel}%`;
    lightValue.textContent = `${state.lightLevel}%`;
    document.documentElement.style.setProperty('--scent-level', scentNormalized.toFixed(2));
    document.documentElement.style.setProperty('--light-level', lightNormalized.toFixed(2));
    document.documentElement.style.setProperty('--pulse-opacity', (0.34 + scentNormalized * 0.66).toFixed(2));
    document.documentElement.style.setProperty('--pulse-scale', (1 + scentNormalized * 0.08).toFixed(3));
    document.documentElement.style.setProperty('--glow-size', `${Math.round(28 + lightNormalized * 82)}px`);
    viewer.setLightLevel(state.lightLevel);
    syncMood();
  }

  function setViewPreset(preset, label = hotspotLabels[preset]) {
    viewer.setViewPreset(preset);
    viewerStatus.textContent = label || hotspotLabels.front;
    document.querySelectorAll('[data-view-preset]').forEach((button) => {
      button.classList.toggle('is-selected', button.dataset.viewPreset === preset);
    });
  }

  function addSelectionToCart({ open = false } = {}) {
    state.cartQuantity = Math.min(9, state.cartQuantity + state.quantity);
    syncCart();
    writeSavedState();
    addToBag.querySelector('span').textContent = '已加入购物袋';
    addToBag.classList.add('is-confirmed');
    showToast(`已加入 ${state.quantity} 件 ${state.variant.short} 配色`);

    window.setTimeout(() => {
      addToBag.querySelector('span').textContent = '加入购物袋';
      addToBag.classList.remove('is-confirmed');
    }, 1600);

    if (open) {
      openCart();
    }
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
    viewer.setInspection(!state.exploded);
    explodeToggle.classList.toggle('is-active', state.exploded);
    explodeToggle.setAttribute('aria-pressed', String(state.exploded));
    explodeLabel.textContent = state.exploded ? '退出高亮' : '细节高亮';
    showToast(state.exploded ? '已开启细节高亮' : '已关闭细节高亮');
  });

  viewerAuto.addEventListener('click', () => {
    viewer.setAutoRotate(!state.autoRotate);
    viewerAuto.classList.toggle('is-active', state.autoRotate);
    viewerAuto.setAttribute('aria-pressed', String(state.autoRotate));
    viewerAuto.setAttribute('aria-label', state.autoRotate ? '暂停自动旋转' : '开启自动旋转');
    showToast(state.autoRotate ? '自动旋转已开启' : '自动旋转已暂停');
    writeSavedState();
  });

  viewerReset.addEventListener('click', () => {
    viewer.resetView();
    explodeToggle.classList.remove('is-active');
    explodeToggle.setAttribute('aria-pressed', 'false');
    explodeLabel.textContent = '细节高亮';
    setViewPreset('front');
    showToast('视角已复位');
  });

  document.querySelectorAll('[data-view-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      setViewPreset(button.dataset.viewPreset, button.dataset.hotspot || hotspotLabels[button.dataset.viewPreset]);
    });
  });

  document.querySelectorAll('.swatch').forEach((button) => {
    button.addEventListener('click', () => {
      const variant = variants[button.dataset.variant];
      if (!variant) return;

      variantShort.textContent = variant.short;
      variantLabel.textContent = variant.label;
      state.variant = variant;
      syncVariantButtons();
      syncPrice();
      syncCart();
      viewer.updateVariant(variant);
      showToast(`已切换到 ${variant.label}`);
      writeSavedState();
    });
  });

  document.querySelectorAll('[data-scene]').forEach((button) => {
    button.addEventListener('click', () => {
      const sceneMode = scenes[button.dataset.scene];
      if (!sceneMode) return;

      state.scene = sceneMode;
      syncMood();
      syncCart();
      showToast(`${sceneMode.label} 场景已启用`);
      writeSavedState();
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

  scentRange.addEventListener('input', () => {
    state.scentLevel = Number(scentRange.value);
    syncRanges();
    writeSavedState();
  });

  lightRange.addEventListener('input', () => {
    state.lightLevel = Number(lightRange.value);
    syncRanges();
    writeSavedState();
  });

  wishlistToggle.addEventListener('click', () => {
    state.wishlist = !state.wishlist;
    wishlistToggle.classList.toggle('is-active', state.wishlist);
    wishlistToggle.setAttribute('aria-pressed', String(state.wishlist));
    showToast(state.wishlist ? '已收藏 Aura One' : '已取消收藏');
    writeSavedState();
  });

  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  addToBag.addEventListener('click', () => addSelectionToCart());
  buyNow.addEventListener('click', () => {
    if (state.cartQuantity === 0) {
      addSelectionToCart();
    }

    openCart();
  });

  drawerClear.addEventListener('click', () => {
    state.cartQuantity = 0;
    syncCart();
    writeSavedState();
    showToast('购物袋已清空');
  });

  drawerCheckout.addEventListener('click', () => {
    drawerCheckout.querySelector('span').textContent = '订单已确认';
    drawerCheckout.classList.add('is-confirmed');
    showToast('订单已创建，感谢选购');
    window.setTimeout(() => {
      drawerCheckout.querySelector('span').textContent = '确认下单';
      drawerCheckout.classList.remove('is-confirmed');
    }, 1800);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('cart-open')) {
      closeCart();
    }
  });

  variantShort.textContent = state.variant.short;
  variantLabel.textContent = state.variant.label;
  wishlistToggle.classList.toggle('is-active', state.wishlist);
  wishlistToggle.setAttribute('aria-pressed', String(state.wishlist));
  viewerAuto.classList.toggle('is-active', state.autoRotate);
  viewerAuto.setAttribute('aria-pressed', String(state.autoRotate));
  syncVariantButtons();
  syncPrice();
  syncCart();
  syncRanges();
  setViewPreset('front');
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
