# Personal Website — Creative Direction & Experience Specification

**Working title:** Measured Editorial Workspace  
**Version:** v1.0 · 2026-10-08  
**Status:** Creative direction ready for design exploration; numeric tokens and copy are proposed, not final  
**Strategic rationale:** [`01-positioning-and-design-rationale.md`](./01-positioning-and-design-rationale.md)

---

## 0. Creative brief

### Project statement

Design an exceptionally considered personal website for a designer whose practice spans **AI infrastructure, developer tools, technical visualization, product design, and interactive implementation**. The site must introduce the person with confidence and warmth, showcase selected work accessibly, and provide direct access to more experimental demos, skills, and visuals.

The site should feel like **an editorial page lightly equipped with the instruments of an engineer**: measured, spacious, precise, elegant, curious, and alive in tiny details. It must never resemble a generic AI dashboard or an effects-first 3D showcase.

### Desired reactions

- General visitor: *“I understand what she does; this feels unusually thoughtful and professional.”*
- Design peer: *“I trust her taste, precision, and depth.”*
- Technical peer: *“She can think with systems.”*

### Core creative principles

1. **Person before spectacle.** Identity and capability must register before visual demonstration.
2. **Quiet framework, vivid exceptions.** Most of the page is calm; a few selected artifacts deliver visual delight.
3. **Measured, not mechanical.** Measurement is a metaphor for craft and systems thinking, not a CAD recreation.
4. **Precision with a smile.** Micro-interactions are lightly playful and discoverable, never aggressive.
5. **Progressive depth.** Casual users understand the story; specialists can inspect execution, source, methodology, and constraints.
6. **Real content is the hero.** Works and artifacts are distinguishable by their actual visual identity, not filtered into a monotonous art style.

---

## 1. Brand foundation

### Internal brand line

**A graceful systems designer.**  
**A designer who gives structure to complexity.**

### Keywords

**Primary:** calm / precise / elegant / technically deep / lucid / considered.  
**Secondary:** exploratory / tactile / quietly playful / editorial / systematic.  
**Anti-keywords:** cyberpunk / flashy / corporate / noisy / opaque / gimmicky / overly precious.

### Identity architecture

- **Personal name:** Display the name simply and clearly. Use `YINYUCHENG` as a provisional English wordmark, pending final public-facing name/spacing preference.
- **Role:** `AI Infrastructure Product Designer` as the clearest primary professional label; `Design Engineering`, `Technical Visualization`, and `Developer Experience` can appear as capability descriptors.
- **Optional short descriptor:** `Designing clarity for complex technologies.`
- **Optional long descriptor:** `I design interfaces, systems, and interactive artifacts that make complex technologies easier to understand and use.`

Avoid presenting experimental title variants as factual job titles. Language should reflect the user's real scope and accurately attributed contributions.

### Verbal tone

Concise, articulate, welcoming, informed, and modestly playful. Prefer concrete nouns and active verbs over marketing superlatives. Use specialist language selectively and provide plain-language context.

**Use:** “Exploring how models communicate across devices.”  
**Avoid:** “Revolutionizing next-generation computational ecosystems.”

---

## 2. Visual direction

### Overall composition

**An editorial identity field on a softly engineered surface.** Strong typography, generous negative space, hairline rules, exact alignment, subtle measurement overlays, and a small number of finely rendered objects. The background should feel like it has an invisible coordinate system, not a visible graph-paper texture pasted behind everything.

### Light/dark balance

**Proposed default:** warm off-white editorial background. Deep charcoal for the type and select technical demo surfaces. Soft gray for divisions and ruler components. Blue reserved for brief calibration feedback; warm orange/coral used only when semantic relevance requires it.

A dark-theme implementation may exist later, but visual identity should first be established in the lighter environment. **Do not automatically inherit every dark UI token from existing AI Infra tools.**

### Starting color tokens (to be validated in high-fidelity prototypes)

