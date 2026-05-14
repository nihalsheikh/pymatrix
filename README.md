# PyMatrix - Personal Digital Rain Animation

[![PyPI version](https://img.shields.io/pypi/v/pymatrix.svg)](https://pypi.org/project/pymatrix/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![PyMatrix Banner](assets/pymatrix%20banner.png)

PyMatrix is a fun and creative digital rain animation for your terminal, inspired by the iconic visuals of The Matrix. It features 3D parallax depth, hand-calibrated 256-color palettes, and a customizable bookmark overlay.

---

## 📑 Index
1. [Key Features](#-key-features)
2. [Installation](#-installation)
3. [Usage](#-usage)
   - [Basic Commands](#basic-commands)
   - [Persistent Defaults](#persistent-defaults)
4. [Showcase](#-showcase)
5. [License](#-license)

---

## 🚀 Key Features

- **3D Parallax Depth:** Simulated layers (Background, Mid, Foreground) for a true tunnel effect.
- **Precision Colors:** 20+ calibrated xterm-256 palettes that work consistently across all terminals.
- **Cinematic Gradients:** 10-level transitions for ultra-smooth comet tails.
- **Persistent Preferences:** Save your favorite settings as defaults.
- **Bookmark Overlay:** Display a central glowing message in your rain.

---

## 📦 Installation

To install PyMatrix officially from PyPI:

```bash
pip install pymatrix
```

*Note: Windows users might need `pip install windows-curses`.*

---

## 🎮 Usage

### Basic Commands
```bash
# Start default green rain
pymatrix

# High-speed red binary rain
pym -c red -ch binary -s 2.0
```

### Persistent Defaults
Save your current configuration as the default for future runs:
```bash
pymatrix -c gold -ch digits -l long -df
```
Next time you run `pym` or `pymatrix`, it will use these settings!

### Bookmark UI
Display a centrally located glowing string (with spacing for better look):
```bash
pymatrix -b "NEO" -c cyan
```

---

## 📽️ Showcase
Check out our [Showcase Page](https://pymatrix.vercel.app/showcase) or our [SHOWCASE.md](SHOWCASE.md) on GitHub for high-resolution GIFs.

---

## 📜 License
Licensed under the **MIT License**.

---

*Matrix is a trademark of Warner Bros. Entertainment. This project is a personal fan creation.*
