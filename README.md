# PyMatrix - Matrix Digital Rain for your Terminal

![PyMatrix Banner](assets/pymatrix%20banner.png)

Experience the iconic falling code effect from **The Matrix** in your terminal. PyMatrix is a high-performance, highly customizable digital rain animation built with Python and the curses library.

---

## 📑 Index
1. [Features](#-features)
2. [Installation](#-installation)
   - [Recommended (pipx)](#recommended-pipx)
   - [Virtual Environment (venv)](#virtual-environment-venv)
3. [Usage](#-usage)
   - [Basic Usage](#basic-usage)
   - [Advanced Options](#advanced-options)
   - [Examples](#examples)
4. [Design Customization](#-design-customization)
5. [Requirements](#-requirements)
6. [Development](#-development)
7. [License](#-license)

---

## 🚀 Features

- **Advanced Customization:** Multiple character sets (Katakana, Binary, Symbols, ASCII).
- **Vibrant Colors:** Support for 7 cinematic color schemes.
- **Adjustable Density:** Control how many streams appear (Light, Medium, Heavy).
- **Parallax Visuals:** Smooth fading trails and glowing leading characters.
- **Cross-Platform:** Works natively on Linux, macOS, and Windows.

---

## 📦 Installation

### Recommended (pipx)
If you have `pipx` installed, this is the cleanest way to install PyMatrix globally:
```bash
pipx install git+https://github.com/nihalsheikh/pymatrix.git
```

### Virtual Environment (venv)
For local development or if you don't want to use pipx:
```bash
git clone https://github.com/nihalsheikh/pymatrix.git
cd pymatrix
python3 -m venv .venv
source .venv/bin/activate
pip install -e ./pymatrix
```

---

## 🎮 Usage

### Basic Usage
Simply run:
```bash
pymatrix
```
Or use the shorthand:
```bash
pym
```

### Advanced Options
| Flag | Long Flag | Description | Values |
|------|-----------|-------------|--------|
| `-c` | `--color` | Rain color | green, red, blue, cyan, etc. |
| `-s` | `--speed` | Animation speed | 0.1 - 5.0 |
| `-d` | `--density`| Stream density | light, medium, heavy |
| | `--chars` | Character set | katakana, binary, ascii, etc. |
| `-l` | `--length` | Trail length | short, medium, long |
| `-f` | `--fps` | Target FPS | 5 - 60 |
| `-C` | `--clear` | Clear terminal | (flag) |

### Examples
**Classic Japanese Rain:**
```bash
pymatrix --chars katakana -c green -d heavy
```

**Cyberpunk Red Binary:**
```bash
pym -c red --chars binary -s 1.5 -l long
```

---

## 🎨 Design Customization
PyMatrix uses a triple-tier rendering engine:
1. **The Head:** A bright white character that glows.
2. **The Bright Tail:** The top 60% of the trail maintains high vibrancy.
3. **The Dim Tail:** The bottom 40% gracefully fades into the background.

---

## 💻 Requirements
- **Python:** 3.6 or higher.
- **Terminal:** ANSI-compatible terminal (Linux Terminal, macOS Terminal, Windows Terminal, WSL).
- **Fonts:** For Katakana support, ensure your terminal font supports Unicode (e.g., *Cascadia Code*, *Fira Code*).

---

## 🛠 Development
The project is split into two parts:
- `pymatrix/`: The Python CLI application.
- `web/`: The Next.js marketing website.

To run the website locally:
```bash
cd web
npm install
npm run dev
```

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for the full text.

---

*Matrix is a trademark of Warner Bros. Entertainment. This project is a non-commercial tribute inspired by popular culture.*
