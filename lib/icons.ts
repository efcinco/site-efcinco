import { ArrowUpRight, Package, Zap, Wrench, TrendingUp, Palette, Settings, Link as LinkIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  zap: Zap,
  wrench: Wrench,
  trending: TrendingUp,
  palette: Palette,
  settings: Settings,
  link: LinkIcon,
  arrow: ArrowUpRight,
  rocket: Package,
  refresh: Zap,
  search: TrendingUp,
  mouse: Palette,
  lightbulb: Settings,
  plug: LinkIcon,
};

export type IconName = keyof typeof iconMap;

export function getIcon(iconName?: string): LucideIcon {
  if (!iconName) return Package;
  return iconMap[iconName as IconName] || Package;
}
