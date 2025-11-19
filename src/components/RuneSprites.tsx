// src/components/RuneSprites.tsx
import React, { useMemo } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

type RuneSpritesProps = {
  files?: string[];      // e.g. ['/runes/rune1.svg', '/runes/rune2.svg', ...]
  radius?: number;       // spread radius
  opacity?: number;      // 0..1
};

const RuneSprites: React.FC<RuneSpritesProps> = ({ files = ['/runes/rune1.svg','/runes/rune2.svg','/runes/rune3.svg'], radius = 1.6, opacity = 0.06 }) => {
  // load textures (SVGs)
  const textures = useLoader(THREE.TextureLoader, files);

  // ensure correct encoding / flipping
  useMemo(() => {
    textures.forEach((t: any) => {
      t.encoding = THREE.sRGBEncoding;
      t.needsUpdate = true;
      t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    });
  }, [textures]);

  // gentle slow motion
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // animate UV offset / rotation of each plane by a tiny amount
    // (we store rotation on object3D; see mesh.rotation)
  });

  return (
    <group>
      {textures.map((tex: any, i: number) => {
        // position them behind the sword (z more negative = further back)
        const angle = (i / textures.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius * (0.6 + 0.3 * (i % 2));
        const y = Math.sin(angle) * (radius * 0.12) + (i % 2 ? -0.08 : 0.08);
        const z = -1.6 - i * 0.12; // behind the sword (tweak if needed)

        const size = 1.6 + (i * 0.2); // increase a bit
        return (
          <mesh key={i} position={[x, y, z]} rotation={[0, (i % 2 ? 0.05 : -0.05), (i * 0.2)]}>
            <planeGeometry args={[size, size]} />
            <meshBasicMaterial
              map={tex}
              transparent={true}
              opacity={opacity}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default RuneSprites;
