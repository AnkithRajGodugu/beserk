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

export default NavBar3DLogo;    const resize = () => setIsMobile(window.innerWidth < mobileBreakpoint);
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
