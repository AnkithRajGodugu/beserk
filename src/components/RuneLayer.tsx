// src/components/RuneLayer.tsx
import React, { useEffect } from "react";

/**
 * RuneLayer
 * - Fully CSS-driven animations
 * - Loads halo runes, clouds, sigil, scripture columns
 * - Handles missing assets with fallback SVG
 * - Never scrolls the layout (position: fixed)
 */

const HALO_RUNES = [
  "/runes/rune1.svg",
  "/runes/rune2.svg",
  "/runes/rune3.svg",
  "/runes/rune4.svg",
  "/runes/rune5.svg",
];

const ALL_RUNES = [
  ...HALO_RUNES,
  "/runes/rune6.svg",
  "/runes/eclipse_sigil.svg",
];

const FALLBACK_SVG =
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
       <circle cx="64" cy="64" r="44"
         fill="none"
         stroke="#ffffff"
         stroke-width="6"
         stroke-opacity="0.12"/>
       <circle cx="64" cy="64" r="18" fill="rgba(255,255,255,0.08)"/>
     </svg>`
  );

// — replace missing SVGs automatically —
function handleError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (!img.dataset._fail) {
    console.warn("RuneLayer: Missing rune asset → fallback applied:", img.src);
    img.dataset._fail = "1";
    img.src = FALLBACK_SVG;
  }
}

const RuneLayer: React.FC = () => {
  // Preload all runes
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    ALL_RUNES.forEach((src) => {
      const img = new Image();
      img.src = src;
      imgs.push(img);
    });
    return () => imgs.forEach((i) => (i.src = ""));
  }, []);

  return (
    <div className="rune-layer" aria-hidden>
      {/* --- Center Eclipse Sigil --- */}
      <div className="eclipse-sigil">
        <img
          src="/runes/eclipse_sigil.svg"
          alt="Eclipse sigil"
          draggable={false}
          onError={handleError}
        />
      </div>

      {/* --- Halo Runes Orbit Ring --- */}
      <div className="halo-runes">
        {HALO_RUNES.map((src, index) => (
          <div className="halo-rune" key={src} style={{ ["--i" as any]: index }}>
            <img src={src} alt="halo rune" draggable={false} onError={handleError} />
          </div>
        ))}
      </div>

      {/* --- Glyph Clouds (soft background layers) --- */}
      <div className="glyph-cloud cloud-a">
        <img src="/runes/rune2.svg" alt="" draggable={false} onError={handleError} />
      </div>

      <div className="glyph-cloud cloud-b">
        <img src="/runes/rune5.svg" alt="" draggable={false} onError={handleError} />
      </div>

      <div className="glyph-cloud cloud-c">
        <img src="/runes/rune3.svg" alt="" draggable={false} onError={handleError} />
      </div>

      {/* --- Scripture Columns (vertical scroll) --- */}
      <div className="scripture-col col-left">
        <img src="/runes/rune6.svg" alt="" draggable={false} onError={handleError} />
      </div>

      <div className="scripture-col col-right">
        <img src="/runes/rune1.svg" alt="" draggable={false} onError={handleError} />
      </div>
    </div>
  );
};

export default RuneLayer;
