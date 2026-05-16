import curses
import random

# =============================================================================
# RMATRIX  —  COLOR PALETTES  v0.2.0
# =============================================================================
#
# Each palette is a list of 10 xterm-256 color codes, ordered:
#
#   Index 0–1   deep shadow tail  (renderer applies A_DIM on top)
#   Index 2–4   mid trail body
#   Index 5–8   bright zone
#   Index 9     head — always 231 (pure #ffffff white, no exceptions)
#
# All codes are ≥ 16, bypassing every terminal theme colour remapping.
# Tested on Kitty with MadLime scheme — renders identically on xterm,
# GNOME Terminal, Alacritty, and Konsole.
#
# "crazy" maps to None — the renderer detects this and assigns each
# column a random palette from CRAZY_POOL on spawn/reset.
# =============================================================================

COLOR_MAP_256 = {

    # ── GREEN ─────────────────────────────────────────────────────────────────
    # Authentic Matrix phosphor CRT green. NOT a named-color approximation —
    # these are the exact xterm numbers that produce the original film's glow.
    # Pure green family only. Zero yellow contamination anywhere in the chain.
    #   22  = #005f00  near-black green shadow
    #   28  = #008700  dark green
    #   34  = #00af00  medium-dark green
    #   40  = #00d700  medium green
    #   46  = #00ff00  phosphor green  ← the iconic Matrix colour
    #   82  = #5fff00  near-white green (the slight bloom before white)
    #   121 = #87ffaf  pale phosphor halo
    #   231 = #ffffff  head
    "green":    [22,  22,  28,  34,  40,  46,  46,  82,  121, 231],

    # ── RED ───────────────────────────────────────────────────────────────────
    # Deep crimson shadow through vivid alarm red with a warm blush near-head.
    # More mid-tone punch than the previous version.
    #   52  = #5f0000  near-black red
    #   88  = #870000  dark crimson
    #   124 = #af0000  strong red
    #   160 = #d70000  vivid red
    #   196 = #ff0000  pure red
    #   203 = #ff5f5f  warm coral
    #   210 = #ff8787  hot blush halo
    "red":      [52,  88,  88,  124, 160, 196, 196, 203, 210, 231],

    # ── BLUE ──────────────────────────────────────────────────────────────────
    # Pure navy → royal blue. Capped at 75 (#5fafff) so it never bleeds
    # into cyan territory. One hue family, clean depth gradient.
    #   17  = #00005f  deep navy
    #   21  = #0000ff  pure blue
    #   27  = #005fff  royal blue
    #   33  = #0087ff  bright blue
    #   75  = #5fafff  pale blue halo (not cyan — still reads as blue)
    "blue":     [17,  18,  19,  20,  21,  27,  27,  33,  75,  231],

    # ── CYAN ──────────────────────────────────────────────────────────────────
    # Distinct from blue — deep teal-black through electric cyan.
    "cyan":     [24,  30,  31,  37,  38,  44,  45,  51,  123, 231],

    # ── YELLOW ────────────────────────────────────────────────────────────────
    # The dark tail starts green-olive so the fade looks natural against
    # a dark background. As brightness rises it transitions to pure yellow.
    # Effect: the trailing shadow reads as green; the bright zone reads as
    # yellow. Two moods, one strip.
    #   22  = #005f00  dark green  ← tail shadow starts green
    #   58  = #5f5f00  olive (the green→yellow crossover)
    #   100 = #878700  yellow-green
    #   142 = #afaf00  warm yellow-green
    #   184 = #d7d700  yellow
    #   220 = #ffd700  bright gold-yellow
    #   226 = #ffff00  pure electric yellow
    #   227 = #ffff5f  pale yellow halo
    "yellow":   [22,  58,  100, 142, 184, 220, 220, 226, 227, 231],

    # ── ORANGE ────────────────────────────────────────────────────────────────
    # Saffron (the deep golden-orange of Indian spice) meets hot orange.
    # Dark amber → rich saffron → hot orange blaze.
    # No yellow-shift at the bright end — stays unmistakably orange.
    #   94  = #875f00  dark amber-brown
    #   130 = #af5f00  deep saffron
    #   166 = #d75f00  burnt orange
    #   172 = #d78700  saffron-orange
    #   208 = #ff8700  hot orange
    #   214 = #ffaf00  bright saffron-gold
    #   221 = #ffd75f  pale gold halo
    "orange":   [94,  130, 130, 166, 172, 208, 208, 214, 221, 231],

    # ── GOLD ──────────────────────────────────────────────────────────────────
    # Divine treasure gold. Think of image 1 — that sun-goddess blazing light.
    # Starts deep bronze, rises through amber, erupts into blinding gold-white.
    # The near-head levels (229, 231) are intentionally near-white so the
    # entire top of the strip looks like it's on fire.
    #   94  = #875f00  dark bronze shadow
    #   136 = #af8700  medium amber
    #   178 = #d7af00  rich gold
    #   214 = #ffaf00  bright orange-gold
    #   220 = #ffd700  pure bright gold
    #   226 = #ffff00  yellow-gold blaze
    #   229 = #ffffaf  near-white gold halo  ← makes the strip look lit
    "gold":     [94,  136, 136, 178, 214, 220, 220, 226, 229, 231],

    # ── SILVER ────────────────────────────────────────────────────────────────
    # Cold chrome luminescence. Not flat grey — a high-contrast metallic sheen.
    # Uses the top quarter of the 256 grey ramp for maximum perceived glow.
    # The sharp jump from 246 to 253 in the bright zone creates that chrome
    # specular highlight effect.
    #   234 = #1c1c1c  near-black charcoal
    #   240 = #585858  dark steel
    #   246 = #949494  medium grey
    #   251 = #c6c6c6  light silver
    #   253 = #dadada  bright silver
    #   255 = #eeeeee  near-white chrome
    "silver":   [234, 238, 240, 243, 246, 249, 251, 253, 255, 231],

    # ── MAGENTA ───────────────────────────────────────────────────────────────
    # Deep violet-shadow through vivid electric magenta.
    # Added 206 (#ff87ff) as the halo — softer than 201 and much more striking.
    #   53  = #5f005f  near-black magenta
    #   89  = #87005f  dark purple-magenta
    #   125 = #af005f  deep magenta
    #   161 = #d7005f  vivid magenta-red
    #   162 = #d70087  pure magenta
    #   198 = #ff0087  hot magenta
    #   199 = #ff00af  bright magenta
    #   206 = #ff87ff  pale violet halo
    "magenta":  [53,  89,  125, 125, 161, 162, 198, 199, 206, 231],

    # ── PINK ──────────────────────────────────────────────────────────────────
    # Neon hot-pink. Not pastel — vivid and glowing.
    # Deep rose-black → burning hot-pink → soft blush halo.
    #   89  = #87005f  deep rose-black
    #   125 = #af005f  dark rose
    #   161 = #d7005f  vivid rose-red
    #   162 = #d70087  magenta-pink
    #   198 = #ff0087  hot pink
    #   204 = #ff87d7  bright pink
    #   205 = #ff87ff  neon pink-violet
    #   211 = #ff87af  pale rose halo
    "pink":     [89,  125, 125, 161, 162, 198, 204, 205, 211, 231],

    # ── LAVENDER ──────────────────────────────────────────────────────────────
    # Dreamy, ethereal indigo-to-lavender. Think deep space nebula.
    # Dark indigo → true purple → soft lavender → near-white violet halo.
    #   54  = #5f0087  deep indigo
    #   55  = #5f00af  indigo-violet
    #   60  = #5f5f87  dark slate-blue
    #   97  = #875faf  medium purple
    #   98  = #875fd7  vivid purple
    #   104 = #8787d7  lavender-blue
    #   141 = #af87ff  bright lavender
    #   183 = #d7afff  pale lavender-white  ← ghost-like, beautiful near-head
    "lavender": [54,  55,  60,  61,  97,  98,  104, 141, 183, 231],

    # ── SUNSET ────────────────────────────────────────────────────────────────
    # The full drama of a sky at dusk compressed into one rain strip.
    # Deep space-purple → hot pink → blood orange → amber gold → white sun.
    # Every level tells a different moment of the sunset.
    #   54  = #5f0087  deep space violet (before the sun dips)
    #   90  = #870087  dark purple-dusk
    #   126 = #af0087  crimson-purple
    #   162 = #d70087  hot pink horizon
    #   166 = #d75f00  blood orange
    #   202 = #ff5f00  vivid orange-red
    #   208 = #ff8700  pure orange
    #   214 = #ffaf00  amber gold
    #   220 = #ffd700  bright sun gold
    "sunset":   [54,  90,  126, 162, 166, 202, 208, 214, 220, 231],

    # ── OCEAN ─────────────────────────────────────────────────────────────────
    # Abyssal trench → midnight teal → bright aquamarine surface shimmer.
    # The feeling of looking upward from the ocean floor toward the light.
    # NOT sea-green — pure ocean depth progression.
    #   17  = #00005f  abyssal deep navy-black
    #   23  = #005f5f  midnight teal-black
    #   30  = #008787  deep teal
    #   37  = #00afaf  medium teal
    #   43  = #00d7af  aquamarine
    #   80  = #5fd7d7  bright aqua
    #   86  = #5fffdf  electric aquamarine surface shimmer
    "ocean":    [17,  18,  23,  24,  30,  37,  43,  80,  86,  231],

    # ── FOREST ────────────────────────────────────────────────────────────────
    # Deep pine shadow through lush jade green. Warmer than matrix green.
    "forest":   [22,  23,  28,  29,  34,  35,  40,  41,  46,  231],

    # ── EMBER ─────────────────────────────────────────────────────────────────
    # Replaces 'blood'. Glowing hot embers: charcoal-red → smouldering coal →
    # orange-hot → fire-gold. Tells the story of a dying fire.
    #   52  = #5f0000  charcoal-red ash
    #   88  = #870000  dark coal
    #   124 = #af0000  deep red ember
    #   130 = #af5f00  brown-orange coal
    #   166 = #d75f00  orange-hot coal
    #   202 = #ff5f00  fire-orange
    #   208 = #ff8700  bright fire
    #   214 = #ffaf00  fire-gold
    #   220 = #ffd700  gold flame tip
    "ember":    [52,  88,  124, 130, 166, 202, 208, 214, 220, 231],

    # ── VIOLET ────────────────────────────────────────────────────────────────
    "violet":   [17,  18,  54,  55,  56,  57,  63,  93,  99,  231],

    # ── CRAZY ─────────────────────────────────────────────────────────────────
    # None is the sentinel value the renderer checks for.
    # On column spawn/reset, the renderer calls get_crazy_palette() which
    # picks a random palette from CRAZY_POOL.
    # Individual characters within a strip share the same random palette
    # for that strip — so each rain stream has its own colour identity.
    # The head is always white (level 9 = 231) regardless of the palette.
    "crazy":    None,
}

