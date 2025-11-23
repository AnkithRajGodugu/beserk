// src/components/GLBLoader.tsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF, OrbitControls, Stage } from "@react-three/drei";

type Props = {
  modelUrl?: string;
  size?: number; // visual scale
};

/* ---------------------------
   MODEL WRAPPER
--------------------------- */
const Model: React.FC<{ url: string; scale?: number }> = ({ url, scale = 1 }) => {
  const gltf = useGLTF(url) as any;
  const ref = useRef<any>(null);

  // slow rotation + floating
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.35;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.02;
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene.clone(true)}
      dispose={null}
      scale={scale}
      position={[0, -0.04, 0]}
    />
  );
};

useGLTF.preload("/models/face.glb");

/* ---------------------------
   INTERNAL CANVAS LOADER
--------------------------- */
const GLBLoaderInner: React.FC<Props> = ({ modelUrl, size = 1 }) => {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 1.6], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight intensity={0.6} position={[2, 2, 2]} />

      <Suspense fallback={null}>
        <Stage adjustCamera={false} intensity={0.8} environment="city">
          {modelUrl && <Model url={modelUrl} scale={size} />}
        </Stage>
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

/* ---------------------------
   FULLSCREEN LOADING OVERLAY
--------------------------- */
const GLBLoader: React.FC<Props> = ({
  modelUrl = "/models/face.glb",
  size = 1.0,
}) => {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, rgba(3,6,8,0.72), rgba(6,8,12,0.9))",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          width: 320,
          height: 320,
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 12px 42px rgba(0,0,0,0.6)",
        }}
      >
        <GLBLoaderInner modelUrl={modelUrl} size={size} />
      </div>

      {/* Hint text */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          color: "rgba(255,255,255,0.72)",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        Loading...
      </div>
    </div>
  );
};

export default GLBLoader;
