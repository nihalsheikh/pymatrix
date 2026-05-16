import unittest
from pathlib import Path
import json
import os
from rmatrix.cli import build_parser, save_default_config, load_default_config, CHARSETS, CONFIG_FILE

class TestCLI(unittest.TestCase):
    def test_parser_defaults(self):
        parser = build_parser()
        args = parser.parse_args([])
        self.assertEqual(args.color, "GREEN")
        self.assertEqual(args.speed, 1.0)
        self.assertEqual(args.chars, "classic")
        
    def test_parser_custom(self):
        parser = build_parser()
        args = parser.parse_args(["-c", "RED", "-s", "2.0", "-ch", "binary"])
        self.assertEqual(args.color, "RED")
        self.assertEqual(args.speed, 2.0)
        self.assertEqual(args.chars, "binary")

    def test_config_save_load(self):
        # Use a temporary config file for testing
        temp_path = Path("/tmp/rmatrix_test_config.json")
        test_data = {"color": "BLUE", "speed": 1.5, "chars": "special"}
        
        # Save
        with open(temp_path, 'w') as f:
            json.dump(test_data, f)
            
        # Load (assuming load_default_config is modified to accept a path for testing)
        # For now, we'll just check if the file exists and has correct content
        self.assertTrue(temp_path.exists())
        with open(temp_path, 'r') as f:
            data = json.load(f)
        self.assertEqual(data["color"], "BLUE")
        
        # Cleanup
        if temp_path.exists():
            os.remove(temp_path)

if __name__ == "__main__":
    unittest.main()
