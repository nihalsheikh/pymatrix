import curses
import random
import time

# Depth Layer Config
LAYER_WEIGHTS = [0.35, 0.50, 0.15]
# LOWERED SPEEDS for better control (multiplier applied in loop)
LAYER_SPEEDS = [(0.05, 0.20), (0.20, 0.60), (0.60, 1.20)]
LAYER_BRIGHTNESS = [-3, 0, +3]

DENSITY_STEP = {"light": 4, "medium": 2, "heavy": 1}
TRAIL_LENGTHS = {"short": (4, 12), "medium": (10, 30), "long": (20, 60)}

class Bookmark:
    def __init__(self, text):
        # Increased spacing for readability
        self.text = "   ".join(list(text)) if text else ""
        self.glow_all = False
        self.glow_timer = 0
        self.flicker_indices = []

    def update(self):
        if not self.text: return
        if not self.glow_all and random.random() < 0.003:
            self.glow_all = True
            self.glow_timer = 30
        
        if self.glow_all:
            self.glow_timer -= 1
            if self.glow_timer <= 0: self.glow_all = False
        
        self.flicker_indices = [i for i in range(len(self.text)) if random.random() < 0.2]

def _grad_level(i, trail_l, layer):
    if i == 0: return 9
    if i == 1: return 8
    if i == 2: return 7
    ratio = i / trail_l
    # Smoother linear fade
    base = int(6 * (1 - ratio))
    return max(0, min(6, base + LAYER_BRIGHTNESS[layer]))

def run_engine(stdscr, args, attrs, chars):
    """The main animation loop."""
    step = DENSITY_STEP[args.density]
    len_min, len_max = TRAIL_LENGTHS[args.length]
    height, width = stdscr.getmaxyx()
    bookmark = Bookmark(args.bookmark)
    
    def make_col(x):
        layer = random.choices([0, 1, 2], weights=LAYER_WEIGHTS)[0]
        # Applied speed multiplier here
        speed = random.uniform(*LAYER_SPEEDS[layer]) * args.speed * 0.8
        trail_l = random.randint(len_min, len_max)
        if layer == 0: trail_l = int(trail_l * 1.5)
        
        return {
            "x": x, "y": random.uniform(-height, -1), "speed": speed, "length": trail_l, "layer": layer,
            "buf": [random.choice(chars) for _ in range(height + len_max + 10)], "mut_t": random.uniform(0.0, 1.0),
        }

    columns = [make_col(x) for x in range(0, width, step)]
    paused = False

    while True:
        key = stdscr.getch()
        if key in (ord("q"), ord("Q"), 27): break
        if key == ord(" "):
            paused = not paused
            if paused:
                stdscr.addstr(height // 2, (width - 10) // 2, " PAUSED ", attrs[9])
                stdscr.refresh()
            continue
        if paused: continue

        new_h, new_w = stdscr.getmaxyx()
        if new_h != height or new_w != width:
            height, width = new_h, new_w
            columns = [make_col(x) for x in range(0, width, step)]

        stdscr.erase()
        bookmark.update()
        
        for col in columns:
            col["y"] += col["speed"]
            if col["y"] - (col["length"] * 1.2) > height:
                layer = random.choices([0, 1, 2], weights=LAYER_WEIGHTS)[0]
                col["speed"] = random.uniform(*LAYER_SPEEDS[layer]) * args.speed * 0.8
                col["layer"] = layer
                col["length"] = random.randint(len_min, len_max)
                if layer == 0: col["length"] = int(col["length"] * 1.5)
                col["y"] = random.uniform(-col["length"] * 2.5, -1)

            head_y, buf_l = int(col["y"]), len(col["buf"])
            col["mut_t"] += args.mutation_rate
            for _ in range(int(col["mut_t"])):
                col["buf"][random.randrange(buf_l)] = random.choice(chars)
            col["mut_t"] %= 1.0

            for i in range(col["length"]):
                y = head_y - int(i * 1.2)
                if 0 <= y < height:
                    level = _grad_level(i, col["length"], col["layer"])
                    try:
                        stdscr.addch(y, col["x"], col["buf"][y % buf_l], attrs[level])
                    except curses.error: pass

        if bookmark.text:
            by, bx = height // 2, (width - len(bookmark.text)) // 2
            for i, c in enumerate(bookmark.text):
                b_attr = attrs[9] if bookmark.glow_all else (attrs[7] if i in bookmark.flicker_indices else attrs[2])
                try: stdscr.addch(by, bx + i, c, b_attr)
                except curses.error: pass
        
        stdscr.refresh()
