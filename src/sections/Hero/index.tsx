import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroMedia } from "@/sections/Hero/components/HeroMedia";

export const Hero = () => {
  return (
    <section className="relative box-border caret-transparent outline-[3px]">
      <div className="items-center box-border caret-transparent gap-x-10 grid grid-cols-none max-w-6xl outline-[3px] gap-y-10 mx-auto pt-14 pb-10 px-4 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pt-20 md:pb-16">
        <HeroContent />
        <HeroMedia />
      </div>
    </section>
  );
};
