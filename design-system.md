# Spanwire design system

Designs (Workspaces with the Wire graph, Activity, Dashboard, Settings, Sign in) are on the Superdesign canvas: https://superdesign.dev/teams/75d4f059-8dfb-4e2e-81de-3365fccc988f/projects/87260f68-5013-4a37-8241-2c942e094480

## Product

Spanwire is a multi-tenant MCP server that lets AI agents on different machines message each other. Humans use the web app to manage **workspaces**; inside a workspace they **connect agents** (each gets a token bound to one **agent** name), see which agents are live, and inspect **activity** (messages between agents, connection events). Workspaces belong to **organizations**; people are admins or members. Audience: developers and ops people running agent fleets, and the team leads who pay for them.

## Brand

- **Name:** Spanwire. A span wire is the steel cable strung between two poles across an intersection; the traffic signals hang from it. In utility work the supporting cable is called the messenger. At sea, a spanwire links two ships under way so cargo can cross between them.
- **Tagline:** "String a wire between your agents."
- **Mark:** a small connected graph: three agents as nodes (the poles) joined by wires that sag slightly, with one amber dot riding a wire, a message on its way. Steel on light surfaces, light on steel. Wordmark "Spanwire" in Overpass 800, tracking -0.02em, beside the mark.
- **Core metaphor:** agents are the poles; the wires strung between them are the connections they can message over. The product draws a workspace as a connected graph of poles and wires, never as a single line and never with traffic lights. Wires show direction (send, receive, both) and light up in signal amber when messages crossed them recently.
- **Vocabulary:** wire words (string a wire, hang a message, cut the line) are for marketing only. The UI and MCP tools keep workspace, agent, message, token.

## Visual style: engineered, calm, signal-coded

Infrastructure you can rely on. Cool paper background, white surfaces, steel ink, and colour used only as signal. No gradients, no decorative illustration. Dark mode follows the system setting: steel surfaces (#10181d page, #172228 cards), light text (#e3e9eb), and primary actions flip to light; the tokens are in `frontend/app/globals.css`. Emails and the link preview stay light.

### Colour: the traffic signal is the status system

Green, amber and red are reserved for status; nothing decorative uses them.

- `--background` #F2F4F3 (paper, page background)
- `--card` #FFFFFF (cards, tables, nav)
- `--muted` #E9EDEC (table header, hover rows, segmented track)
- `--border` #D3DADB (1px borders, dividers)
- `--foreground` #16242C (steel: primary text)
- `--muted-foreground` #56656D (secondary text)
- `--faint` #8A979D (captions, placeholders)
- `--primary` #16242C steel, `--primary-foreground` #FFFFFF, `--primary-hover` #24363F (primary buttons are steel, not coloured)
- `--primary-soft` #E6EBED (selected rows, step numbers, avatar background)
- `--signal` #EBA417 signal amber: messages on the wire (the dot in the mark, recently used wires in agent maps), focus ring, active nav/tab underline. Never used as text on light surfaces.
- Green lamp `--success` #1E8757 / soft #E1F2E9: live, active, delivered, connected
- Amber lamp `--warning` #946200 text / soft #FCF1D9: waiting, not yet delivered, expiring, revoked, "Shared?"
- Red lamp `--destructive` #C4312A / soft #FBE9E7: rejected, errors, delete

### Typography

- Overpass for everything (400 / 600 / 800); it is drawn from Highway Gothic, the lettering on US road signs. Overpass Mono only for token prefixes (`sw_7Kd2Qp…`), agent names in code contexts, commands and JSON.
- Scale: page title 28px/36 800, tracking -0.015em; section title 18px/28 700; body 15px/24 400; table text 14px/20; captions 13px/18 muted. Sentence case everywhere; no all-caps labels.

### Shape, spacing, elevation

- Radius: 10px cards and tables, 6px buttons, inputs, selects and badges. No pills.
- Spacing on a 4px grid; page gutters 32px desktop / 16px mobile; content max-width 1200px; sections 32px apart.
- Cards: white, 1px border, no shadow. Only floating menus and dialogs get a shadow `0 8px 24px rgba(22,36,44,0.14)`.

### Components

Built on shadcn/ui, restyled to these tokens.

- **Primary button:** steel background, white 15px/600 text, 40px tall, 18px horizontal padding, 6px radius. **Secondary:** white, 1px border, steel text. **Destructive:** red text, no border, or red fill in confirm dialogs.
- **Icon buttons** (copy, edit, regenerate, revoke, delete): ghost, 32px, tooltip, aria-label. Copy swaps to a check for a moment.
- **Inputs & select:** 44px tall, 6px radius, 1px border, focus = 2px signal-amber ring.
- **Tables:** white card, header row `--muted` 13px muted text, rows 56px, bottom border, hover `--muted`.
- **Status badge:** 6px radius, soft lamp background + lamp text: Active (green), Revoked / Expired / Shared? (amber), Not connected / Send only / Receive only (neutral grey on `--muted`).
- **Status dot:** 8px circle, green = live, `--faint` grey = offline. Optionally a 2px ring in the soft colour.
- **Tabs:** line variant; the active tab has steel text and a 2px signal-amber underline.
- **Top nav:** white bar, 1px bottom border; logo (mark + wordmark) left; links Dashboard, Workspaces, Organizations, Settings; active link steel 600 with 2px amber underline; account menu right (avatar square-ish 6px radius with initial on `--primary-soft`).
- **Callout (token shown once):** amber-soft background, 10px radius, mono snippet on white with a copy icon button.

### Motion

150ms colour transitions on hover; menus fade/scale in 120ms. Respect reduced motion.
