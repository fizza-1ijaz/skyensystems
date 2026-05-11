"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function HeroCamera({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, scene } = useThree();

  useLayoutEffect(() => {
    // Initial camera position
    camera.position.set(0, 0, 10);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });

    // Move camera as we scroll
    tl.to(camera.position, {
      z: 5,
      y: -2,
      ease: "none",
    })
    .to(scene.rotation, {
      y: Math.PI * 0.5,
      ease: "none",
    }, 0);

    // Fade out or move objects
    if (groupRef.current) {
        tl.to(groupRef.current.position, {
            y: -5,
            ease: "none"
        }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera, scene]);

  useFrame((state) => {
    // Subtle mouse reaction
    const { x, y } = state.pointer;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y * 2 - (state.clock.elapsedTime > 0 ? 0 : 0), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return <group ref={groupRef}>{children}</group>;
}
