import { DemoPreset, CLIFlag, PaletteColor, ShowcaseVariation, SocialLink } from "../types";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export const DEMO_PRESETS: DemoPreset[] = [
  { label: "pymatrix --color GREEN", cmd: "pymatrix --color GREEN", options: { color: 'oklch(62% 0.22 145)', speed: 1, density: 1 } },
  { label: "pymatrix --color BLOOD", cmd: "pymatrix --color BLOOD", options: { color: 'oklch(45% 0.25 25)', speed: 1, density: 1 } },
  { label: "pymatrix --color OCEAN", cmd: "pymatrix --color OCEAN", options: { color: 'oklch(55% 0.2 230)', speed: 1, density: 1 } },
  { label: "pymatrix --speed 2.5", cmd: "pymatrix --speed 2.5", options: { color: 'oklch(62% 0.22 145)', speed: 2.5, density: 1 } },
  { label: "pymatrix --density heavy", cmd: "pymatrix --density heavy", options: { color: 'oklch(62% 0.22 145)', speed: 1, density: 2 } },
];

export const CLI_FLAGS: CLIFlag[] = [
  { shorthand: "-df", flag: "--default", desc: "Save current flags as defaults for future runs." },
  { shorthand: "-b", flag: "--bookmark", desc: "Display centrally located glowing text." },
  { shorthand: "-ch", flag: "--chars", desc: "Select character stream type (classic, binary, special)." },
  { shorthand: "-c", flag: "--color", desc: "Choose a color palette (see below)." },
  { shorthand: "-s", flag: "--speed", desc: "Animation speed multiplier (0.1 - 5.0)." },
  { shorthand: "-d", flag: "--density", desc: "Stream density (light, medium, heavy)." },
  { shorthand: "-l", flag: "--length", desc: "Trail length (short, medium, long)." },
  { shorthand: "-f", flag: "--fps", desc: "Target frames per second (1 - 60)." },
  { shorthand: "-mr", flag: "--mutation-rate", desc: "Frequency of glyph scrambling (0.0 - 1.0)." },
];

export const PALETTE_COLORS: PaletteColor[] = [
  { name: 'GREEN', color: 'oklch(65% 0.25 150)' },
  { name: 'RED', color: 'oklch(55% 0.2 25)' },
  { name: 'BLUE', color: 'oklch(55% 0.2 250)' },
  { name: 'CYAN', color: 'oklch(75% 0.15 200)' },
  { name: 'YELLOW', color: 'oklch(85% 0.2 90)' },
  { shorthand: 'MGT', name: 'MAGENTA', color: 'oklch(65% 0.25 330)' },
  { name: 'WHITE', color: 'oklch(98% 0 0)' },
  { name: 'ORANGE', color: 'oklch(70% 0.2 45)' },
  { name: 'VIOLET', color: 'oklch(60% 0.2 280)' },
  { name: 'PINK', color: 'oklch(75% 0.15 350)' },
  { name: 'GOLD', color: 'oklch(80% 0.15 85)' },
  { name: 'SILVER', color: 'oklch(85% 0.05 160)' },
  { name: 'BLOOD', color: 'oklch(40% 0.25 25)' },
  { name: 'OCEAN', color: 'oklch(55% 0.2 230)' },
];

export const SHOWCASE_VARIATIONS: ShowcaseVariation[] = [
  {
    title: "Classic Matrix",
    command: "pymatrix --color GREEN",
    options: { color: 'oklch(65% 0.25 150)', speed: 1 }
  },
  {
    title: "Digital Blood",
    command: "pymatrix --color BLOOD",
    options: { color: 'oklch(55% 0.2 25)', speed: 1.2 }
  },
  {
    title: "Deep Ocean",
    command: "pymatrix --color OCEAN",
    options: { color: 'oklch(55% 0.2 230)', speed: 0.8 }
  },
  {
    title: "Solar Flare",
    command: "pymatrix --color SUNSET --speed 2.0",
    options: { color: 'oklch(65% 0.2 30)', speed: 2.0 }
  },
  {
    title: "Glitch Pulse",
    command: "pymatrix --color NEON-PURPLE --mutation-rate 0.5",
    options: { color: 'oklch(65% 0.3 300)', speed: 1.5, mutationRate: 0.5 }
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/nihalsheikh' },
  { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/sshNihal' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com/in/nihalsheikh' },
  { name: 'Peerlist', icon: SiPeerlist, url: 'https://peerlist.io/nihalsheikh' },
];
