#!/usr/bin/env python3
"""
PyMatrix - Advanced Matrix Digital Rain (TMatrix-Inspired)
Author: Nihal Sheikh
License: MIT
Version: 1.3.0
"""

import argparse
import sys
import curses
import random
import time

VERSION = "1.3.0"

# ---------------------------------------------------------------------------
# Character sets
# ---------------------------------------------------------------------------
CHARSETS = {
    "ascii":    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "digits":   "0123456789",
    "symbols":  "!@#$%^&*()_+-=[]{}|;:,.<>?/~",
    "katakana": "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ",
    "mixed":    (
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~"
    ),
    "binary":   "01",
}

# ---------------------------------------------------------------------------
# 256-Color Mappings (Dim, Mid, Bright, Head)
# Optimized for high-contrast on all terminal backgrounds
# ---------------------------------------------------------------------------
COLOR_MAP_256 = {
    "green":   (22,  28,  46,  231),
    "red":     (52,  88,  196, 231),
    "blue":    (17,  21,  39,  231),
    "cyan":    (24,  30,  51,  231),
    "yellow":  (58,  100, 226, 231),
    "magenta": (53,  90,  201, 231),
    "white":   (235, 243, 250, 231),
    "orange":  (130, 166, 214, 231),
    "violet":  (54,  91,  135, 231),
    "pink":    (161, 200, 212, 231),
}

COLOR_MAP_8 = {
    "green":   (curses.COLOR_GREEN,   curses.COLOR_GREEN, curses.COLOR_GREEN, curses.COLOR_WHITE),
    "red":     (curses.COLOR_RED,     curses.COLOR_RED,   curses.COLOR_RED,   curses.COLOR_WHITE),
    "blue":    (curses.COLOR_BLUE,    curses.COLOR_BLUE,  curses.COLOR_BLUE,  curses.COLOR_WHITE),
    "cyan":    (curses.COLOR_CYAN,    curses.COLOR_CYAN,  curses.COLOR_CYAN,  curses.COLOR_WHITE),
    "yellow":  (curses.COLOR_YELLOW,  curses.COLOR_YELLOW,curses.COLOR_YELLOW,curses.COLOR_WHITE),
    "magenta": (curses.COLOR_MAGENTA, curses.COLOR_MAGENTA,curses.COLOR_MAGENTA,curses.COLOR_WHITE),
    "white":   (curses.COLOR_WHITE,   curses.COLOR_WHITE, curses.COLOR_WHITE, curses.COLOR_WHITE),
    "orange":  (curses.COLOR_YELLOW,  curses.COLOR_YELLOW,curses.COLOR_YELLOW,curses.COLOR_WHITE),
    "violet":  (curses.COLOR_MAGENTA, curses.COLOR_MAGENTA,curses.COLOR_MAGENTA,curses.COLOR_WHITE),
    "pink":    (curses.COLOR_MAGENTA, curses.COLOR_MAGENTA,curses.COLOR_MAGENTA,curses.COLOR_WHITE),
}

DENSITY_STEP = {"light": 4, "medium": 2, "heavy": 1}

TRAIL_LENGTHS = {
    "short":  (5,  15),
    "medium": (10, 35),
    "long":   (30, 60),
}

