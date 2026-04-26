#!/usr/bin/env python3
"""
PyMatrix - Matrix-style terminal rain animation
"""

import argparse
import sys
import curses
import random
import time

def matrix_rain(stdscr, args):
    # =========== Setup ===========
    curses.curs_set(0)  # Hide cursor
    stdscr.nodelay(1)   # Non-blocking input
    stdscr.timeout(int(1000 / args.fps))  # Refresh rate in ms

    # =========== Initialize color pairs ===========
    curses.start_color()
    if args.color:
        curses.init_pair(1, args.color, curses.COLOR_BLACK)  # Tail color
        curses.init_pair(2, curses.COLOR_WHITE, curses.COLOR_BLACK)  # Head color
    else:
        curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)
        curses.init_pair(2, curses.COLOR_WHITE, curses.COLOR_BLACK)

    height, width = stdscr.getmaxyx()
    
    # Override dimensions if specified
    display_width = args.width if args.width is not None else width
    display_height = args.height if args.height is not None else height
    display_columns = args.columns if args.columns is not None else display_width
    
    # Ensure we don't exceed terminal bounds
    display_width = min(display_width, width)
    display_height = min(display_height, height)
    display_columns = min(display_columns, display_width)

    # =========== Characters to use (Matrix-style characters) ===========
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~"

    # =========== Initialize columns with random positions and speeds ===========
    columns = []
    for x in range(display_columns):
        columns.append({
            'y': random.randint(-display_height, 0),
            'speed': random.uniform(0.3, 1.5) * args.speed,
            'length': random.randint(5, args.trail),
            'chars': [random.choice(chars) for _ in range(display_height)]
        })

    try:
        while True:
            # Check for key press to exit
            key = stdscr.getch()
            if key == ord('q') or key == 27:  # q or ESC
                break

            # Update screen size if terminal was resized
            new_height, new_width = stdscr.getmaxyx()
            if new_height != height or new_width != width:
                height, width = new_height, new_width
                # Adjust columns list
                if new_width > len(columns):
                    for x in range(len(columns), new_width):
                        columns.append({
                            'y': random.randint(-height, 0),
                            'speed': random.uniform(0.3, 1.5) * args.speed,
                            'length': random.randint(5, args.trail),
                            'chars': [random.choice(chars) for _ in range(height)]
                        })
                elif new_width < len(columns):
                    columns = columns[:new_width]

            stdscr.erase()

            # Draw each column
            for x, col in enumerate(columns):
                # Update position
                col['y'] += col['speed']

                # Reset column if it's gone off screen
                if col['y'] - col['length'] > height:
                    col['y'] = random.randint(-height // 2, 0)
                    col['speed'] = random.uniform(0.3, 1.5) * args.speed
                    col['length'] = random.randint(5, args.trail)
                    col['chars'] = [random.choice(chars) for _ in range(height)]

                # Draw the tail
                for i in range(col['length']):
                    y = int(col['y'] - i)
                    if 0 <= y < height:
                        char_idx = y % len(col['chars'])
                        char = col['chars'][char_idx]

                        # Occasionally change characters for that flickering effect
                        if random.random() < 0.05:
                            char = random.choice(chars)
                            col['chars'][char_idx] = char

                        try:
                            # Bright white for the head
                            if i == 0:
                                stdscr.addstr(y, x, char, curses.color_pair(2) | curses.A_BOLD)
                            # Fade effect for the tail
                            elif i < col['length'] // 3:
                                stdscr.addstr(y, x, char, curses.color_pair(1) | curses.A_BOLD)
                            else:
                                stdscr.addstr(y, x, char, curses.color_pair(1))
                        except curses.error:
                            # Ignore errors at screen boundaries
                            pass

            stdscr.refresh()

    except KeyboardInterrupt:
        pass

def main():
    parser = argparse.ArgumentParser(
        prog='pymatrix',
        description='Matrix-style terminal rain animation',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  pymatrix                          # Default settings
  pymatrix --columns 80             # Full screen width
  pymatrix --color cyan             # Cyan-colored rain
  pymatrix --speed 0.5              # Half speed
  pymatrix --width 40 --height 20   # Custom dimensions
  pymatrix --clear                  # Clear terminal on start
  pymatrix --matrix 24              # Number of symbols per column
  pymatrix --fps 60                 # Animation frame rate

Environment Variables:
  PYMATRIX_WIDTH  Set default terminal width
  PYMATRIX_HEIGHT Set default terminal height
  PYMATRIX_COLOR  Default color code (e.g., 36 for cyan)

License: MIT - See LICENSE for full text.
       Matrix is a trademark of Warner Bros. Entertainment.
       This is an original creation inspired by popular culture.
"""
    )
    
    # Positional arguments
    parser.add_argument(
        'matrix',
        nargs='?',
        type=int,
        default=24,
        help='Number of symbols per column (default: 24)'
    )
    
    # Output settings
    parser.add_argument(
        '--columns',
        type=int,
        help='Number of columns (default: terminal width)'
    )
    
    parser.add_argument(
        '--width',
        type=int,
        help='Output width in characters (default: columns)'
    )
    
    parser.add_argument(
        '--height',
        type=int,
        help='Output height in characters (default: terminal height)'
    )
    
    # Color options
    parser.add_argument(
        '--color',
        type=int,
        choices=range(1, 17),
        metavar='[1-16]',
        help='ANSI color code (1-16). Common: 36=cyan, 32=green, 33=yellow, 31=red'
    )
    
    parser.add_argument(
        '--speed',
        type=float,
        default=1.0,
        help='Animation speed multiplier (default: 1.0)'
    )
    
    parser.add_argument(
        '--fps',
        type=int,
        default=30,
        help='Frames per second (default: 30)'
    )
    
    parser.add_argument(
        '--clear',
        action='store_true',
        help='Clear terminal on start'
    )
    
    parser.add_argument(
        '--trail',
        type=int,
        default=10,
        help='Length of character trail (default: 10)'
    )
    
    parser.add_argument(
        '--version',
        action='version',
        version='%(prog)s 1.0.0'
    )
    
    args = parser.parse_args()
    
    try:
        curses.wrapper(matrix_rain, args)
    except KeyboardInterrupt:
        pass
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    
    print("\nExiting PyMatrix...")

if __name__ == "__main__":
    main()
