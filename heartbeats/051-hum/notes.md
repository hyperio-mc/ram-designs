# HUM — Heartbeat #51

**Tagline:** Music for the way you feel
**Theme:** Dark
**Screens:** 6
**Elements:** 519
**Archetype:** media
**Published:** 2026-04-11T12:35:55.051Z

## Design Concept
A Zune-inspired dark music streaming app that channels the design spirit r/UI_Design is currently rediscovering: dark canvas with a single hero accent color, bold display typography as the primary visual element, and album art bleeding into the background atmosphere. The antidote to Spotify and Apple Music's sanitized corporate minimalism.

## Palette
- BASE `#111209` — warm near-black charcoal (Zune hardware warmth, not cold #000000)
- SURF `#191C11` — surface level 1 (warm green-black)
- CARD `#20241A` — card level
- RAIL `#282D20` — rail / active / separator
- LIME `#A3E635` — primary accent (Zune's classic lime green colorway)
- LIME_D `#232E12` — lime 12% tint for chip backgrounds
- MAGENTA `#E535B7` — secondary accent for social/live moments
- MAG_D `#2A1023` — magenta tint
- TEXT `#F0EDE0` — warm cream white (not harsh #FFFFFF)
- TEXT2 `#9A9A82` — muted warm gray
- TEXT3 `#4E4E3A` — very muted

## Album Atmosphere Colors (per-screen)
- Screen 1 (Now Playing): Purple `#7B2D8B` + Red `#D94F3D`
- Screen 2 (Library): Navy `#1A3A7C` + Sky `#4AADE8`
- Screen 3 (Radio): Brown `#7C4A1A` + Amber `#E8A93A`
- Screen 4 (Artist): Forest `#1C6A3C` + Mint `#5DD68A`
- Screen 5 (Playlist): Plum `#6A1C52` + Pink `#D65A9A`
- Screen 6 (Party): Ocean `#1A5C7C` + Cyan `#3ABBE8`

## Screens
1. **Now Playing** — Large album art (280px) with color bloom atmosphere, big track title at 28px/800, waveform scrubber with 56 sine-generated bars, standard controls, volume strip, queue preview
2. **Library** — "your music." in 36px/800 bold opener, 3-column album grid with mosaic color squares, recently added list with mini album art
3. **Radio** — "discover." header, live HUM Radio featured card with magenta LIVE badge, genre station list with activity counts, mood filter chips
4. **Artist** — Giant name text ("AROHA / NGATA") at 52px/900, atmospheric header, popular tracks with play count bars, discography strip
5. **Playlist** — "Late Night / Session" typographic header at 40px/800, mosaic 2x2 album art, full track list with mini art
6. **Listening Party** — "listening / party." in 36px magenta, 8-person listener cluster with initials, reactions strip (🔥✨💚🎵⚡ with counts), live chat messages, message input

## Key Innovations
- **Album art as atmosphere**: Each screen extracts the album's 2 dominant colors and bleeds them into the canvas via semi-transparent rect overlays at 14%/8% opacity. UI becomes the mood of the music.
- **Waveform scrubber**: 56 narrow bars with heights derived from sine waves (sin(i*0.4+1) + sin(i*0.7)). Lime before playhead, rail color after. A circle dot marks the exact position.
- **Typography as hero** (Zune pattern): All artist/track names render at 28-52px, weight 800-900, tight letter-spacing. Library screen opens with "your music." before any content — pure typographic signal.
- **Warm near-black substrate**: BASE #111209 has a green undertone from the 9 in #111209 — warmer than cold charcoal, matching Zune's physical hardware color.

## Research Sources
- r/UI_Design top posts this week: Zune desktop revival thread — "The Zune vibe comes through immediately, especially the typography and dark canvas with accent color" (35 upvotes, multiple comments lamenting neo-brutalist conformity)
- awwwards.com: Bricolage Grotesque in font tags for award-winning sites — confirms bold condensed grotesque for display is premium
- godly.website / reflect.app: chromatic near-black system — BASE #030014 (reflect's purple-black) inspired the warm-undertone approach
- Dribbble / Muzli: album art as atmospheric background — color extracted from art bleeds into UI bg (seen in multiple 2026 music app shots)

## Links
- Design: https://ram.zenbin.org/hum
- Viewer: https://ram.zenbin.org/hum-viewer
- Mock: https://ram.zenbin.org/hum-mock
