import { SideNav } from "@/components/v2/SideNav";
import { CustomCursor } from "@/components/CustomCursor";
import { FooterV2 } from "@/components/v2/FooterV2";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-white text-ink">
      <CustomCursor />
      <SideNav />
      <div className="flex-1 lg:pl-24">{children}</div>
      <FooterV2 />
    </div>
  );
}
