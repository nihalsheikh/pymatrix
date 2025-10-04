import curses
import random
import time

def matrix_rain(stdscr):
    # =========== Setup ===========
    curses.curs_set(0)  # Hide cursor
    stdscr.nodelay(1)   # Non-blocking input
    stdscr.timeout(50)  # Refresh rate in ms

    # =========== Initialize color pairs ===========
    curses.start_color()
    curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)
    curses.init_pair(2, curses.COLOR_WHITE, curses.COLOR_BLACK)

    height, width = stdscr.getmaxyx()

    # =========== Characters to use (Matrix-style characters) ===========
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~"

    # =========== Initialize columns with random positions and speeds ===========
    columns = []
    for x in range(width):
        columns.append({
            'y': random.randint(-height, 0),
            'speed': random.uniform(0.3, 1.5),
            'length': random.randint(5, 25),
            'chars': [random.choice(chars) for _ in range(height)]
        })

    try:
        while True:
            # Check for key press to exit
            key = stdscr.getch()
            if key == ord('q'):
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
                            'speed': random.uniform(0.3, 1.5),
                            'length': random.randint(5, 25),
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
                    col['speed'] = random.uniform(0.3, 1.5)
                    col['length'] = random.randint(5, 25)
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
            time.sleep(0.03)

    except KeyboardInterrupt:
        pass

def main():
    try:
        curses.wrapper(matrix_rain)
    except KeyboardInterrupt:
        pass
    print("\nExiting Matrix...")

if __name__ == "__main__":
    main()