| Token | Proposed value | Usage |
|---|---|---|
| `--canvas` | `#F7F7F4` | Main reading background |
| `--surface` | `#EFEFEB` | Light inset / specimen surface |
| `--ink` | `#202321` | Primary type and strong rules |
| `--ink-secondary` | `#6D716E` | Supporting labels |
| `--rule` | `#C9CDC8` | Borders, grids and measurement strokes |
| `--rule-faint` | `#E4E7E2` | Ticks and subtle alignment cues |
| `--blue-calibration` | `#3978FF` | Brief ruler cursor focus / alignment state |
| `--dark-stage` | `#15181B` | Embedded technical demo / render background |
| `--material-glint` | `#DDEFF3` | Restrained glass-edge highlights |
| `--signal-warm` | `#F06445` | Meaningful selected state within technical artifacts only |

**Constraint:** Avoid simultaneous blue, coral, chromatic glass highlights, and dense graphics in the same small region. Pick one local accent function.

### Typography

Typography must carry as much identity as motion.

- **Primary direction:** evaluate Paper Mono or another carefully drawn monospaced family for navigation, metadata, measurements, and potentially a large portion of body content.
- **Secondary direction:** pair the mono face with a quiet contemporary grotesk for long-form legibility, but only if the fully-monospaced test fails in readability or tone.
- **Display:** concise, restrained, with confident scale and ample surrounding space; avoid huge all-caps headlines purely to imitate experimental studios.
- **Metadata:** small but legible; do not shrink technical notes into decorative microtext.
- **Numeric typography:** tabular numerals, consistent decimal handling, deliberate minus signs and unit spacing.

**Test two typographic systems:** (A) mono-led editorial; (B) restrained sans body + mono instrumentation. Make a comparative decision using real homepage text, not isolated specimens.

### Grid and rhythm

Proposed desktop framework:

- 12-column underlying layout; visible content need not reveal all columns.
- Core editorial width approximately `1120–1280px` with responsive margins.
- Small, restrained title blocks offset within the grid; large breathing spaces between major sections.
- A dedicated left-side instrumentation gutter on roomy desktops; avoid reducing content width for the sake of rulers on narrow screens.
- Consistent baseline and spacing rhythm; initial spacing scale `4 / 8 / 12 / 16 / 24 / 32 / 48 / 72 / 96px`.
- Hairline rules only where they improve grouping, wayfinding, or calibration.

Use perceptual alignment where strict mathematical alignment produces optical imbalance.

### Object and rendering treatment

- Rendered objects should be **selected evidence**, not an obligatory theme of every section.
- Possible materials: optical glass, soft brushed metal, smoked graphite, precise wireframes, transparent polycarbonate.
- Material effects need convincing edge behavior, depth, and lighting; a CSS backdrop blur alone is not sufficient to create the intended optical quality.
- Glass should have optical expression on rare surfaces while keeping reading and controls sharp.
- The subject must relate to actual work, process, or a small crafted interaction; avoid abstract AI cubes and generic stacked planes as personal identity shorthand.
- A unique object may act as a tactile preview of an artifact, but should never hide its title or description.

---

## 3. Signature interaction: Measurement Metaphor

### Ruler system

**Inspiration:** the pointer-following top and left rulers in Daryl's portfolio and the supplied visual reference. Develop an original implementation with consistent behavior and accessible fallbacks.

**Desktop behavior:**

1. The top edge carries a light horizontal scale; the left edge a light vertical scale.
2. Rulers remain quiet at rest and brighten locally near the pointer's x/y projection.
3. The projected tick or nearby interval gets a cool-blue active indication; the rest stays soft gray.
4. Pointer motion is smooth but follows the actual position accurately (no exaggerated lag).
5. Where appropriate, hovering a visual artifact may temporarily reference its bounds with fine measurement marks and a `FIG.` / `REF.` label.
6. Moving away restores the restful state promptly and subtly.
7. Scroll and resize must not produce inconsistent coordinates or fake measured values.

**Semantics:** If labeled values look like real measurements, they should correspond to actual layout/canvas coordinates or clearly indicate an arbitrary local reference system. Never present fabricated measurements as engineering data.

**Performance:** Prefer minimal DOM/SVG or canvas drawing; throttle pointer updates to animation frames, keep the ruler outside expensive React-wide rerenders, and avoid forced synchronous layout reads on every movement.

