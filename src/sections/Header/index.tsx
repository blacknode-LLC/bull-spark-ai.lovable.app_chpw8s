import { HeaderBrand } from "@/sections/Header/components/HeaderBrand";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderCta } from "@/sections/Header/components/HeaderCta";

export const Header = () => {
  return (
    <header className="sticky backdrop-blur bg-[oklab(0.955_0.00305045_0.0348668_/_0.9)] box-border caret-transparent outline-[3px] z-30 border-b-[3px] border-solid border-[oklch(0.16_0.03_260)] top-0">
      <div className="items-center box-border caret-transparent flex justify-between max-w-6xl outline-[3px] mx-auto px-4 py-3">
        <HeaderBrand />
        <DesktopNav />
        <HeaderCta />
      </div>
    </header>
  );
};
