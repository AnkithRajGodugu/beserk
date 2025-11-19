import React, { useEffect, useRef, useState } from "react";
import brandPng from "../assets/brand-cursor.png";
import swordPng from "../assets/guts-sword.png";

type CursorType = "brand" | "sword";
interface Props { type?: CursorType; }

const CustomCursor: React.FC<Props> = ({ type = "brand" }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [brandClicked, setBrandClicked] = useState(false);
  const swordRef = useRef<HTMLDivElement | null>(null);

  // --- sword-only: screen crack spawner ---
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
    window.setTimeout(() => root.remove(), 700);
  };

  // track mouse
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // hide system cursor
  useEffect(() => {
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = prev || "auto"; };
  }, []);

  // click handlers split by type
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (type === "sword") {
        // sword: crack + quick slash
        spawnFracture(e.clientX, e.clientY);
        const el = swordRef.current;
        if (el) {
          el.classList.remove("attack"); // restart animation if spam-clicked
          // force reflow
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          el.offsetHeight;
          el.classList.add("attack");
          window.setTimeout(() => el.classList.remove("attack"), 180);
        }
      } else if (type === "brand") {
        // brand: ONLY vibration (no crack)
        setBrandClicked(true);
        const t = window.setTimeout(() => setBrandClicked(false), 300);
        // cleanup in case unmounted during timeout
        return () => window.clearTimeout(t);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [type]);

  if (type === "sword") {
    return (
      <div
        ref={swordRef}
        className="cursor-root sword-cursor"
        style={{ left: pos.x, top: pos.y }}
      >
        <div className="sword-blade" style={{ backgroundImage: `url(${swordPng})` }} />
      </div>
    );
  }

  // BRAND: tilt + pulse + drips + click vibration ONLY
  return (
    <div
      className={`cursor-root brand-cursor ${brandClicked ? "brand-clicked" : ""}`}
      style={{ left: pos.x, top: pos.y }}
    >
      <div className="brand-core" style={{ backgroundImage: `url(${brandPng})` }} />
      <span className="drip drip-a" />
      <span className="drip drip-b" />
    </div>
  );
};

export default CustomCursor;
