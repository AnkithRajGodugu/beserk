// src/components/NavBar3DLogo.tsx
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const FaceModel: React.FC = () => {
  const gltf = useGLTF("/models/face.glb");
  return <primitive object={gltf.scene} scale={3.0} />;
};

const NavBar3DLogo: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className="nav-3d-logo-wrapper">
      <div className="nav-3d-logo-container" ref={wrapperRef}>
        <Canvas className="nav-3d-logo-canvas" camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 5]} intensity={1.4} />
          <FaceModel />

          {/* Rotate *ONLY on hover* */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={3.6}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default NavBar3DLogo;
