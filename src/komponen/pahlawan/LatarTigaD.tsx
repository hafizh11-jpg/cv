import { onMount, onCleanup } from "solid-js";
import * as THREE from "three";

// Latar 3D interaktif: paralaks mouse + beberapa objek
export default function LatarTigaD() {
  let wadah: HTMLDivElement | undefined;
  let kerangkaAnimasi: number | undefined;
  const mouse = { x: 0, y: 0 };

  onMount(() => {
    if (!wadah) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lebar = wadah.clientWidth || window.innerWidth;
    const tinggi = wadah.clientHeight || window.innerHeight;

    const adegan = new THREE.Scene();
    const kamera = new THREE.PerspectiveCamera(60, lebar / tinggi, 0.1, 100);
    kamera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(lebar, tinggi);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wadah.appendChild(renderer.domElement);

    const grup = new THREE.Group();
    adegan.add(grup);

    const mesh1 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.4, 1),
      new THREE.MeshBasicMaterial({ color: 0x0a0a0a, wireframe: true, transparent: true, opacity: 0.18 }),
    );
    grup.add(mesh1);

    const mesh2 = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.9, 0),
      new THREE.MeshBasicMaterial({ color: 0xff5f1f, wireframe: true, transparent: true, opacity: 0.35 }),
    );
    mesh2.position.set(2.2, 0.6, -0.5);
    grup.add(mesh2);

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.03, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0x0a0a0a }),
    );
    torus.rotation.x = Math.PI / 3;
    grup.add(torus);

    const tanganiMouse = (e: MouseEvent): void => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", tanganiMouse);

    const tanganiUkuran = (): void => {
      const l = wadah?.clientWidth || window.innerWidth;
      const t = wadah?.clientHeight || window.innerHeight;
      kamera.aspect = l / t;
      kamera.updateProjectionMatrix();
      renderer.setSize(l, t);
    };
    window.addEventListener("resize", tanganiUkuran);

    const putar = (): void => {
      mesh1.rotation.x += 0.003;
      mesh1.rotation.y += 0.005;
      mesh2.rotation.x -= 0.004;
      mesh2.rotation.y -= 0.003;
      torus.rotation.z += 0.002;
      // paralaks halus
      grup.rotation.y += (mouse.x * 0.4 - grup.rotation.y) * 0.02;
      grup.rotation.x += (mouse.y * 0.3 - grup.rotation.x) * 0.02;
      renderer.render(adegan, kamera);
      kerangkaAnimasi = requestAnimationFrame(putar);
    };
    putar();

    onCleanup(() => {
      if (kerangkaAnimasi) cancelAnimationFrame(kerangkaAnimasi);
      window.removeEventListener("mousemove", tanganiMouse);
      window.removeEventListener("resize", tanganiUkuran);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    });
  });

  return <div ref={wadah} class="kanvas-tiga-d" aria-hidden="true" />;
}
