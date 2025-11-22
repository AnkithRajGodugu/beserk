// src/components/SparkParticles.tsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, BufferGeometry, BufferAttribute } from "three";

interface Props {
  count?: number;
  radius?: number;
}

const SparkParticles: React.FC<Props> = ({ count = 300, radius = 3 }) => {
  const ref = useRef<Points>(null);

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sp = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() * 0.6 + 0.3) * radius;
      pos[i * 3 + 1] = Math.random() * 2.5 - 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
      sp[i] = 0.2 + Math.random() * 0.6;
    }

    return { positions: pos, speeds: sp };
  }, [count, radius]);


  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();
    const geo = ref.current.geometry as BufferGeometry;
    const attr = geo.getAttribute("position") as BufferAttribute;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      let y = attr.array[idx + 1] as number;

      y += speeds[i] * 0.01;
      if (y > 3.5) y = -0.5;

      attr.array[idx + 1] = y;
      attr.array[idx] += Math.sin(t * speeds[i] + i) * 0.001;
    }

    attr.needsUpdate = true;
  });


  return (
    <points ref={ref}>
      <bufferGeometry>
        {/* ✅ FIX: use args to create BufferAttribute */}
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]} // <------ IMPORTANT FIX
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        transparent
        depthWrite={false}
        color="#ff8a50"
        opacity={0.7}
      />
    </points>
  );
};

export default SparkParticles;