**Accessibility and responsive behavior:**

- Hide pointer-following feedback on touch-first layouts; replace with static restrained edge marks if useful.
- Respect `prefers-reduced-motion` and do not use cursor chasing as essential navigation feedback.
- No ruler interaction should capture pointer events or obscure selectable text.
- Focused keyboard elements receive normal visible focus rings independently of pointer feedback.
- Ensure subtle ruler elements never reduce text contrast or clarity.

### Additional micro-interactions

| Detail | Trigger | Behavior | Rationale |
|---|---|---|---|
| `FIG.` reference | Hover / keyboard focus over a work preview | Small reference label appears aligned to the selected boundary | Gives content specimen-like precision |
| Alignment cue | Selected index row | Hairline connects list position to preview, then settles | Reinforces structure and selection |
| Work preview | Hover (desktop), tap (mobile) | Controlled reveal of visual detail; no compulsive auto-animation | Rewards exploration |
| Material glint | Pointer in a small optical specimen | Subtle highlight responds within defined bounds | Makes refinement tangible |
| Index count | Filter change | Updated artifact count with stable tabular numerals | Makes system state legible |
| Navigation transition | Route/section change | Brief, directional, minimal transition | Preserves orientation |

**Micro-delight budget:** One prominent response per interaction; avoid layering magnetic buttons, parallax, custom cursors, blur transitions, and glass lighting onto the same component.

---

## 4. Information architecture

### Recommended primary navigation

`Work` · `Artifacts` · `About` · `Contact`

**Optional later:** `Notes` or `Writing` once enough original content justifies a separate section. Do not ship empty navigation destinations.

### Hierarchy

```text
Home
├── Identity / About preview
├── Selected Works (curated narrative)
├── Selected Artifacts (sampling of demo / skill / visual)
└── Contact / external profiles

Work
├── AI Infra & Developer Experience
├── AI Agent Experiences
└── Operating-System / Cross-Device Experiences

Artifacts
├── All
├── Demos
├── Skills
└── Visuals

About
├── Short professional story
├── Practice & capabilities
├── Selected background / timeline
└── Links & contact
```

### Why these divisions

- **Work** proves professional judgment, scope, decision-making, and real-world outcomes.
- **Artifacts** enables exploration of executable or reusable work without overloading the homepage.
- **About** connects skills and experiences into a coherent person, rather than reciting a résumé.
- **Contact** is consistently accessible and low-friction.

The deeper taxonomy can use `Demo / Skill / Visual` as filters or labels, not three competing headline identities.

---

## 5. Homepage storyboard

### Section 00 — Global frame

**Purpose:** Introduce consistent spatial framing without competing with the content.

- Delicate top and left ruler on pointer-capable desktop devices.
- Small wordmark at top-left offset from the ruler.
- Compact navigation at top-right.
- Fixed- or sticky-feeling editorial framing only if it does not consume meaningful reading space.
- Background is primarily quiet, with tiny reference marks or axes where they help.

### Section 01 — Editorial identity field (first viewport)

**Goal:** Within 5–10 seconds, a visitor should understand the person, role, and distinctive sensibility.

**Proposed hierarchy:**

1. Name / wordmark.
2. Compact, human headline: **“Designing clarity for complex systems.”** (candidate, not locked)
3. Supporting text: “I design interfaces, visual systems, and interactive tools that make complex technologies easier to understand and use.”
4. Short competence line: `AI Infrastructure / Developer Tools / Design Engineering`.
5. One meaningful call to action: `Explore selected work ↗`.
6. A tiny finely rendered / optical specimen or interactive detail, positioned as a secondary accent with ample negative space.

**Avoid:** giant LLM layer stack, gratuitous rotating object, full-screen shader, dense dashboard summaries, huge lists of technology tags.

**Behavior:** Ruler quietly tracks the cursor; the optical accent reacts gently within a small region. Text remains entirely stable and readable.

### Section 02 — Selected Works

**Goal:** Demonstrate how the person solves meaningful problems. 3–5 projects maximum on the initial homepage.

