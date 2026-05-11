"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Float, MeshTransmissionMaterial, Text, PerspectiveCamera, Sparkles, Float as DreiFloat } from "@react-three/drei";

export function FloatingEcosystem() {
  return (
    <group>
      {/* Cinematic Fog & Atmosphere */}
      <fog attach="fog" args={["#f8fafc", 2, 50]} />

      {/* Central Infrastructure Core */}
      <SystemCore />

      {/* Surrounding Modular Interfaces */}
      <ModularInterfaces />

      {/* Infrastructure Connections */}
      <InfrastructureLines />

      {/* Atmospheric Particles - Enhanced visibility */}
      <Sparkles count={200} scale={25} size={2} speed={0.6} opacity={0.8} color="#6C63FF" noise={[2, 2, 2]} />
      <Sparkles count={150} scale={22} size={3} speed={0.4} opacity={0.6} color="#22D3EE" noise={[2, 2, 2]} />
      <Sparkles count={100} scale={20} size={1.5} speed={0.3} opacity={0.5} color="#1E3A8A" noise={[2, 2, 2]} />
    </group>
  );
}

function SystemCore() {
  const coreRef = useRef<THREE.Group>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const fragmentsRef = useRef<THREE.Group>(null);

  // Generate random positions for geometric fragments
  const fragments = useMemo(() => {
    return [...Array(24)].map(() => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Smooth sine-wave float for the entire core
    if (coreRef.current) {
      coreRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    }

    // Orb rotation
    if (orbRef.current) {
      orbRef.current.rotation.y = t * 0.2;
      orbRef.current.rotation.z = t * 0.1;
    }

    // Orbital rings rotation
    if (ringsRef.current) {
      ringsRef.current.rotation.x = t * 0.15;
      ringsRef.current.rotation.y = t * 0.1;
    }

    // Fragments floating motion
    if (fragmentsRef.current) {
      fragmentsRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(t + i) * 0.002;
        child.rotation.x += 0.005;
        child.rotation.y += 0.005;
      });
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central Metallic Orb */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#f8fafc"
          metalness={1}
          roughness={0.1}
          emissive="#6C63FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Internal Core Glow */}
      <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            color="#f8fafc"
            metalness={1}
            roughness={0.1}
            emissive="#6C63FF"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Orbital Rings */}
        <group ref={ringsRef}>
          {[...Array(3)].map((_, i) => (
            <mesh key={i} rotation={[i * Math.PI / 3, 0, 0]}>
              <torusGeometry args={[2.5 + i * 0.6, 0.02, 16, 100]} />
              <meshStandardMaterial 
                color={i === 1 ? "#22D3EE" : "#6C63FF"} 
                emissive={i === 1 ? "#22D3EE" : "#6C63FF"} 
                emissiveIntensity={3} 
                transparent 
                opacity={0.6} 
              />
            </mesh>
          ))}
        </group>

      {/* Glowing Geometric Fragments */}
      <group ref={fragmentsRef}>
        {fragments.map((frag, i) => (
          <mesh key={i} position={frag.position} rotation={frag.rotation} scale={frag.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#6C63FF" : "#22D3EE"} 
              emissive={i % 2 === 0 ? "#6C63FF" : "#22D3EE"} 
              emissiveIntensity={1} 
              transparent 
              opacity={0.4} 
            />
          </mesh>
        ))}
      </group>

      {/* Volumetric Lights */}
      <pointLight position={[2, 2, 2]} intensity={10} color="#6C63FF" />
      <pointLight position={[-2, -2, 2]} intensity={10} color="#22D3EE" />
    </group>
  );
}

function ModularInterfaces() {
  return (
    <group>
      {/* Side Panels with Sine Wave motion via InterfacePanel */}
      <InterfacePanel position={[-4.5, 1, -2]} rotation={[0, 0.4, 0]} type="browser" title="Strategic Analytics" />
      <InterfacePanel position={[4.5, 1, -1]} rotation={[0, -0.4, 0]} type="mobile" title="Interface Design" />
      <InterfacePanel position={[-3.5, -2, 1]} rotation={[0.2, 0.2, 0]} type="ai" title="Neural Architecture" scale={0.8} />
      <InterfacePanel position={[3.5, -2.5, -2]} rotation={[-0.2, -0.3, 0]} type="pipeline" title="Core Infrastructure" scale={0.9} />
    </group>
  );
}

function InterfacePanel({ position, rotation, type, title, scale = 1 }: any) {
  const panelRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (panelRef.current) {
        const t = state.clock.getElapsedTime();
        // Smooth sine-wave floating motion
        panelRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
        panelRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <group ref={panelRef} position={position} rotation={rotation} scale={scale}>
        {/* The Frame - Glassmorphism */}
        <mesh>
          <boxGeometry args={[type === "mobile" ? 1.2 : 2.5, type === "mobile" ? 2.2 : 1.5, 0.05]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.4}
            roughness={0.05}
            metalness={0.2}
          />
        </mesh>

        {/* Glow Edge */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[type === "mobile" ? 1.25 : 2.55, type === "mobile" ? 2.25 : 1.55, 0.01]} />
          <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={1} transparent opacity={0.2} />
        </mesh>

        {/* Text Content */}
        <Text
          position={[0, 0, 0.03]}
          fontSize={0.1}
          color="#1e293b"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.woff"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>

        {/* Visual placeholders for different types */}
        {type === "pipeline" && <PipelineVisual />}
        {type === "ai" && <AIVisual />}
      </group>
  );
}

function PipelineVisual() {
  return (
    <group position={[0, -0.4, 0.03]}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 0.3 - 0.6, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={i < 3 ? "#10B981" : "#E2E8F0"} emissive={i < 3 ? "#10B981" : "#E2E8F0"} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function AIVisual() {
  return (
    <group position={[0, -0.4, 0.03]}>
      <mesh>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color="#6C63FF" transparent opacity={0.2} />
      </mesh>
      <Sparkles count={10} scale={0.4} size={1} speed={1} color="#6C63FF" />
    </group>
  );
}

function InfrastructureLines() {
  const points = useMemo(() => {
    const p = [];
    // Lines connecting panels to core
    p.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-4, 2, -2)]);
    p.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(4, 1.5, -1)]);
    p.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-3, -2, 1)]);
    p.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, -2.5, -2)]);
    return p;
  }, []);

  return (
    <group>
      {points.map((curve, i) => (
        <DataFlowLine key={i} start={curve[0]} end={curve[1]} />
      ))}
    </group>
  );
}

function DataFlowLine({ start, end }: { start: THREE.Vector3, end: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      start,
      new THREE.Vector3().lerpVectors(start, end, 0.5).add(new THREE.Vector3(0, 1, 0)),
      end
    ]);
  }, [start, end]);

  useFrame((state) => {
    if (ref.current && ref.current.material) {
      // Pulse animation
      const t = state.clock.getElapsedTime();
      const material = ref.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.2 + Math.sin(t * 3 + curve.getLength()) * 0.1;
    }
  });

  return (
    <mesh ref={ref}>
      <tubeGeometry args={[curve, 20, 0.005, 8, false]} />
      <meshStandardMaterial color="#6C63FF" transparent opacity={0.3} emissive="#6C63FF" emissiveIntensity={2} />
    </mesh>
  );
}
