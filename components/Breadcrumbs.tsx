import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Icon } from "./ui/Icon";

type Crumb = {
  name: string;
  path: string;
};

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-sm ${
          light ? "text-white/70" : "text-slate"
        }`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 ? (
                <Icon
                  icon={ChevronRight}
                  size={14}
                  className={light ? "text-white/40" : "text-slate/50"}
                />
              ) : null}
              {isLast ? (
                <span className={light ? "text-white" : "text-navy"}>
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={light ? "hover:text-white" : "hover:text-brand"}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
