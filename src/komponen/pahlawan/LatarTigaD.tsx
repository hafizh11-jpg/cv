import { onMount, onCleanup } from "solid-js";
import * as THREE from "three";

// Latar belakang 3D sederhana (wireframe berputar)
export default function LatarTigaD() {
  let wadah: HTMLDivElement | undefined;
  let kerangkaAnimasi: number | undefined;

  onMount(() => {
    if (!wadah) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lebar = wadah.clientWidth || window.innerWidth;
    const tinggi = wadah.clientHeight || window.innerHeight;

    const adegan = new THREE.Scene();
    const kamera = new THREE.PerspectiveCamera(60, lebar / tinggi, 0.1, 100);
    kamera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(lebar, tinggi);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wadah.appendChild(renderer.domElement);

    const geometri = new THREE.IcosahedronGeometry(1.6, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const mesh = new THREE.Mesh(geometri, material);
    adegan.add(mesh);

    const geometri2 = new THREE.TorusGeometry(2.4, 0.02, 8, 64);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xff5f1f });
    const torus = new THREE.Mesh(geometri2, material2);
    torus.rotation.x = Math.PI / 3;
    adegan.add(torus);

    const tanganiUkuran = (): void => {
      const l = wadah?.clientWidth || window.innerWidth;
      const t = wadah?.clientHeight || window.innerHeight;
      kamera.aspect = l / t;
      kamera.updateProjectionMatrix();
      renderer.setSize(l, t);
    };
    window.addEventListener("resize", tanganiUkuran);

    const putar = (): void => {
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;
      torus.rotation.z += 0.002;
      renderer.render(adegan, kamera);
      kerangkaAnimasi = requestAnimationFrame(putar);
    };
    putar();

    onCleanup(() => {
      if (kerangkaAnimasi) cancelAnimationFrame(kerangkaAnimasi);
      window.removeEventListener("resize", tanganiUkuran);
      geometri.dispose();
      material.dispose();
      geometri2.dispose();
      material2.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    });
  });

  return <div ref={wadah} class="kanvas-tiga-d" aria-hidden="true" />;
}
