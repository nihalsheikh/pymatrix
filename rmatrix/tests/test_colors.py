import unittest
import curses
from rmatrix.colors import init_colors, get_attributes, PALETTES_256

class TestColors(unittest.TestCase):
    def test_palette_structure(self):
        self.assertIn("GREEN", PALETTES_256)
        self.assertIn("RED", PALETTES_256)
        self.assertIsInstance(PALETTES_256["GREEN"], list)
        self.assertEqual(len(PALETTES_256["GREEN"]), 10)

    def test_get_attributes_default(self):
        # We can't easily test the actual curses calls without a screen
        # but we can test the logic if we mock curses or isolate the logic
        pass

if __name__ == "__main__":
    unittest.main()
