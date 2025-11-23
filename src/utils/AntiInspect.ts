// src/utils/AntiInspect.ts

export const initAntiInspect = () => {
  // 1. Disable Right Click
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // 2. Disable Common Inspect Keys
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      showBerserkWarning();
    }
  });

  // 3. Detect DevTools Open (Dimensions check)
  let devOpen = false;

  const check = () => {
    if (
      window.outerHeight - window.innerHeight > 160 ||
      window.outerWidth - window.innerWidth > 200
    ) {
      if (!devOpen) {
        devOpen = true;
        showBerserkWarning();
      }
    } else {
      if (devOpen) {
        devOpen = false;
        restoreSite();
      }
    }
  };

  setInterval(check, 500);

  // 4. Prevent text selection / copying
  document.addEventListener("selectstart", (e) => e.preventDefault());
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("paste", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());
};

let originalHTML = "";

function showBerserkWarning() {
  if (document.body.dataset.locked === "true") return;

  originalHTML = document.body.innerHTML;
  document.body.dataset.locked = "true";

  document.body.innerHTML = `
    <div id="berserk-block" style="
      position: fixed;
      inset: 0;
      background: black;
      color: red;
      font-family: 'Cinzel', serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      z-index: 999999;
      animation: glitch-fade 1.6s infinite alternate;
    ">
      <h1 style="
        font-size: 3rem;
        text-shadow: 0 0 18px rgba(255,0,0,0.8);
      ">
        YOU CAN'T SEE ME
      </h1>
      <h2 style="opacity: .75; margin-top: 10px;">Turn off Inspect to continue</h2>
    </div>

    <style>
      @keyframes glitch-fade {
        0% { opacity: 0.8; filter: blur(1px) hue-rotate(0deg); }
        50% { opacity: 0.6; filter: blur(2px) hue-rotate(20deg); }
        100% { opacity: 0.9; filter: blur(1px) hue-rotate(-20deg); }
      }
    </style>
  `;
}

function restoreSite() {
  if (originalHTML) {
    document.body.innerHTML = originalHTML;
    document.body.dataset.locked = "false";
    window.location.reload(); // ensure React state restores
  }
}
