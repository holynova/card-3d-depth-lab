(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const h=[{title:"The Thinker",eyebrow:"LEGENDARY MILESTONE",subtitle:"You are chipping away at the shell of your subconscious. What has it revealed to you?",meta:"+150 Tranquility",rank:"L",image:"./assets/alpine-card-art.png",tone:"alpine"},{title:"Night Oracle",eyebrow:"MYTHIC MEMORY",subtitle:"A quiet signal glows beneath the dark. Follow the thought before it disappears.",meta:"+90 Clarity",rank:"M",image:"./assets/dark-card-art.png",tone:"dark"},{title:"Green Signal",eyebrow:"RARE DISCOVERY",subtitle:"You found a living thread in the noise. Let it lead you somewhere generous.",meta:"+120 Vitality",rank:"R",image:"./assets/rainforest-card-art.png",tone:"forest"}],d=[{id:"image",label:"Image",defaultOn:!0},{id:"grain",label:"Grain",defaultOn:!0},{id:"vignette",label:"Vignette",defaultOn:!0},{id:"foil",label:"Foil light",defaultOn:!1},{id:"border",label:"Border",defaultOn:!0},{id:"corner",label:"Corner badge",defaultOn:!1},{id:"copy",label:"Text",defaultOn:!0},{id:"seal",label:"Seal",defaultOn:!0},{id:"flowers",label:"Flowers",defaultOn:!0},{id:"sparkles",label:"Sparkles",defaultOn:!0},{id:"footer",label:"Footer bar",defaultOn:!1},{id:"back",label:"Card back",defaultOn:!0}],b=(e,a)=>`
  <article class="card-scene tone-${e.tone}" aria-label="${e.title}">
    <div class="card-tilter">
      <div class="card-assembly">
        <section class="card-face layer layer-base" data-depth="0">
          <div class="paper-grain"></div>

          <div class="image-window layer" data-depth="8">
            <img src="${e.image}" alt="" />
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
            <p class="eyebrow">${e.eyebrow}</p>
            <h2>${e.title}</h2>
            <p class="subtitle">${e.subtitle}</p>
          </div>

          <footer class="card-footer layer" data-depth="30">
            <span class="rank-mark">${e.rank}</span>
            <span>${e.meta}</span>
            <span class="gem"></span>
          </footer>

          <div class="sparkle-layer layer" data-depth="42" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </section>

        <section class="card-back" aria-label="Card back ${a+1}">
          <img src="./assets/card-back-art.png" alt="" />
        </section>
      </div>
    </div>
  </article>
`,g=document.querySelector("#app");g.innerHTML=`
  <section class="scene-shell" id="sceneShell" aria-label="3D card gallery">
    <a href="https://github.com/holynova/card-3d-depth-lab" class="github-link" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.1 1.09.01.64.01 1.11.01 1.31 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
      <span>GitHub Repo</span>
    </a>
    <div class="ambient ambient-a"></div>
    <div class="ambient ambient-b"></div>
    <div class="stars" aria-hidden="true"></div>
    <div class="card-gallery">
      ${h.map(b).join("")}
    </div>
    <aside class="debug-panel" aria-label="Layer debug panel">
      <div class="debug-title">
        <span>Layers</span>
        <button type="button" id="resetLayers">Reset</button>
      </div>
      <div class="debug-controls">
        ${d.map(e=>`
          <label>
            <input type="checkbox" data-layer="${e.id}" ${e.defaultOn?"checked":""} />
            <span>${e.label}</span>
          </label>
        `).join("")}
      </div>
    </aside>
  </section>
`;const p=document.querySelector("#sceneShell"),n=()=>{d.forEach(e=>{const s=document.querySelector(`[data-layer="${e.id}"]`).checked;p.classList.toggle(`debug-hide-${e.id}`,!s),p.classList.toggle(`debug-show-${e.id}`,s)})};document.querySelectorAll("[data-layer]").forEach(e=>{e.addEventListener("change",n)});document.querySelector("#resetLayers").addEventListener("click",()=>{d.forEach(e=>{document.querySelector(`[data-layer="${e.id}"]`).checked=e.defaultOn}),n()});n();const f=(e,a,s,l)=>{const t=e.getBoundingClientRect(),r=(s-t.left)/t.width,i=(l-t.top)/t.height,o=Math.max(-1,Math.min(1,(r-.5)*2)),c=Math.max(-1,Math.min(1,(i-.5)*2)),u=o*13,y=c*-11;a.style.setProperty("--mx",o.toFixed(4)),a.style.setProperty("--my",c.toFixed(4)),a.style.setProperty("--rx",`${y.toFixed(3)}deg`),a.style.setProperty("--ry",`${u.toFixed(3)}deg`)};document.querySelectorAll(".card-scene").forEach(e=>{const a=e.querySelector(".card-tilter"),s=e.querySelector(".card-assembly");e.addEventListener("pointermove",l=>{e.setPointerCapture?.(l.pointerId),f(e,a,l.clientX,l.clientY)}),e.addEventListener("pointerleave",()=>{a.style.setProperty("--mx","0"),a.style.setProperty("--my","0"),a.style.setProperty("--rx","0deg"),a.style.setProperty("--ry","0deg")}),e.addEventListener("dblclick",()=>{s.classList.toggle("is-flipped")})});