def matrix_rain(stdscr, args):
    # =========== Setup ===========
    curses.curs_set(0)
    stdscr.nodelay(1)
    refresh_ms = int(1000 / args.fps)
    stdscr.timeout(refresh_ms)

    if curses.has_colors():
        curses.start_color()
        curses.use_default_colors()
        use_256 = curses.COLORS >= 256
        cmap = COLOR_MAP_256 if use_256 else COLOR_MAP_8
        dim, mid, bright, head = cmap[args.color]
        curses.init_pair(1, dim,    -1)
        curses.init_pair(2, mid,    -1)
        curses.init_pair(3, bright, -1)
        curses.init_pair(4, head,   -1)
    
    bold = curses.A_BOLD if not args.no_bold else 0
    chars = CHARSETS[args.chars]
    step = DENSITY_STEP[args.density]
    len_min, len_max = TRAIL_LENGTHS[args.length]

    height, width = stdscr.getmaxyx()
    
    def make_column(x_pos):
        speed = random.uniform(0.3, 1.5) * args.speed
        base_len = random.randint(len_min, len_max)
        length = int(base_len * (1.2 / speed))
        length = max(len_min, min(len_max, length))
        
        return {
            'x': x_pos,
            'y': random.uniform(-height * 1.5, 0),
            'speed': speed,
            'length': length,
            'chars': [random.choice(chars) for _ in range(height + len_max)]
        }

    columns = [make_column(x) for x in range(0, width, step)]

    try:
        if args.clear: stdscr.clear()
            
        while True:
            key = stdscr.getch()
            if key in [ord('q'), ord('Q'), 27]: break

            new_h, new_w = stdscr.getmaxyx()
            if new_h != height or new_w != width:
                height, width = new_h, new_w
                columns = [make_column(x) for x in range(0, width, step)]
                stdscr.clear()

            stdscr.erase()

            for col in columns:
                col['y'] += col['speed']

                if col['y'] - (col['length'] * 1.2) > height:
                    col['y'] = random.uniform(-20, -2)
                    col['speed'] = random.uniform(0.3, 1.5) * args.speed
                    base_len = random.randint(len_min, len_max)
                    col['length'] = int(base_len * (1.2 / col['speed']))
                    col['length'] = max(len_min, min(len_max, col['length']))

                x = col['x']
                if x >= width: continue

                for i in range(col['length']):
                    # Added 1.2 multiplier for tiny vertical spacing between chars
                    y_draw = int(col['y'] - (i * 1.2))
                    if not (0 <= y_draw < height): continue

                    char_idx = y_draw % len(col['chars'])
                    char = col['chars'][char_idx]

                    flicker_chance = 0.18 if i < 3 else 0.03
                    if random.random() < flicker_chance:
                        char = random.choice(chars)
                        col['chars'][char_idx] = char

                    try:
                        # TMatrix-Style 5-ZONE GRADIENT
                        if i == 0:  # Head (White + Bold)
                            stdscr.addstr(y_draw, x, char, curses.color_pair(4) | bold)
                        elif i < 3: # Glowing cluster near head
                            stdscr.addstr(y_draw, x, char, curses.color_pair(3) | bold)
                        elif i < col['length'] * 0.45:  # Upper Tail (Vibrant)
                            stdscr.addstr(y_draw, x, char, curses.color_pair(3) | bold)
                        elif i < col['length'] * 0.75:  # Mid Tail
                            stdscr.addstr(y_draw, x, char, curses.color_pair(2))
                        else:  # Fading Dim Tail
                            stdscr.addstr(y_draw, x, char, curses.color_pair(1) | curses.A_DIM)
                    except curses.error:
                        pass

            stdscr.refresh()

    except KeyboardInterrupt:
        pass

def main():
    parser = argparse.ArgumentParser(
        prog='pymatrix',
        description='PyMatrix - TMatrix-inspired High Performance Rain',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter
    )
    
    parser.add_argument('-c', '--color', choices=list(COLOR_MAP_256.keys()), default='green', help='Rain color')
    parser.add_argument('-s', '--speed', type=float, default=1.0, help='Speed multiplier')
    parser.add_argument('-d', '--density', choices=list(DENSITY_STEP.keys()), default='medium', help='Rain density')
    parser.add_argument('--chars', choices=list(CHARSETS.keys()), default='mixed', help='Character set')
    parser.add_argument('-l', '--length', choices=list(TRAIL_LENGTHS.keys()), default='medium', help='Trail length')
    parser.add_argument('-f', '--fps', type=int, default=30, help='Frames per second')
    parser.add_argument('-C', '--clear', action='store_true', help='Clear terminal on start')
    parser.add_argument('--no-bold', action='store_true', help='Disable bold text')
    parser.add_argument('-v', '--version', action='version', version=f'%(prog)s {VERSION}')

    args = parser.parse_args()
    try:
        curses.wrapper(matrix_rain, args)
    except KeyboardInterrupt: pass
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    finally:
        print("\033[?25h", end="")

if __name__ == "__main__":
    main()
