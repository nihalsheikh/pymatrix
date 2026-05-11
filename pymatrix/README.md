# PyMatrix - Matrix Digital Rain for your Terminal

Experience the iconic falling code effect from **The Matrix** in your terminal. PyMatrix is a high-performance, customizable digital rain animation built with Python and the curses library.

## 🚀 Features

- **8 ANSI Colors:** Classic green, cyan, red, blue, magenta, yellow, white, and black.
- **Customizable:** Adjust speed, trail length, and FPS.
- **Cross-Platform:** Works on Linux, macOS, and Windows (via WSL/Windows Terminal).
- **High Performance:** Smooth animation with very low resource usage.
- **Easy Installation:** Install via pip and run with `pymatrix` or `pym`.

## 📦 Installation

Ensure you have Python 3.6+ installed, then run:

```bash
pip install pymatrix
```

*Note: Windows users might need `pip install windows-curses` if not using WSL.*

## 🎮 Usage

Simply run:

```bash
pymatrix
```

or use the shorthand:

```bash
pym
```

### Options

```text
-c, --color  Rain color (green, red, blue, cyan, etc.)
-s, --speed  Animation speed multiplier (default: 1.0)
-t, --trail  Length of character trail (default: 12)
-f, --fps    Frames per second (default: 30)
-C, --clear  Clear terminal before starting
-v, --version Show version information
-h, --help   Show help message
```

## 📜 License

This project is licensed under the MIT License.
