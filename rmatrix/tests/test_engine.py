import unittest
from rmatrix.engine import Bookmark, _grad_level

class TestEngine(unittest.TestCase):
    def test_bookmark_initialization(self):
        # Bookmark constructor only takes text now
        bookmark = Bookmark("NEO")
        # Text is joined with spaces in constructor
        self.assertEqual(bookmark.text, "N   E   O")

    def test_grad_level(self):
        # Test the gradient level calculation for layer 1 (middle)
        self.assertEqual(_grad_level(0, 20, 1), 9)
        self.assertEqual(_grad_level(1, 20, 1), 8)
        self.assertEqual(_grad_level(2, 20, 1), 7)
        # Ratio based levels
        self.assertEqual(_grad_level(10, 20, 1), 3)

if __name__ == "__main__":
    unittest.main()
