import argparse
import json
import os
from pathlib import Path
from .colors import PALETTES_256

VERSION = "0.1.7"
CONFIG_DIR = Path.home() / ".config" / "rmatrix"
CONFIG_FILE = CONFIG_DIR / "config.json"

CHARSETS = {
    "matrix": (
        "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ"
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>+-=?"
    ),
    "katakana": "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ",
    "ascii":    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "digits":   "0123456789",
    "symbols":  "!@#$%^&*()_+-=[]{}|;:,.<>?/~",
    "binary":   "01",
}

def save_default_config(args, path=CONFIG_FILE):
    """Save current flags to a persistent JSON file."""
    os.makedirs(path.parent, exist_ok=True)
    config = vars(args)
    # Remove flags that shouldn't be persisted
    config.pop('default', None)
    config.pop('reset', None)
    with open(path, 'w') as f:
        json.dump(config, f)
    print(f"Preferences saved to {path}")

def reset_config(path=CONFIG_FILE):
    """Delete the persistent configuration file."""
    if path.exists():
        os.remove(path)
        print(f"Configuration reset to factory defaults.")
    else:
        print("No custom configuration found.")

def load_default_config(path=CONFIG_FILE):
    """Load flags from the persistent JSON file."""
    if path.exists():
        try:
            with open(path, 'r') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def build_parser():
    """Construct the CLI argument parser."""
    defaults = load_default_config()
    parser = argparse.ArgumentParser(
        prog="rmatrix", 
        description="Rmatrix - Personal Digital Rain Animation"
    )
    
    parser.add_argument("-c", "--color", choices=list(PALETTES_256.keys()), default=defaults.get('color', "green"), help="Rain color palette")
    parser.add_argument("-s", "--speed", type=float, default=defaults.get('speed', 1.0), help="Speed multiplier 0.1-5.0")
    parser.add_argument("-d", "--density", choices=["light", "medium", "heavy"], default=defaults.get('density', "medium"), help="Stream density")
    parser.add_argument("-ch", "--chars", choices=list(CHARSETS.keys()), default=defaults.get('chars', "matrix"), help="Character set")
    parser.add_argument("-l", "--length", choices=["short", "medium", "long"], default=defaults.get('length', "medium"), help="Trail length")
    parser.add_argument("-f", "--fps", type=int, default=defaults.get('fps', 30), help="Target FPS 5-60")
    parser.add_argument("-b", "--bookmark", type=str, default=defaults.get('bookmark', ""), help="Central glowing text")
    parser.add_argument("-mr", "--mutation-rate", type=float, default=defaults.get('mutation_rate', 0.05), help="Mutation frequency")
    parser.add_argument("-df", "--default", action="store_true", help="Save current flags as default")
    parser.add_argument("--reset", action="store_true", help="Reset all settings to factory defaults")
    parser.add_argument("--no-256", action="store_true", default=defaults.get('no_256', False), help="Force 8-color mode")
    parser.add_argument("--no-bold", action="store_true", default=defaults.get('no_bold', False), help="Disable bold text")
    parser.add_argument("-v", "--version", action="version", version="rmatrix " + VERSION)

    return parser
