import unittest
from rmatrix.colors import PALETTES_256

class TestColors(unittest.TestCase):
    def test_palette_structure(self):
        # Palettes are now lowercase
        self.assertIn("green", PALETTES_256)
        self.assertIn("red", PALETTES_256)
        self.assertIsInstance(PALETTES_256["green"], list)
        self.assertEqual(len(PALETTES_256["green"]), 10)

if __name__ == "__main__":
    unittest.main()
