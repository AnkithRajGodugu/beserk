// src/components/BladeModel.tsx
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type PointerRef = React.MutableRefObject<{ x: number; y: number } | null>;

interface BladeModelProps {
  pointerRef?: PointerRef;
  scale?: number;
  position?: [number, number, number];
  glbPath?: string;
  preferredAnim?: string | null;
  playAnimation?: boolean;
  animTimeScale?: number;
}

const DEFAULT_GLTF = "/models/berserk_blade.glb";
const DEFAULT_PREFERRED = ["idle", "Idle", "rest", "stand", "animation"];

// Preload a reasonable default for snappier UX
useGLTF.preload(DEFAULT_GLTF);

const BladeModel: React.FC<BladeModelProps> = ({
  pointerRef,
  scale = 1.4,
  position = [0.12, -0.36, -0.12],
  glbPath = DEFAULT_GLTF,
  preferredAnim = null,
  playAnimation = true,
  animTimeScale = 1.0,
}) => {
  const group = useRef<THREE.Group | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  // Load GLB
  const gltf = useGLTF(glbPath) as any;
  const scene = gltf?.scene ?? null;
  const animations = gltf?.animations ?? [];

  // tweak materials, create mixer if necessary
  useEffect(() => {
    if (!scene) return;

    scene.traverse((obj: any) => {
      if (!obj.isMesh) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((m: any) => {
        if (!m) return;
        // cinematic metal tweak
        if (typeof m.metalness !== "undefined") m.metalness = Math.min(1.0, (m.metalness ?? 0.9) + 0.12);
        if (typeof m.roughness !== "undefined") m.roughness = Math.max(0.06, (m.roughness ?? 0.28) - 0.16);
        if (typeof m.emissive !== "undefined") {
          const e = new THREE.Color(m.emissive ? m.emissive : 0x000000);
          e.lerp(new THREE.Color(0x2a0000), 0.06);
          m.emissive = e;
          m.emissiveIntensity = Math.min(0.2, m.emissiveIntensity ?? 0.06);
        }
        try {
          if (obj.geometry && !obj.geometry.getAttribute("normal")) obj.geometry.computeVertexNormals();
        } catch {}
        obj.castShadow = true;
        obj.receiveShadow = true;
      });
    });

    // Animation selection
    if (playAnimation && animations.length > 0) {
      const names = animations.map((a: any) => a.name || "<noname>");
      console.info("[BladeModel] animations:", names);

      const pickName = (needle: string) => animations.findIndex((a: any) => (a.name || "").toLowerCase().includes(needle.toLowerCase()));
      let chosen = 0;

      if (preferredAnim) {
        const idx = pickName(preferredAnim);
        if (idx >= 0) chosen = idx;
      }

      if (chosen === 0) {
        for (const p of DEFAULT_PREFERRED) {
          const idx = pickName(p);
          if (idx >= 0) {
            chosen = idx;
            break;
          }
        }
      }

      // Setup mixer
      try {
        const mixer = new THREE.AnimationMixer(scene);
        mixerRef.current = mixer;
        const clip = animations[chosen];
        const action = mixer.clipAction(clip);
        action.reset();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.play();
        action.timeScale = animTimeScale;
      } catch (err) {
        console.warn("[BladeModel] animation setup failed:", err);
      }
    } else {
      if (playAnimation) console.info("[BladeModel] No animations found; using procedural idle.");
    }

    return () => {
      if (mixerRef.current) {
        try {
          mixerRef.current.stopAllAction();
        } catch {}
        mixerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, animations, playAnimation, preferredAnim, animTimeScale]);

  // frame loop: idle + pointer parallax + mixer update
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;

    // Procedural idle sway
    group.current.rotation.z = Math.sin(t * 0.36) * 0.06;
    group.current.rotation.x = Math.cos(t * 0.22) * 0.03;

    if (pointerRef?.current) {
      const { x, y } = pointerRef.current;
      group.current.rotation.y += (x * 0.25 - group.current.rotation.y) * 0.06;
      group.current.rotation.x += (y * 0.12 - group.current.rotation.x) * 0.04;
    }

    if (mixerRef.current) mixerRef.current.update(delta * (animTimeScale || 1));
  });

  return (
    <group ref={group} position={position} scale={[scale, scale, scale]}>
      {scene ? <primitive object={scene} dispose={null} /> : null}
    </group>
  );
};

export default BladeModel;
