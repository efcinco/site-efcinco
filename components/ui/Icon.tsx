import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function Icon({
  icon: Lucide,
  className = "text-brand",
  size = 22,
  strokeWidth = 1.6,
}: IconProps) {
  return (
    <Lucide
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  );
}
