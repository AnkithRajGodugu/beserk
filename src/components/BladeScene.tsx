// src/components/BladeScene.tsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import BladeModel from "./BladeModel";
import SparkParticles from "./SparkParticles";
import usePrefersReducedMotion from "./usePrefersReducedMotion";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

interface BladeSceneProps {
  glbPath?: string;
}

/** Cinematic dolly helper */
const CinematicCameraDolly: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const { camera } = useThree();
  useFrame((state) => {
    if (!enabled) return;
    const t = state.clock.getElapsedTime();
    const z = 3.6 + Math.sin(t * 0.12) * 0.06 + Math.sin(t * 0.4) * 0.01;
    const x = Math.sin(t * 0.05) * 0.03;
    camera.position.lerp(new THREE.Vector3(x, 0.12, z), 0.06);
    camera.lookAt(0.1, -0.32, -0.12);
  });
  return null;
};

const BladeScene: React.FC<BladeSceneProps> = ({ glbPath = "/models/berserk_blade.glb" }) => {
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const prefersReduced = usePrefersReducedMotion();

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    };
  };

  return (
    <div className="absolute inset-0 pointer-events-none blade-canvas" onPointerMove={handlePointerMove}>
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0.0, 0.12, 3.6], fov: 42 }}
        onCreated={({ gl }) => {
          try { gl.setClearColor(0x000000, 0); } catch {}
        }}
      >
        {/* Lights: strong cinematic rim/backlight */}
        <ambientLight intensity={0.25} />

        <directionalLight position={[0.6, 2.6, -6]} intensity={3.0} color={"#ff9b6d"} />

        <pointLight position={[1.6, 1.8, 2.2]} intensity={0.9} color={"#ffd6b0"} />
        <pointLight position={[-1.8, -1.2, 1.2]} intensity={0.45} color={"#4a001e"} />

        <hemisphereLight color={"#2a0016"} groundColor={"#020000"} intensity={0.12} />

        <Environment preset="dawn" background={false} />

        <Suspense fallback={<mesh visible={false} />}>
          <BladeModel pointerRef={pointerRef} glbPath={glbPath} scale={1.5} position={[0.12, -0.36, -0.12]} />
          {!prefersReduced && <SparkParticles count={140} radius={3.0} />}
        </Suspense>

        {/* Postprocessing */}
        {!prefersReduced && (
          <EffectComposer>
            <Bloom luminanceThreshold={0.18} luminanceSmoothing={0.6} height={300} intensity={1.05} mipmapBlur />
            <Vignette eskil={false} offset={0.2} darkness={0.6} />
          </EffectComposer>
        )}

        <CinematicCameraDolly enabled={!prefersReduced} />
      </Canvas>
    </div>
  );
};

export default BladeScene;
