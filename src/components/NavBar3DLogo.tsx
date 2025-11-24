// src/components/NavBar3DLogo.tsx
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface NavBar3DLogoProps {
  modelPath?: string;       // default model
  size?: number;            // desktop size
  mobileSize?: number;      // mobile size
  mobileBreakpoint?: number;
}

const FaceModel: React.FC<{ modelPath: string; scale: number }> = ({
  modelPath,
  scale,
}) => {
  const gltf = useGLTF(modelPath);
  return <primitive object={gltf.scene} scale={scale} />;
};

const NavBar3DLogo: React.FC<NavBar3DLogoProps> = ({
  modelPath = "/models/face.glb",
  size = 50,
  mobileSize = 36,
  mobileBreakpoint = 768,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.innerWidth < mobileBreakpoint
      : false
  );

  useGLTF.preload(modelPath);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mobileBreakpoint]);

  const px = isMobile ? mobileSize : size;

  return (
    <div
      className="nav-3d-logo-wrapper"
      style={{ width: px, height: px }}
      ref={wrapperRef}
    >
      <div
        className="nav-3d-logo-container"
        style={{ width: px, height: px, borderRadius: px / 2 }}
      >
        <Suspense fallback={null}>
          <Canvas
            className="nav-3d-logo-canvas"
            camera={{ position: [0, 0, 3] }}
            frameloop="always"        // <-- always animate
            gl={{ antialias: true }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.8} />
            <directionalLight intensity={1.4} position={[3, 3, 6]} />

            <FaceModel
              modelPath={modelPath}
              scale={isMobile ? 2.0 : 3.0}
            />

            {/* ALWAYS ROTATE */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate={true}
              autoRotateSpeed={3.6}
            />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default NavBar3DLogo;
