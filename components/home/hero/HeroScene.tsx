"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Environment, Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { FloatingEcosystem } from "./FloatingEcosystem";
import { HeroCamera } from "./HeroCamera";

export function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas
        shadows
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <HeroCamera>
            <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 8 : 10]} fov={isMobile ? 45 : 35} />

            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#6C63FF" />
            <pointLight position={[10, 5, -5]} intensity={1} color="#22D3EE" />

            <FloatingEcosystem />

            <Environment preset="city" />
            <ContactShadows
              position={[0, -4.5, 0]}
              opacity={0.4}
              scale={20}
              blur={2}
              far={4.5}
            />
          </HeroCamera>
        </Suspense>
      </Canvas>
    </div>
  );
}
