# rmatrix

Personal Digital Rain Animation for terminal and web.

## Project Overview

`rmatrix` is a high-fidelity digital rain animation inspired by *The Matrix*. The project is split into two main components:

1.  **Python CLI (`rmatrix/`):** A lightweight, dependency-free (pure Python + `curses`) terminal application. It supports 256-color palettes, 3D parallax depth, and extensive customization via CLI flags.
2.  **Web Showcase (`web/`):** A modern Next.js 15 application that provides an interactive, high-fidelity web version of the animation. It serves as a live demo and documentation hub.

## Tech Stack

### CLI
- **Language:** Python 3.6+
- **Rendering:** `curses` (standard library)
- **Packaging:** `setuptools` (PyPI: `rmatrix`)

### Web
- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** `lucide-react`, `react-icons`

## Building and Running

### CLI Component (`rmatrix/`)

To install the CLI in editable mode for development:
```bash
pip install -e rmatrix/
```

To run the CLI directly without installation:
```bash
python3 -m rmatrix.rmatrix.main
```

**Utility Scripts:**
- `rmatrix/scripts/install.sh`: Bash script to install `rmatrix` to `~/.local/bin` (user) or `/usr/local/bin` (system).
- `rmatrix/scripts/uninstall.sh`: Bash script to remove the installation.

### Web Component (`web/`)

Navigate to the `web/` directory and use standard npm commands:
```bash
cd web
npm install
npm run dev   # Start development server at localhost:3000
npm run build # Build for production
```

## Testing

### CLI Tests
The CLI uses Python's built-in `unittest` framework. Run all tests from the `rmatrix/` directory:
```bash
cd rmatrix
python3 -m unittest discover tests
```

### Web Tests
(TODO: Implement web-level testing if required, e.g., Playwright or Vitest)

## Development Conventions

- **CLI Customization:** New features for the CLI should be implemented as flags in `rmatrix/rmatrix/cli.py` and handled in `rmatrix/rmatrix/engine.py`.
- **Styling:** The web component uses Tailwind CSS 4 with a custom `@theme` block in `web/src/app/globals.css`. Prefer using CSS variables defined in `:root` for consistency.
- **Typography:** The project uses custom fonts (`Matrix`, `Miltown`) for the "Matrix" aesthetic. These are hosted in `web/public/fonts/`.
- **Privacy:** The project is committed to "Zero Data" (no tracking, no telemetry).

## Project Structure

- `rmatrix/`: Python package source and CLI logic.
- `web/`: Next.js frontend source.
- `assets/`: Project-wide assets (banners, etc.).
- `docs/`: (Optional) Additional documentation (mostly handled in `web/src/app/docs/`).