# Pool used by crazy mode — every real palette, crazy excluded
CRAZY_POOL = [v for k, v in COLOR_MAP_256.items() if v is not None]

# Alias for cli.py compatibility
PALETTES_256 = COLOR_MAP_256


# =============================================================================
# CRAZY MODE SUPPORT
# =============================================================================

def get_crazy_palette() -> list:
    """Return a random palette for a single column in crazy mode."""
    return random.choice(CRAZY_POOL)


# =============================================================================
# CURSES INITIALISATION
# =============================================================================

def init_colors(color_name: str, no_256: bool = False) -> bool:
    if not curses.has_colors():
        return False

    curses.start_color()
    curses.use_default_colors()

    try:
        colors_count = curses.COLORS
    except AttributeError:
        colors_count = 8

    use_256 = (not no_256) and (colors_count >= 256)

    palette = COLOR_MAP_256.get(color_name)

    # Crazy mode or unknown name → fall back to green for initial pair setup.
    # The renderer overrides pairs per-column dynamically for crazy mode.
    if palette is None:
        palette = COLOR_MAP_256["green"]

    for level, xterm_num in enumerate(palette):
        if use_256:
            curses.init_pair(level + 1, xterm_num, -1)
        else:
            curses.init_pair(
                level + 1,
                curses.COLOR_GREEN if level < 8 else curses.COLOR_WHITE,
                -1,
            )

    return True


def init_colors_for_palette(palette: list, use_256: bool = True) -> None:
    """Reinitialise color pairs for a specific palette.

    Called by the renderer for crazy mode — each column resets the pairs
    before drawing itself, so strips get their unique random colour.
    """
    for level, xterm_num in enumerate(palette):
        if use_256:
            curses.init_pair(level + 1, xterm_num, -1)
        else:
            curses.init_pair(
                level + 1,
                curses.COLOR_GREEN if level < 8 else curses.COLOR_WHITE,
                -1,
            )


# =============================================================================
# ATTRIBUTE BUILDER
# =============================================================================

def get_attributes(no_bold: bool = False) -> list:
    """Build the 10-level attribute list used by the renderer.

    Level 0–1 : A_DIM   — tail tip, nearly invisible, dissolves into bg
    Level 2–4 : plain   — mid trail, colour does the work
    Level 5–9 : bold    — bright zone + head cluster
    """
    bold = curses.A_BOLD if not no_bold else 0
    attrs = []
    for level in range(10):
        pair = curses.color_pair(level + 1)
        if level <= 1:
            attrs.append(pair | curses.A_DIM)
        elif level >= 5:
            attrs.append(pair | bold)
        else:
            attrs.append(pair)
    return attrs
