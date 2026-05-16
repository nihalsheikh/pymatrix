import curses

# ---------------------------------------------------------------------------
# RECALIBRATED 256-COLOR PALETTES
# Using pure color families to avoid "muddy" mixing.
# Each list: [Tail-Dim, Tail-Mid, Tail-Bright, Head]
# ---------------------------------------------------------------------------
COLOR_MAP_256 = {
    # 22, 28, 34, 40, 46, 82, 118 are pure greens. 190 was causing the yellow shift.
    "green":   [22,  28,  34,  40,  46,  46,  82,  82,  118, 231],
    "red":     [52,  88,  124, 160, 196, 196, 196, 196, 196, 231],
    "blue":    [17,  18,  19,  20,  21,  27,  33,  39,  45,  231],
    "cyan":    [24,  30,  31,  37,  38,  44,  45,  51,  123, 231],
    "yellow":  [58,  100, 136, 142, 184, 214, 220, 226, 227, 231],
    "magenta": [53,  89,  90,  126, 127, 163, 164, 200, 201, 231],
    "orange":  [94,  130, 166, 172, 202, 208, 214, 215, 221, 231],
    "violet":  [17,  18,  54,  55,  56,  57,  63,  93,  99,  231],
    "pink":    [125, 126, 161, 162, 197, 198, 199, 200, 201, 231],
    # Gold: Replaced muddy 130/172 with brighter 214/220 and added 226/227 for glow.
    "gold":    [136, 142, 178, 184, 214, 220, 220, 226, 227, 231],
    # Silver: Replaced dull greys with higher contrast 250-255 scale.
    "silver":  [240, 242, 244, 246, 248, 250, 252, 253, 254, 255],
    "lavender":[60,  61,  62,  63,  104, 105, 141, 147, 153, 231],
    "midnight":[17,  18,  19,  20,  21,  27,  33,  39,  45,  231],
    "sunset":  [52,  88,  124, 130, 166, 172, 202, 208, 214, 231],
    "forest":  [22,  23,  28,  29,  34,  35,  40,  41,  46,  231],
    "blood":   [52,  52,  88,  88,  124,  124, 160, 160, 196, 231],
    "ocean":   [23,  24,  25,  30,  31,  32,  37,  38,  39,  231],
}


def init_colors(color_name, no_256=False):
    if not curses.has_colors(): return False
    curses.start_color()
    curses.use_default_colors()
    
    try:
        colors_count = curses.COLORS
    except AttributeError:
        colors_count = 8

    use_256 = (not no_256) and (colors_count >= 256)
    palette = COLOR_MAP_256.get(color_name, COLOR_MAP_256["green"])
    
    for level, xterm_num in enumerate(palette):
        if use_256:
            curses.init_pair(level + 1, xterm_num, -1)
        else:
            curses.init_pair(level + 1, curses.COLOR_GREEN if level < 8 else curses.COLOR_WHITE, -1)
    return True

def get_attributes(no_bold=False):
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

# Alias for cli.py compatibility
PALETTES_256 = COLOR_MAP_256
