# 3D Card Depth Lab

An interactive DOM/CSS 3D card prototype. Layers use different `translateZ(...)` depths and pointer-driven `translate3d(...)` multipliers to create an immersive parallax effect.

<p align="center">
  <img src="assets/readme/hero.svg" width="100%" alt="3D Card Depth Lab: An interactive DOM/CSS 3D card prototype. Layers use different depths and pointer-driven multipliers to create an immersive parallax effect.">
</p>


## Links

- **GitHub Repository**: [github.com/holynova/card-3d-depth-lab](https://github.com/holynova/card-3d-depth-lab)
- **Live Demo**: [holynova.github.io/card-3d-depth-lab](https://holynova.github.io/card-3d-depth-lab/)

## Screenshot

![3D Card Depth Lab Screenshot](./docs/screenshot.png)

## Try the effect

Open the live demo and move the pointer across the card. Compare how foreground and background layers move: the effect combines CSS depth with pointer-driven translation rather than a flat image transform.

The recorded reference measurements are in [REFERENCE_MEASUREMENTS.md](REFERENCE_MEASUREMENTS.md).

## Development

```bash
npm ci
npm run dev
```

Build and inspect the production output separately:

```bash
npm run build
npm run preview
```

Open the local address printed by Vite.
