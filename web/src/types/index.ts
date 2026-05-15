import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface MatrixRainProps {
  fontSize?: number;
  speed?: number;
  color?: string;
  glow?: boolean;
  opacity?: number;
  density?: number;
  mutationRate?: number;
}

export interface CommandBlockProps {
  command: string;
  className?: string;
  color?: string;
  showBorderBeam?: boolean;
}

export interface DemoPreset {
  label: string;
  cmd: string;
  options: {
    color: string;
    speed: number;
    density: number;
  };
}

export interface CLIFlag {
  shorthand: string;
  flag: string;
  desc: string;
}

export interface PaletteColor {
  name: string;
  color: string;
  shorthand?: string;
}

export interface ShowcaseVariation {
  title: string;
  command: string;
  options: {
    color: string;
    speed: number;
    mutationRate?: number;
  };
}

export interface SocialLink {
  name: string;
  icon: IconType | LucideIcon;
  url: string;
}

export interface ElectricBorderProps {
  children?: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface Feature {
  id: string;
  title: string;
  desc: string;
}
