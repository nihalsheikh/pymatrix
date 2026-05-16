import unittest
import curses
from rmatrix.engine import Bookmark, _grad_level

class TestEngine(unittest.TestCase):
    def test_bookmark_initialization(self):
        bookmark = Bookmark("NEO", 10, 20)
        self.assertEqual(bookmark.text, "NEO")
        self.assertEqual(bookmark.y, 10)
        self.assertEqual(bookmark.x, 20)

    def test_grad_level(self):
        # Test the gradient level calculation
        self.assertEqual(_grad_level(0, 20), 9)
        self.assertEqual(_grad_level(10, 20), 5)
        self.assertEqual(_grad_level(19, 20), 1)
        self.assertEqual(_grad_level(25, 20), 0)

if __name__ == "__main__":
    unittest.main()
