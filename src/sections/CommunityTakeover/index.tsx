import { CommunityIntro } from "@/sections/CommunityTakeover/components/CommunityIntro";
import { CommunityPrinciples } from "@/sections/CommunityTakeover/components/CommunityPrinciples";
import { CommunityCta } from "@/sections/CommunityTakeover/components/CommunityCta";

export const CommunityTakeover = () => {
  return (
    <section id="community" className="box-border caret-transparent max-w-6xl outline-[3px] mx-auto px-4 py-16">
      <div className="bg-[oklch(0.985_0.015_85)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent outline-[3px] overflow-hidden rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)]">
        <div className="bg-[oklch(0.85_0.19_92)] box-border caret-transparent outline-[3px] px-5 py-3 border-b-[3px] border-solid border-[oklch(0.16_0.03_260)]">
          <h2 className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-8 outline-[3px] font-bungee md:text-3xl md:tracking-[-0.3px] md:leading-9">
            COMMUNITY TAKEOVER
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[3px] gap-y-6 p-5 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:p-8">
          <CommunityIntro />
          <CommunityPrinciples />
        </div>
        <CommunityCta />
      </div>
    </section>
  );
};
