import unittest
from unittest.mock import MagicMock, patch
from pymatrix.colors import init_colors, get_attributes, PALETTES_256

class TestColors(unittest.TestCase):
    @patch('curses.has_colors')
    @patch('curses.start_color')
    @patch('curses.use_default_colors')
    @patch('curses.init_pair')
    def test_init_colors(self, mock_init, mock_use, mock_start, mock_has):
        mock_has.return_value = True
        # Explicitly mock curses.COLORS to exist
        with patch('curses.COLORS', 256, create=True):
            result = init_colors("green")
            self.assertTrue(result)
            self.assertTrue(mock_init.called)

    def test_attributes_length(self):
        # We need to mock curses.color_pair for this to work without a terminal
        with patch('curses.color_pair') as mock_pair:
            mock_pair.return_value = 1
            attrs = get_attributes()
            self.assertEqual(len(attrs), 10)

if __name__ == '__main__':
    unittest.main()