**Layout direction:** Editorial project spreads, not uniform cards. Vary the relationship between image and caption while preserving an underlying grid. Large, selective work visuals can be interspersed with confident whitespace and fine `FIG.` identifiers.

**Each project preview includes:**

- Title in accessible language.
- One-sentence problem or contribution.
- Discipline tags used sparingly.
- Role and timeframe where appropriate.
- Credible preview that belongs to that project.
- Clear link to case study or public demo.

**Candidate work families:** LLM training observability / AI infrastructure developer tooling / Celia AI Agent experience / HarmonyOS multi-device design. Publication must respect employment IP and confidentiality boundaries; internal project details should not be exposed without permission.

### Section 03 — Artifact Preview

**Goal:** Reward curious visitors with functioning objects and original experiments.

- Editorial `index` or compact gallery with `All / Demo / Skill / Visual` filters.
- Visually distinct thumbnails with shared precision of metadata, not identical mock-device wrappers.
- Provide actions appropriate to type: `Open demo`, `View skill`, `Explore visual`, `Source` where publicly available.
- Show only real metadata such as technology, updated date, and public status when verifiable.

### Section 04 — About preview

**Goal:** Establish a coherent personal story and technical range.

**Narrative angle:** From architecture and interaction design to AI infrastructure and computational interfaces. The continuity is thinking in structure, relationships, and intelligibility.

Use a short paragraph paired with small, intelligently composed facts or a restrained timeline. Avoid a giant résumé table.

### Section 05 — Contact

**Goal:** Make collaboration and professional connection easy.

Warm, brief copy; LinkedIn/GitHub/email links; no need for theatrical contact animations. All links must be actual validated destinations.

---

## 6. Work page and case studies

### Case-study template

1. **At a glance:** title, domain, period, role, team context, public/restricted status.
2. **The problem:** plain-language statement of what was complex and why it mattered.
3. **The system:** relevant structural diagram, workflow, or map; technical depth progressively revealed.
4. **Design decisions:** 2–4 substantive choices, with alternatives or trade-offs where publishable.
5. **The result:** interface, demo, released tool, validated finding, or clearly framed prototype.
6. **Reflection:** what changed, what was learned, or what remains open.
7. **Further exploration:** related artifact(s), source, supporting notes where publicly available.

**Audience gradient:** Put the plain-language narrative first; let expert readers expand technical details. Avoid requiring everyone to read an extensive engineering primer.

**Attribution:** Distinguish concept, personal design work, collaborative implementation, independent open-source contribution, and publicly released outputs accurately. Do not claim community reach or impact without evidence.

---

## 7. Artifacts system

### Artifact types

| Type | Core visitor activity | Primary CTA | Suggested details |
|---|---|---|---|
| **Demo** | Run and manipulate a concept or tool | `Launch demo` | Purpose, controls, technical scope, dependencies, source |
| **Skill** | Understand and reuse a method | `View skill` / `Get instructions` | Inputs, outputs, constraints, examples, installation or usage |
| **Visual** | Observe, inspect, and interpret | `Explore visual` | Medium, concept, governing rule, still/video/live state |

### Unified artifact metadata schema (proposed)

```ts
type Artifact = {
  id: string;
  title: string;
  type: 'demo' | 'skill' | 'visual';
  summary: string;
  tags: string[];
  thumbnail: string;
  year?: number;
  role?: string;
  status?: 'live' | 'prototype' | 'archive';
  demoUrl?: string;
  sourceUrl?: string;
  documentUrl?: string;
  relatedWorkIds?: string[];
  visibility: 'public' | 'restricted';
};
```

This is a content-model proposal, not a claim that these fields already exist in the repository.

### Artifact interaction depth

- **Level 0:** Index preview, immediate comprehension.
- **Level 1:** Inspect short description, metadata, and actual media.
- **Level 2:** Open live demo, skill instructions, or full visual.
- **Level 3:** Source, methodology, technical notes, linked work.

Do not impose Physical → Topology → Interface transformations on every artifact. Use continuity of representation only when the artifact actually benefits from it.

### Existing assets to consider

