// src/components/CustomCursor.tsx
import React, { useEffect, useRef, useState } from "react";
import brandPng from "../assets/brand-cursor.png";
import swordPng from "../assets/guts-sword.png";

type CursorType = "brand" | "sword";
interface Props { type?: CursorType; }

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());

const CustomCursor: React.FC<Props> = ({ type = "brand" }) => {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const posTarget = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const vel = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const lastMoveTs = useRef<number>(now());
  const [brandClicked, setBrandClicked] = useState(false);

  // --- fracture / shards (same as yours) ---
  const spawnFracture = (x: number, y: number) => {
    const root = document.createElement("div");
    root.className = "fracture";
    root.style.left = `${x}px`;
    root.style.top = `${y}px`;

    const ring = document.createElement("span");
    ring.className = "fx-ring";
    root.appendChild(ring);

    const rays = 8;
    for (let i = 0; i < rays; i++) {
      const crack = document.createElement("span");
      crack.className = "fx-crack";
      crack.style.setProperty("--rot", `${(360 / rays) * i + (Math.random() * 20 - 10)}deg`);
      crack.style.setProperty("--len", `${40 + Math.random() * 90}px`);
      crack.style.setProperty("--delay", `${i * 0.02}s`);
      root.appendChild(crack);
    }
    for (let i = 0; i < 10; i++) {
      const shard = document.createElement("span");
      shard.className = "fx-shard";
      shard.style.setProperty("--ang", `${Math.random() * 360}deg`);
      shard.style.setProperty("--dist", `${22 + Math.random() * 90}px`);
      shard.style.setProperty("--sz", `${2 + Math.random() * 3.5}px`);
      shard.style.setProperty("--delay", `${Math.random() * 0.05}s`);
      root.appendChild(shard);
    }

    document.body.appendChild(root);
    requestAnimationFrame(() => root.classList.add("go"));
    window.setTimeout(() => root.remove(), 900);
  };

  // pointer move -> update target
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posTarget.current.x = e.clientX;
      posTarget.current.y = e.clientY;
      lastMoveTs.current = now();
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // hide system cursor
  useEffect(() => {
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = prev || "auto"; };
  }, []);

  // click handlers
  useEffect(() => {
    let tId: number | undefined;
    const onDown = (e: MouseEvent) => {
      if (type === "sword") {
        spawnFracture(e.clientX, e.clientY);
        const el = rootRef.current;
        if (el) {
          el.classList.remove("attack");
          // restart CSS animation
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          el.offsetHeight;
          el.classList.add("attack");
          tId = window.setTimeout(() => el.classList.remove("attack"), 220);
        }
      } else {
        // brand
        setBrandClicked(true);
        window.setTimeout(() => setBrandClicked(false), 320);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("mousedown", onDown);
      if (tId) window.clearTimeout(tId);
    };
  }, [type]);

  // animation loop (lerp to target, compute velocity, add classes)
  useEffect(() => {
    let last = now();
    const loop = () => {
      const cur = now();
      const dt = Math.min(40, cur - last) / 1000; // clamp dt
      last = cur;

      // smooth lerp toward target — faster when far, slower when near
      pos.current.x = lerp(pos.current.x, posTarget.current.x, Math.min(0.35, 0.12 + 15 * dt));
      pos.current.y = lerp(pos.current.y, posTarget.current.y, Math.min(0.35, 0.12 + 15 * dt));

      // compute velocity magnitude
      const vx = (pos.current.x - (vel.current.x || pos.current.x)) / Math.max(dt, 0.001);
      const vy = (pos.current.y - (vel.current.y || pos.current.y)) / Math.max(dt, 0.001);
      const speed = Math.hypot(vx, vy);

      // store previous for next frame
      vel.current.x = pos.current.x;
      vel.current.y = pos.current.y;

      // update DOM element
      const el = rootRef.current;
      if (el) {
        // fast movement detection threshold (~200 px/sec)
        if (speed > 220) el.classList.add("fast"); else el.classList.remove("fast");
        // show/hide
        if (visible) el.style.opacity = "1"; else el.style.opacity = "0";
        // ensure position uses px values (explicit)
        el.style.left = `${Math.round(pos.current.x)}px`;
        el.style.top = `${Math.round(pos.current.y)}px`;
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  // respect reduced-motion
// hide custom cursor when hovering inputs/textareas/contenteditable so native caret works
useEffect(() => {
  const hideTargets = ['INPUT','TEXTAREA','SELECT'];
  let overNative = false;

  const onPointerOver = (e: Event) => {
    const t = e.target as HTMLElement | null;
    if (!t) return;
    if (hideTargets.includes(t.tagName) || t.closest('[contenteditable="true"]')) {
      overNative = true;
      const el = rootRef.current;
      if (el) el.style.opacity = '0';
      // restore native cursor for clarity
      document.body.style.cursor = '';
    }
  };
  const onPointerOut = (e: Event) => {
    const t = e.target as HTMLElement | null;
    if (!t) return;
    if (hideTargets.includes(t.tagName) || t.closest('[contenteditable="true"]')) {
      overNative = false;
      // restore custom cursor immediately to avoid caret flicker
      const el = rootRef.current;
      if (el) el.style.opacity = '1';
      // re-hide system cursor (component already sets to none on mount; reapply)
      document.body.style.cursor = 'none';
    }
  };

  document.addEventListener('pointerover', onPointerOver, { capture: true });
  document.addEventListener('pointerout', onPointerOut, { capture: true });

  return () => {
    document.removeEventListener('pointerover', onPointerOver, { capture: true });
    document.removeEventListener('pointerout', onPointerOut, { capture: true });
  };
}, []);


  // Render sword or brand
  if (type === "sword") {
    return (
      <div
        ref={rootRef}
        className="cursor-root sword-cursor"
        // inline pos uses explicit px strings to be robust
        style={{ left: `${pos.current.x}px`, top: `${pos.current.y}px`, position: "fixed", pointerEvents: "none", opacity: 0 }}
        aria-hidden
      >
        <div className="slash-flame f1" />
        <div className="slash-flame f2" />
        <div className="sword-blade" style={{ backgroundImage: `url(${swordPng})` }} />
        <div className="slash-spark s1" />
        <div className="slash-spark s2" />
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`cursor-root brand-cursor ${brandClicked ? "brand-clicked" : ""}`}
      style={{ left: `${pos.current.x}px`, top: `${pos.current.y}px`, position: "fixed", pointerEvents: "none", opacity: 0 }}
      aria-hidden
    >
      <div className="brand-core" style={{ backgroundImage: `url(${brandPng})` }} />
      <span className="drip drip-a" />
      <span className="drip drip-b" />
    </div>
  );
};

export default CustomCursor;
