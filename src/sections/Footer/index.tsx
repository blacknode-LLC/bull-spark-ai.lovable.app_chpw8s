import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterDisclaimer } from "@/sections/Footer/components/FooterDisclaimer";

export const Footer = () => {
  return (
    <footer className="text-[oklch(0.955_0.035_85)] bg-[oklch(0.16_0.03_260)] box-border caret-transparent outline-[3px] mt-16 border-t-[3px] border-solid border-[oklch(0.16_0.03_260)]">
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-none max-w-6xl outline-[3px] gap-y-6 mx-auto px-4 py-10 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <FooterBrand />
        <FooterLinks />
        <FooterDisclaimer />
      </div>
    </footer>
  );
};
