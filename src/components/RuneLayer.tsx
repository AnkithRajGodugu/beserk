// src/components/RuneLayer.tsx
import React, { useEffect } from "react";

/**
 * RuneLayer
 * - Reads static SVGs from /public/runes/
 * - Adds small CSS-only animations (no heavy JS loops)
 * - Graceful fallback if an asset fails to load
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

const FALLBACK_SVG_DATAURI =
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
       <circle cx="64" cy="64" r="44" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="6"/>
       <circle cx="64" cy="64" r="20" fill="rgba(255,255,255,0.06)"/>
     </svg>`
  );

/** on img error, replace src with a tiny inline placeholder and log once */
function handleImgError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  const img = e.currentTarget;
  if (!img) return;
  if (img.dataset._errored) return; // avoid infinite loops
  // mark and swap to fallback
  img.dataset._errored = "1";
  // small console hint for debugging
  // eslint-disable-next-line no-console
  console.warn(`RuneLayer: failed to load ${img.src}, using fallback placeholder.`);
  img.src = FALLBACK_SVG_DATAURI;
}

const RuneLayer: React.FC = () => {
  // Preload rune assets (helpful for HMR/dev)
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    ALL_RUNES.forEach((u) => {
      const i = new Image();
      i.src = u;
      imgs.push(i);
    });
    return () => {
      imgs.forEach((i) => {
        try {
          i.src = "";
        } catch {}
      });
    };
  }, []);

  return (
    <div className="rune-layer" aria-hidden>
      {/* Central eclipse sigil: prefer inline <img> so CSS filters apply */}
      <div className="eclipse-sigil" aria-hidden>
        <img
          src="/runes/eclipse_sigil.svg"
          alt="eclipse sigil"
          draggable={false}
          onError={handleImgError}
          style={{ width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }}
        />
      </div>

      {/* halo runes — five items placed around the circle */}
      <div className="halo-runes" aria-hidden>
        {HALO_RUNES.map((src, idx) => (
          <div
            key={src}
            className="halo-rune"
            style={{ ["--i" as any]: idx }}
            aria-hidden
          >
            <img
              src={src}
              alt={`halo rune ${idx + 1}`}
              draggable={false}
              onError={handleImgError}
            />
          </div>
        ))}
      </div>

      {/* soft glyph clouds (background) — use <img> for filter control */}
      <div className="glyph-cloud cloud-a" aria-hidden>
        <img src="/runes/rune2.svg" alt="glyph cloud a" draggable={false} onError={handleImgError} />
      </div>

      <div className="glyph-cloud cloud-b" aria-hidden>
        <img src="/runes/rune5.svg" alt="glyph cloud b" draggable={false} onError={handleImgError} />
      </div>

      <div className="glyph-cloud cloud-c" aria-hidden>
        <img src="/runes/rune3.svg" alt="glyph cloud c" draggable={false} onError={handleImgError} />
      </div>

      {/* vertical scripture columns */}
      <div className="scripture-col col-left" aria-hidden>
        <img src="/runes/rune6.svg" alt="scripture column left" draggable={false} onError={handleImgError} />
      </div>
      <div className="scripture-col col-right" aria-hidden>
        <img src="/runes/rune1.svg" alt="scripture column right" draggable={false} onError={handleImgError} />
      </div>
    </div>
  );
};

export default RuneLayer;
