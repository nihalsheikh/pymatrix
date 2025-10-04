<!-- Banner Image -->

![banner-image](./assets/pymatrix%20banner.png)

<h1 align="center"> PYMATRIX </h1>

<h3 align="center">A lightweight terminal animation of the classic Matrix code effect.</h3>

<div align="center">
	<p>
	<img src="https://img.shields.io/github/v/release/nihalsheikh/pymatrix?style=plastic&logo=github&logoColor=white" alt="release">
	<img src="https://img.shields.io/github/license/nihalsheikh/pymatrix?style=plastic&logo=gnu&logoColor=white&label=license&color=blue" alt="license">
	<img src="https://img.shields.io/badge/python-3.6+-green.svg?style=plastic&logo=python&logoColor=white" alt="python">
	<img src="https://img.shields.io/badge/platform-linux-orange.svg?style=plastic&logo=linux&logoColor=white" alt="platform">
	<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=plastic&logo=git&logoColor=white" alt="contributions">
	</p>
</div>

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

## 🚀 Quick Navigation

| Topics                 | Link                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| Project Overview       | [About ➤](#-overview)                                                                                   |
| Captures               | [Screenshot ➤](#-screenshot) <br> [ScreenCast ➤](#-screencast)                                          |
| Upcoming Features      | [Working on... ➤](#️-upcoming-features)                                                                 |
| Installation and Usage | [Dependencies ➤](#dependencies) <br> [Install Guide ➤](#installing-dependencies) <br> [Usage ➤](#usage) |
| Contributions          | [Contributing ➤](#-contribution)                                                                        |
| Maintaining            | [Maintainers](#maintainers)                                                                             |
| License                | [Project License](#-license)                                                                            |

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

### 📖 OVERVIEW

_**just a side project...**_

Pymatrix is a lightweight terminal application that recreates the iconic "digital rain" effect from The Matrix movie. Written in pure Python using only standard library modules, it provides an authentic Matrix experience with cascading green characters, random speeds, and flickering effects.

Current Version: 1.0

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

### 📸 Captures

#### 🔸 Screenshot

On default settings:

<div align="center">
	<img src="./assets/screenshot.png" alt="pymatrix screenshot">
</div>

#### 🔸 Screencast

<div align="center">
	<img src="./assets/screencast.gif" alt="pymatrix screenshot">
</div>

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

### ⚙️ Upcoming Features

- [ ] Customizable colors (red, blue, custom RGB)
- [ ] Adjustable speed and density controls
- [ ] Command-line arguments for configuration
- [ ] Different character sets (Katakana, custom symbols)
- [ ] Rain intensity levels (light, medium, heavy)
- [ ] Pause/resume functionality
- [ ] Configuration file support
- [ ] Multiple visual modes (classic, random, wave)

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

### 🛠️ Installation and Usage

#### Dependencies

This project uses only Python's standard library, making it extremely lightweight with minimal dependencies.
Required

**`Python 3.6+`** - The core runtime
**`python3-curses`** - Terminal manipulation library (usually included with Python)

#### Installing Dependencies

🔸 For Ubuntu/Debian

```
sudo apt-get install python3 python3-curses
```

- On most systems, curses comes pre-installed with Python. If you encounter import errors, install the curses package using your system's package manager.

🔸 Verify Dependencies

```
python3 --version
python3 -c "import curses; print('curses OK')"
```

#### Project Installation: Clone and Run

```
# Clone or download this repository
git clone https://github.com/nihalsheikh/pymatrix.git
```

#### Usage

Two Methods to run the code

```
<!-- 001 -->
# Go inside the project directory
cd pymatrix

# Run with Python
python3 pymatrix.py
```

```
<!-- 002 -->
# Go inside the project directory
cd pymatrix

# Make the script executable
chmod +x pymatrix.py

# and then Run it
./matrix_rain.py
```

#### Controls

`q` - Quit the program gracefully
`Ctrl+C` - Force exit

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

### 🙌 Contribution

Contributions are welcome! Feel free to:

- 🐞 Report bugs
- 💡 Suggest new features
- 📝 Submit pull requests
- 📝 Improve documentation

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

## Maintainers

- [x] **Nihal Sheikh** _`[Core]`_ :
<!-- [nihalsheikh585@gmail.com](mailto:nihalsheikh585@gmail.com) -->

<div>
    <a href="mailto:nihalsheikh585@gmail.com">
    	<img src="https://img.shields.io/badge/nihalsheikh585@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
    </a>
    <a href="https://twitter.com/sshnihal">
    	<img src="https://img.shields.io/static/v1?message=Twitter&logo=x&label=&color=1da1f2&logoColor=white&style=for-the-badge">
    </a>
    <a href="https://github.com/nihalsheikh">
    	<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
    </a>
</div>

<hr style="height: 4px; background-image: linear-gradient(to right, #00FF00, #008000); border: 0;">

## 📜 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
