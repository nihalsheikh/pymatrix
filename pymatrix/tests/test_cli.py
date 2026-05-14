import unittest
from unittest.mock import MagicMock, patch
import os
import json
from pymatrix.cli import build_parser, save_default_config, load_default_config, CHARSETS, CONFIG_FILE

class TestCLI(unittest.TestCase):
    def test_parser_defaults(self):
        parser = build_parser()
        args = parser.parse_args([])
        self.assertEqual(args.color, "green")
        self.assertEqual(args.speed, 1.0)
        self.assertEqual(args.density, "medium")

    def test_charsets_exist(self):
        self.assertIn("matrix", CHARSETS)
        self.assertIn("binary", CHARSETS)

    def test_config_persistence(self):
        from pathlib import Path
        temp_path = Path("/tmp/pymatrix_test_config.json")
        
        # Create a real object/Namespace for serialization, not a Mock
        class MockArgs:
            def __init__(self):
                self.color = "red"
                self.speed = 2.0
                self.density = "heavy"
                self.chars = "binary"
                self.length = "long"
                self.fps = 60
                self.bookmark = "TEST"
                self.mutation_rate = 0.1
                self.no_256 = False
                self.no_bold = False

        args = MockArgs()
        save_default_config(args, path=temp_path)
        
        config = load_default_config(path=temp_path)
        self.assertEqual(config["color"], "red")
        self.assertEqual(config["speed"], 2.0)
        
        # Cleanup
        if temp_path.exists():
            os.remove(temp_path)

if __name__ == '__main__':
    unittest.main()