The user's AI_Infra repository includes research demos, technical diagrams, visual studies, and methods that can populate this system. Candidate examples mentioned in prior work: Transformer anatomy, parallel communication, MoE diagrams, layer-level observability, NPU memory exploration, TUI generator, and spatial UI skill. Inventory, ownership, live status, and public suitability must be validated before shipping.

---

## 8. About page: persona and copy direction

### Narrative sequence

1. Present: design at the intersection of computational systems, interface design, and implementation.
2. Method: use structural reasoning, clear visual models, and careful interaction to make technology understandable.
3. Background: architectural training → UX → operating systems and AI infrastructure.
4. Human detail: curiosity, craft, interest in the behavior of tools and visual systems.
5. Evidence: selected work, technical artifacts, source links, and professional context.

### Candidate About copy

> I’m a product designer working at the intersection of complex technologies, visual systems, and interactive implementation. My practice grew from architecture into UX, operating systems, and AI infrastructure — with a consistent interest in how structure helps people understand and use complex systems.
>
> I care about making things precise without making them feel heavy. Sometimes that means a clearer workflow; sometimes it means an interactive diagram, a small tool, or a carefully considered detail.

The copy is intentionally not a formal résumé. Avoid fixed years of experience, quantified reach, or proprietary claims unless independently confirmed and approved for publication.

### Personality: how to express it

- Precise but not pedantic.
- Confident but not self-aggrandizing.
- Technical without becoming inaccessible.
- Curious and subtly playful in details.
- Warm in invitation, disciplined in execution.

---

## 9. Motion and interaction specification

### Motion philosophy

Motion should **explain state changes, sustain orientation, or add a moment of delight**. The default page should still look excellent when fully static.

### Provisional motion tokens

| Token | Range | Typical use |
|---|---|---|
| `--motion-instant` | 90–140ms | Focus, color and rule feedback |
| `--motion-small` | 160–240ms | Hover, compact labels, cursor-related easing |
| `--motion-medium` | 280–420ms | Preview transitions and panel reveal |
| `--motion-editorial` | 450–700ms | Occasional section-specific composition shifts |

These ranges are design hypotheses; tune by real interaction tests. Prefer ease-out behavior, avoid continuous idle animation, and don't stagger every piece of text.

### Interaction states

Define consistent `rest / hover / focus / selected / active / loading / unavailable` states. Any design relying on hover must have a touch and keyboard equivalent when functionality is important.

### Page transitions

- Keep navigation predictable.
- Preserve scroll behavior and focus semantics.
- Use subtle opacity/position adjustment rather than elaborate full-page morphs by default.
- Where an actual artifact has physical/topological representations, a localized continuous morph can be a signature moment — but not a site-wide mandate.

---

## 10. Technical direction

### Suggested baseline

- **Frontend:** Next.js or a similarly capable static-first React framework, TypeScript, semantic HTML/CSS.
- **Content:** MDX or structured local content for case studies and artifact metadata.
- **Graphics:** SVG and CSS for rulers/annotations; Canvas or WebGL only for effects that require it.
- **Motion:** lightweight CSS transitions first; GSAP or Motion library selectively for coordinated sequences.
- **High-fidelity objects:** Three.js / React Three Fiber only where material rendering or actual 3D geometry creates clear value.
- **Glass:** use true distortion/shader treatment for bespoke optical specimens if performance permits; do not apply refractive processing to the site's primary text.
- **Existing demos:** preserve already functioning standalone HTML projects; integrate through dedicated routes or well-controlled embeds rather than indiscriminately rewriting them.

### Performance and reliability

- Readable and complete content without waiting for a WebGL scene.
- No layout shift induced by late-loading render media.
- Respect reduced motion and touch-first devices.
- Lazy load demos, 3D modules, and heavy shader assets.
- Keep pointer instrumentation cheap; avoid main-thread pressure during scrolling.
- Ensure keyboard navigation, focus states, adequate contrast, semantic labeling, and meaningful alternatives for nonessential visual effects.
- Prefer real static imagery or restrained fallback when the browser cannot render an advanced optical effect.

---

## 11. Prototype plan: prove the design before building the whole site

