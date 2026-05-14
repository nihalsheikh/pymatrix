import curses
import sys
from .cli import build_parser, save_default_config, CHARSETS
from .colors import init_colors, get_attributes
from .engine import run_engine

def wrapper(stdscr, args):
    """Curses setup and animation execution."""
    # 1. Initialize Colors
    if not init_colors(args.color, args.no_256):
        pass # Fallback handled inside init_colors
        
    # 2. Get Attributes based on theme
    attrs = get_attributes(args.no_bold)
    chars = CHARSETS.get(args.chars, CHARSETS["matrix"])
    
    # 3. Terminal Global Config
    curses.curs_set(0)              # Hide cursor
    stdscr.nodelay(True)            # Non-blocking getch
    stdscr.timeout(int(1000/args.fps)) # Set frame timing
    
    try:
        run_engine(stdscr, args, attrs, chars)
    except KeyboardInterrupt:
        pass

def main():
    parser = build_parser()
    args = parser.parse_args()
    
    if args.default:
        save_default_config(args)
        
    if not sys.stdout.isatty():
        sys.exit("Error: Pymatrix must be run in an interactive terminal.")
        
    try:
        # curses.wrapper handles initscr(), cbreak(), noecho(), etc.
        curses.wrapper(wrapper, args)
    except KeyboardInterrupt:
        pass
    except Exception as e:
        print(f"Pymatrix Error: {e}", file=sys.stderr)
        sys.exit(1)
    finally:
        # Final terminal cleanup
        print("\033[0m\033[?25h", end="")
        print("\nExiting Matrix...\n")

if __name__ == "__main__":
    main()
