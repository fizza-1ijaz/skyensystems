"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { Mesh } from "three";

const seeded = (seed: number) => {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
};

function Bubble({
  seed,
  pointer,
}: {
  seed: number;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<Mesh>(null);
  const x = (seeded(seed) - 0.5) * 18;
  const y = (seeded(seed + 17) - 0.5) * 8.5;
  const z = -2.2 - seeded(seed + 39) * 7;
  const scale = 0.14 + seeded(seed + 57) * 0.55;
  const speed = 0.3 + seeded(seed + 88) * 0.7;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.position.x = x + pointer.current.x * (0.22 + scale * 0.12);
    ref.current.position.y = y + Math.sin(t + seed) * 0.25 + pointer.current.y * 0.16;
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.55;
  });

  return (
    <mesh ref={ref} position={[x, y, z]} scale={scale}>
      <sphereGeometry args={[1, 20, 20]} />
      <meshPhysicalMaterial
        color="#b6d5ff"
        transmission={0.98}
        roughness={0.08}
        thickness={1.4}
        transparent
        opacity={0.44}
      />
    </mesh>
  );
}

export function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const seeds = useMemo(() => Array.from({ length: 34 }, (_, i) => i + 1), []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = -((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 7], fov: 54 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.95} />
        <directionalLight position={[3, 3, 4]} intensity={1.1} color="#97b6ff" />
        <pointLight position={[-4, 0, 2]} intensity={1.2} color="#70d6ff" />
        {seeds.map((seed) => (
          <Bubble key={seed} seed={seed} pointer={pointer} />
        ))}
      </Canvas>
      <div className="absolute left-1/2 top-1/2 h-72 w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6C63FF1f] via-[#8B5CF62a] to-[#1E3A8A1c] blur-3xl" />
    </div>
  );
}