### Prototype A — Editorial Identity

A high-fidelity static first viewport with strong typography, off-white field, quiet measurement apparatus, direct personal introduction, and one very small material specimen. Validate hierarchy and emotional tone **without any animation**.

### Prototype B — Instrumentation

Add top/left cursor rulers to A. Validate precision, visual restraint, boundary behavior, resizing, scroll coordinates, reduced-motion and touch fallback. Compare against A to ensure the interaction actually improves the experience.

### Prototype C — One Crafted Object

Add a single meaningful object with an optional optical/glass surface or physical/topological detail. Validate visual polish, clarity, and performance. Avoid defaulting to layer stacks or generic cubes.

### Prototype D — Real Content Spread

Replace placeholders with one public, approved work case and two different artifact types. Validate whether the system accommodates nontechnical visitors and serious technical readers equally well.

**Suggested order:** A → B → D → C. A content-bearing, carefully measured website is more valuable than a polished 3D object without a credible narrative.

---

## 12. Acceptance criteria

### Identity & audience

- [ ] First viewport conveys who this person is and the type of problems she works on, without interaction.
- [ ] Plain-language summary is intelligible to a non-designer.
- [ ] Designers can identify a coherent typography/grid/detail system rather than isolated stylish effects.
- [ ] Technical readers can reach runnable or inspectable work with minimal friction.

### Visual craft

- [ ] Layout feels calm, spacious, balanced, and deliberately measured.
- [ ] Rulers and annotations support the visual identity without competing with content.
- [ ] A single rendered accent has higher polish than multiple mediocre effects.
- [ ] No generic AI layer-stack hero, fake engineering measurements, or overdecorated glass panels.
- [ ] Visual previews reflect the actual project's medium and intent.

### Usability & engineering

- [ ] Navigation is understandable and works with keyboard, touch, and pointer.
- [ ] Reduced-motion setting does not remove essential meaning.
- [ ] The homepage remains functional when advanced graphics fail.
- [ ] Main text maintains readable contrast; no critical content is behind optical distortion.
- [ ] Cursor feedback stays smooth without measurable scroll degradation.
- [ ] Artifact links and status labels are accurate; private/restricted material is not exposed.

### Content quality

- [ ] 3–5 selected works tell distinct, meaningful stories.
- [ ] At least a few real demos / skills / visuals can be opened from the artifact index.
- [ ] Attribution, outcomes, terminology, and open-source/license claims are truthful.
- [ ] About page articulates the architecture → UX → AI systems path as a coherent method.

---

## 13. Decisions still open

1. Final publicly displayed name and wordmark typography.
2. Light-only launch vs optional user-switchable dark mode.
3. Mono-led body typography vs mono metadata + sans body.
4. Exact homepage intro headline and wording.
5. Whether instrument rulers are global or limited to home/work pages.
6. One **real** public artifact to use as the first high-polish specimen.
7. Final public work inventory, attribution, and compliance review.
8. Hosting path and degree of integration with existing GitHub Pages demos.

These are purposeful design validation items, not blockers to producing a first high-fidelity direction.

---

## 14. Compact handoff brief for Codex / collaborators

> Build an elegant, measured editorial personal website for a product designer of complex computational systems. The site must feel calm, precise, approachable, and technically credible — not like a generic AI dashboard or an experimental 3D showcase. Start with a restrained warm-white canvas, excellent typography, generous editorial spacing, and subtle engineering-inspired framing. Implement finely crafted top and left pointer-following rulers as a secondary signature detail, with proper responsive and accessible behavior. Introduce one small high-quality rendered or optical object only when it supports the identity. The first viewport must communicate who the designer is, what she designs, and why the work matters. Structure content as Selected Works for narrative proof and an Artifact Index for Demos, Skills, and Visuals. Prioritize clarity, real content, micro-interaction quality, and thoughtful systems behavior over large visual effects. Never use a generic Layer Stack as the homepage hero.

---

**Related:** [`01-positioning-and-design-rationale.md`](./01-positioning-and-design-rationale.md) — approved audience analysis, persona, strategy, and rejected directions.
