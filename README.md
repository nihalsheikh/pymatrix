# Rmatrix - Personal Digital Rain Animation

[![PyPI version](https://img.shields.io/pypi/v/rmatrix.svg?color=blue)](https://pypi.org/project/rmatrix/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2497bc2b-5bf8-4bbc-8083-baa911b5c553/deploy-status)](https://app.netlify.app/projects/rmatrix/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Rmatrix Banner](https://raw.githubusercontent.com/nihalsheikh/rmatrix/main/assets/banner.png)

Rmatrix is a high-fidelity digital rain animation for your terminal, inspired by the iconic visuals of _The Matrix_. Featuring 3D parallax depth, hand-calibrated 256-color palettes, and zero dependencies.

## 🎬 Live Demo

Experience the high-fidelity web version at [rmatrix.netlify.app](https://rmatrix.netlify.app).

## 🚀 Installation

For global use (recommended):

```bash
pipx install rmatrix       # run from anywhere without a python virtual env
```

For local or virtual environments:

```bash
pip install rmatrix
```

## 🎮 Usage

Simply run:

```bash
rmatrix
```

Or use the shorter alias:

```bash
rmx
```

### Command Line Flags

| Short       | Long              | Description                                                                  | Default  |
| :---------- | :---------------- | :--------------------------------------------------------------------------- | :------- |
| `-c`        | `--color`         | Rain color palette (see table below)                                         | `green`  |
| `-s`        | `--speed`         | Animation speed multiplier (0.1 - 5.0)                                       | `1.0`    |
| `-d`        | `--density`       | Stream density (`light`, `medium`, `heavy`)                                  | `medium` |
| `-ch`       | `--chars`         | Character set (`matrix`, `katakana`, `ascii`, `digits`, `symbols`, `binary`) | `matrix` |
| `-l`        | `--length`        | Trail length (`short`, `medium`, `long`)                                     | `medium` |
| `-f`        | `--fps`           | Target frames per second (5 - 60)                                            | `30`     |
| `-b`        | `--bookmark`      | Central glowing text overlay                                                 | `""`     |
| `-mr`       | `--mutation-rate` | Frequency of glyph scrambling (0.0 - 1.0)                                    | `0.05`   |
| `-df`       | `--default`       | Save current flags as factory defaults                                       | `false`  |
| `--reset`   |                   | Reset all settings to factory defaults                                       | `false`  |
| `--no-256`  |                   | Force 8-color mode (legacy terminals)                                        | `false`  |
| `--no-bold` |                   | Disable bold text intensity                                                  | `false`  |
| `-v`        | `--version`       | Show program version and exit                                                |          |

### Color Palettes

Rmatrix features 17 hand-crafted color palettes optimized for 256-color terminals:

| Name       | Description                   |
| :--------- | :---------------------------- |
| `green`    | Classic Matrix (Pure Green)   |
| `gold`     | High-glow Saffron (Brilliant) |
| `silver`   | Metallic Grey (Reflective)    |
| `red`      | Crimson Stream                |
| `blue`     | Cyber Blue                    |
| `cyan`     | Electric Aqua                 |
| `yellow`   | Bright Amber                  |
| `magenta`  | Deep Purple                   |
| `orange`   | Sunset Saffron                |
| `violet`   | Neon Lavender                 |
| `pink`     | Hot Pink                      |
| `lavender` | Soft Purple                   |
| `midnight` | Deep Navy                     |
| `sunset`   | Red-to-Orange Gradient        |
| `forest`   | Deep Wood Greens              |
| `blood`    | Dark Crimson Pulse            |
| `ocean`    | Deep Sea Aqua                 |

## 🛠 Requirements

- Python 3.6+
- Terminal with `curses` support (Linux/macOS)
- Windows: Windows Terminal or PowerShell recommended.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
