# Brand Spec — Dark Cosmic Tux Paint

## Visual system
Deep space night-sky version of Tux Paint's silver/white UI.
Same chunky bubble buttons, same left-toolbar + canvas + bottom-palette layout.
Canvas is a live star field. Mascot lives bottom-left with a speech bubble.

## Color tokens (OKLch)
```css
--bg:            oklch(11% 0.025 265);   /* deep space black-blue */
--panel-bg:      oklch(14% 0.028 265);   /* toolbar/panel bg */
--surface:       oklch(17% 0.030 265);   /* card surfaces */
--fg:            oklch(90% 0.008 265);   /* near-white text */
--muted:         oklch(55% 0.015 265);   /* secondary text */
--border:        oklch(24% 0.035 265);   /* button borders */
--border-light:  oklch(32% 0.030 265);   /* hover border */
--accent:        oklch(62% 0.19 255);    /* electric blue — selections, links */
--accent-green:  oklch(65% 0.15 155);    /* "Tools" header label */
--accent-magic:  oklch(72% 0.20 305);    /* purple — magic tool only */
--accent-glow:   oklch(62% 0.19 255 / 0.4);
```

## Font stacks
- Display: `'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive` (authentic Tux Paint vibe)
- Body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- Mono: `'JetBrains Mono', 'Fira Code', ui-monospace, monospace`

## Layout posture (from reference screenshot)
1. Left toolbar: 2-column grid of bubble buttons, ~110px wide, fills height
2. Canvas: flex-grow, dark star field, sections swap in with slide transition
3. Bottom: palette swatch strip (36px swatches) + mascot row above
4. Top bar: 44px, "Tools" green label left, current section title right
5. Buttons: inner-highlight bevel (not outer shadow), 10px radius, bold on active state
6. Mascot: 56×68px sprite, bottom-left, speech bubble to the right
