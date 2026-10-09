# Kristy's Little Universe ✳

Interactive React/Vite homepage prototype based on the approved visual concept.

## Run

```bash
npm install
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173).

## React Bits Folder integration

This project vendors the official React Bits **JavaScript + CSS Folder** implementation in `src/components/Folder/Folder.jsx` and `Folder.css`, retrieved on 2026-10-09 from [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/Folder). See the [official demo](https://reactbits.dev/components/folder).

The upstream three-paper fan geometry is retained, with local interaction changes: folders rest half-open, mouse hover fans the cards out, and leaving returns to half-open. Touch and Enter/Space toggle the fan. The back and tab now use a single SVG outline to avoid a join. Compatibility changes include importing React for this project's classic JSX transform and omitting the Next.js `use client` directive in Vite. An optional `gradient` prop adds a shared SVG color filter around the two original animated front panels. No additional runtime dependency is needed. The upstream license is included in `src/components/Folder/LICENSE.md`.

`PortfolioFolder` in `src/main.jsx` supplies the user-selected four paired colors: orange/yellow, cobalt/periwinkle, violet/lilac, and silver/fog gray. `folderGradients` defines the front tint and soft highlight; `folderColors` supplies the back color. A shared SVG filter paints fine grain, a 76%-opaque tint, and a thin light rim. A separate layer beneath the tint applies real `backdrop-filter: blur(9px) saturate(1.12)`, clipped to the union of both half-open panels. This blurs the papers behind the cover without blurring the cover edge or exposed cards. The blur must remain outside the SVG color filter's backdrop boundary. Site-specific sizing, captions, card offsets, closed-card focus visibility, and reduced-motion overrides live in `src/style.css`. Hover a folder (or tap/press Enter/Space) to expand it; click a paper card to open the existing section detail. The old timed automatic modal has been removed so the interaction remains visible.

## Customize

Palette approved on 2026-10-09: the four displayed color pairs are finalized. `reserveAqua` is an additional, inactive aqua pair sampled from the supplied reference and converted to sRGB: back `#80CBEA`, front `#A3E0F2`. It is configured in both color maps but not referenced by `data`, so no fifth folder or visible palette change is rendered. To use it later, assign `reserveAqua` as a section's color key.

Folder sizing preserves the upstream 100 × 80 proportions, including tab and corner radii. Both front panels retain their original transforms and solid fills. The optional shared filter paints one gradient through their combined alpha silhouette, avoiding overlap seams. Papers remain outside the filter, so their content and interactions are unchanged. Gradient assets are generated inline and need no network requests.

- Edit `data` in `src/main.jsx` for your projects, text and sections.
- Replace `hello@example.com` with your real email.
- Edit the colors, layout and folder styling in `src/style.css`.
- The folder contents and case-study pages are placeholders, not real portfolio projects.

## Notes

The homepage fills the viewport with a flexible central stage and a footer at the bottom of the document. On smaller screens it grows vertically to keep content usable. The decorative Visual Diary placeholder and its scroll prompt are not rendered until real content is available.

Fonts load from Google Fonts. Respect `prefers-reduced-motion`. This is a homepage prototype, not a deployed website.
