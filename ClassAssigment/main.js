import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const group2 = new THREE.Group();
scene.add(group2);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xffff00 })
);
sphere.position.x = -2;
group2.add(sphere);

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 1, 32),
  new THREE.MeshStandardMaterial({ color: 0xff00ff })
);
cone.position.x = 0;
group2.add(cone);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.4, 0.15, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0x00ffff })
);
torus.position.x = 2;
group2.add(torus);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.02;
  cone.rotation.x += 0.02;
  torus.rotation.z += 0.03;

  group2.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();
