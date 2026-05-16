#!/bin/bash
# Rmatrix Installation Script

set -e

APP_NAME="rmatrix"
VERSION="1.0.0"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SRC_DIR="$PROJECT_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to display usage
usage() {
    echo "Usage: $0 [--system]"
    echo "  --system   Install system-wide (requires sudo)"
    echo "  Without --system, installs for the current user"
    exit 1
}

# Parse arguments
SYSTEM_INSTALL=false
while [[ $# -gt 0 ]]; do
    case $1 in
        --system)
            SYSTEM_INSTALL=true
            shift
            ;;
        --help|-h)
            usage
            ;;
        *)
            echo "Unknown option: $1"
            usage
            ;;
    esac
done

if [ "$SYSTEM_INSTALL" = true ]; then
    if [ "$EUID" -ne 0 ]; then
        echo -e "${RED}Please run as root for system-wide installation (use sudo).${NC}"
        exit 1
    fi
    INSTALL_PREFIX="/usr/local"
    echo -e "${YELLOW}Installing $APP_NAME system-wide...${NC}"
else
    INSTALL_PREFIX="$HOME/.local"
    echo -e "${YELLOW}Installing $APP_NAME for current user...${NC}"
fi

BIN_DIR="$INSTALL_PREFIX/bin"
SHARE_DIR="$INSTALL_PREFIX/share/$APP_NAME"
DESKTOP_DIR="$INSTALL_PREFIX/share/applications"

# Check Python version
PYTHON_VERSION=$(python3 --version | cut -d' ' -f2 | cut -d'.' -f1-2)
REQUIRED_VERSION="3.6"
if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$PYTHON_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo -e "${RED}Error: Python $REQUIRED_VERSION or higher is required.${NC}"
    echo -e "You have Python $PYTHON_VERSION."
    exit 1
fi

# Create directories
echo -e "${GREEN}Creating directories...${NC}"
mkdir -p "$BIN_DIR"
mkdir -p "$SHARE_DIR"
mkdir -p "$DESKTOP_DIR"

# Copy application files
echo -e "${GREEN}Copying application files...${NC}"
cp -r "$SRC_DIR/rmatrix" "$SHARE_DIR/"

# Create wrapper script
echo -e "${GREEN}Creating wrapper script...${NC}"
cat > "$BIN_DIR/$APP_NAME" << EOWRAPPER
#!/bin/bash
# Rmatrix Wrapper Script
export PYTHONPATH="$SHARE_DIR"
exec python3 -m rmatrix.main "\$@"
EOWRAPPER

chmod +x "$BIN_DIR/$APP_NAME"

# Create desktop entry (for Linux)
echo -e "${GREEN}Creating desktop entry...${NC}"
cat > "$DESKTOP_DIR/$APP_NAME.desktop" << EODESKTOP
[Desktop Entry]
Name=Rmatrix
Comment=Matrix-style terminal rain animation
Exec=$BIN_DIR/$APP_NAME
Icon=$SHARE_DIR/assets/logo.png
Terminal=true
Type=Application
Categories=Utility;
EODESKTOP

# Update desktop database (if update-desktop-database exists)
if command -v update-desktop-database &> /dev/null; then
    update-desktop-database "$DESKTOP_DIR" >/dev/null 2>&1 || true
fi

echo -e "${GREEN}$APP_NAME has been installed successfully!${NC}"
if [ "$SYSTEM_INSTALL" = true ]; then
    echo -e "You can now run it by typing: ${YELLOW}$APP_NAME${NC}"
else
    echo -e "Make sure ${YELLOW}$BIN_DIR${NC} is in your PATH."
    echo -e "You can run it by typing: ${YELLOW}$APP_NAME${NC}"
fi
echo -e "To uninstall, run: ${YELLOW}$SCRIPT_DIR/uninstall.sh${NC} $(if [ \"$SYSTEM_INSTALL\" = true ]; then echo '--system'; fi)"
