# Reference Card Measurements

Source image:

`/var/folders/3x/crrphdrn1_b43zspwq9xr2d80000gn/T/codex-clipboard-8b2ac6bd-3963-489e-88b1-f9e1c0a61c19.png`

Measured with a pixel script from the supplied screenshot.

## Raw Image

- Image size: `558 x 776px`
- Visible card outer bounds: `547 x 756px`
- Card aspect ratio: `547 / 756 = 0.7235`
- Outer card top offset inside screenshot: `16px`

## Frame

- White frame at card center-left: `17px`
- White frame at card center-right: `16px`
- White frame at center-top: `16px`
- Frame ratio: about `3.1%` of card width
- Outer radius estimate: about `5.3%` of card width

## Typography

- Main title bright-pixel bbox estimate: `398 x 86px` across the title region
- Main title intended visual size: about `8.1%` of card width
- Subtitle visual size: about `3.0%` of card width
- Eyebrow visual size: about `2.0%` of card width
- Footer label visual size: about `2.7%` of card width

## Applied CSS Mapping

The demo uses card-relative units:

- Card ratio: `aspect-ratio: 547 / 756`
- Frame width: `3.1cqw`
- Title: `8.1cqw`
- Subtitle: `3.05cqw`
- Eyebrow: `2.05cqw`
- Footer: `2.75cqw`

At a rendered `360px` card width, this gives:

- Card height: about `497.5px`
- Border width: about `11px`
- Title: about `29.2px`
- Subtitle: about `11px`
- Eyebrow: about `7.4px`
- Footer: about `9.9px`
