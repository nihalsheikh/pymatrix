#!/bin/bash
# Rmatrix Uninstallation Script

set -e

APP_NAME="rmatrix"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to display usage
usage() {
    echo "Usage: $0 [--system]"
    echo "  --system   Uninstall system-wide (requires sudo)"
    echo "  Without --system, uninstalls for the current user"
    exit 1
}

# Parse arguments
SYSTEM_UNINSTALL=false
while [[ $# -gt 0 ]]; do
    case $1 in
        --system)
            SYSTEM_UNINSTALL=true
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

if [ "$SYSTEM_UNINSTALL" = true ]; then
    if [ "$EUID" -ne 0 ]; then
        echo -e "${RED}Please run as root for system-wide uninstallation (use sudo).${NC}"
        exit 1
    fi
    INSTALL_PREFIX="/usr/local"
    echo -e "${YELLOW}Uninstalling $APP_NAME system-wide...${NC}"
else
    INSTALL_PREFIX="$HOME/.local"
    echo -e "${YELLOW}Uninstalling $APP_NAME for current user...${NC}"
fi

BIN_DIR="$INSTALL_PREFIX/bin"
SHARE_DIR="$INSTALL_PREFIX/share/$APP_NAME"
DESKTOP_DIR="$INSTALL_PREFIX/share/applications"

# Remove files
echo -e "${GREEN}Removing application files...${NC}"
rm -rf "$SHARE_DIR"
rm -f "$BIN_DIR/$APP_NAME"
rm -f "$DESKTOP_DIR/$APP_NAME.desktop"

# Update desktop database (if update-desktop-database exists)
if command -v update-desktop-database &> /dev/null; then
    update-desktop-database "$DESKTOP_DIR" >/dev/null 2>&1 || true
fi

echo -e "${GREEN}$APP_NAME has been uninstalled successfully!${NC}"
