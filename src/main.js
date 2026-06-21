import "./styles.css";

const cards = [
  {
    title: "The Thinker",
    eyebrow: "LEGENDARY MILESTONE",
    subtitle: "You are chipping away at the shell of your subconscious. What has it revealed to you?",
    meta: "+150 Tranquility",
    rank: "L",
    image: "./assets/alpine-card-art.png",
    tone: "alpine",
  },
  {
    title: "Night Oracle",
    eyebrow: "MYTHIC MEMORY",
    subtitle: "A quiet signal glows beneath the dark. Follow the thought before it disappears.",
    meta: "+90 Clarity",
    rank: "M",
    image: "./assets/dark-card-art.png",
    tone: "dark",
  },
  {
    title: "Green Signal",
    eyebrow: "RARE DISCOVERY",
    subtitle: "You found a living thread in the noise. Let it lead you somewhere generous.",
    meta: "+120 Vitality",
    rank: "R",
    image: "./assets/rainforest-card-art.png",
    tone: "forest",
  },
];

const layerControls = [
  { id: "image", label: "Image", defaultOn: true },
  { id: "grain", label: "Grain", defaultOn: true },
  { id: "vignette", label: "Vignette", defaultOn: true },
  { id: "foil", label: "Foil light", defaultOn: false },
  { id: "border", label: "Border", defaultOn: true },
  { id: "corner", label: "Corner badge", defaultOn: false },
  { id: "copy", label: "Text", defaultOn: true },
  { id: "seal", label: "Seal", defaultOn: true },
  { id: "flowers", label: "Flowers", defaultOn: true },
  { id: "sparkles", label: "Sparkles", defaultOn: true },
  { id: "footer", label: "Footer bar", defaultOn: false },
  { id: "back", label: "Card back", defaultOn: true },
];

const cardTemplate = (card, index) => `
  <article class="card-scene tone-${card.tone}" aria-label="${card.title}">
    <div class="card-tilter">
      <div class="card-assembly">
        <section class="card-face layer layer-base" data-depth="0">
          <div class="paper-grain"></div>

          <div class="image-window layer" data-depth="8">
            <img src="${card.image}" alt="" />
            <span class="image-vignette" aria-hidden="true"></span>
          </div>

          <div class="foil-wash layer" data-depth="22" aria-hidden="true"></div>
          <div class="card-border layer" data-depth="24" aria-hidden="true"></div>

          <div class="seal layer" data-depth="32" aria-hidden="true">
            <span></span>
          </div>

          <div class="corner-badge layer" data-depth="24" aria-hidden="true">
            <span class="cloud-mark"></span>
          </div>

          <div class="flower-cluster layer" data-depth="36" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>

          <div class="copy-layer layer" data-depth="34">
            <p class="eyebrow">${card.eyebrow}</p>
            <h2>${card.title}</h2>
            <p class="subtitle">${card.subtitle}</p>
          </div>

          <footer class="card-footer layer" data-depth="30">
            <span class="rank-mark">${card.rank}</span>
            <span>${card.meta}</span>
            <span class="gem"></span>
          </footer>

          <div class="sparkle-layer layer" data-depth="42" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </section>

        <section class="card-back" aria-label="Card back ${index + 1}">
          <img src="./assets/card-back-art.png" alt="" />
        </section>
      </div>
    </div>
  </article>
`;

const app = document.querySelector("#app");

app.innerHTML = `
  <section class="scene-shell" id="sceneShell" aria-label="3D card gallery">
    <a href="https://github.com/holynova/card-3d-depth-lab" class="github-link" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.1 1.09.01.64.01 1.11.01 1.31 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
      <span>GitHub Repo</span>
    </a>
    <div class="ambient ambient-a"></div>
    <div class="ambient ambient-b"></div>
    <div class="stars" aria-hidden="true"></div>
    <div class="card-gallery">
      ${cards.map(cardTemplate).join("")}
    </div>
    <aside class="debug-panel" aria-label="Layer debug panel">
      <div class="debug-title">
        <span>Layers</span>
        <button type="button" id="resetLayers">Reset</button>
      </div>
      <div class="debug-controls">
        ${layerControls.map((layer) => `
          <label>
            <input type="checkbox" data-layer="${layer.id}" ${layer.defaultOn ? "checked" : ""} />
            <span>${layer.label}</span>
          </label>
        `).join("")}
      </div>
    </aside>
  </section>
`;

const sceneShell = document.querySelector("#sceneShell");

const applyLayerState = () => {
  layerControls.forEach((layer) => {
    const input = document.querySelector(`[data-layer="${layer.id}"]`);
    const isOn = input.checked;
    sceneShell.classList.toggle(`debug-hide-${layer.id}`, !isOn);
    sceneShell.classList.toggle(`debug-show-${layer.id}`, isOn);
  });
};

document.querySelectorAll("[data-layer]").forEach((input) => {
  input.addEventListener("change", applyLayerState);
});

document.querySelector("#resetLayers").addEventListener("click", () => {
  layerControls.forEach((layer) => {
    document.querySelector(`[data-layer="${layer.id}"]`).checked = layer.defaultOn;
  });
  applyLayerState();
});

applyLayerState();

const setPointer = (scene, tilter, clientX, clientY) => {
  const rect = scene.getBoundingClientRect();
  const px = (clientX - rect.left) / rect.width;
  const py = (clientY - rect.top) / rect.height;
  const mx = Math.max(-1, Math.min(1, (px - 0.5) * 2));
  const my = Math.max(-1, Math.min(1, (py - 0.5) * 2));

  const rotateY = mx * 13;
  const rotateX = my * -11;

  tilter.style.setProperty("--mx", mx.toFixed(4));
  tilter.style.setProperty("--my", my.toFixed(4));
  tilter.style.setProperty("--rx", `${rotateX.toFixed(3)}deg`);
  tilter.style.setProperty("--ry", `${rotateY.toFixed(3)}deg`);
};

document.querySelectorAll(".card-scene").forEach((scene) => {
  const tilter = scene.querySelector(".card-tilter");
  const assembly = scene.querySelector(".card-assembly");

  scene.addEventListener("pointermove", (event) => {
    scene.setPointerCapture?.(event.pointerId);
    setPointer(scene, tilter, event.clientX, event.clientY);
  });

  scene.addEventListener("pointerleave", () => {
    tilter.style.setProperty("--mx", "0");
    tilter.style.setProperty("--my", "0");
    tilter.style.setProperty("--rx", "0deg");
    tilter.style.setProperty("--ry", "0deg");
  });

  scene.addEventListener("dblclick", () => {
    assembly.classList.toggle("is-flipped");
  });
});
