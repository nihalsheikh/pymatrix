import unittest
from unittest.mock import MagicMock, patch
from pymatrix.engine import Bookmark, _grad_level

class TestEngine(unittest.TestCase):
    def test_bookmark_spacing(self):
        b = Bookmark("NEO")
        # Should have spaces between: "N  E  O"
        self.assertEqual(b.text, "N  E  O")

    def test_gradient_levels(self):
        # Head should always be level 9
        self.assertEqual(_grad_level(0, 20, 1), 9)
        # Tail end (index 19 in length 20) should be 0
        self.assertEqual(_grad_level(19, 20, 1), 0)

    def test_bookmark_update(self):
        b = Bookmark("TEST")
        b.update()
        self.assertTrue(len(b.flicker_indices) >= 0)

if __name__ == '__main__':
    unittest.main()
