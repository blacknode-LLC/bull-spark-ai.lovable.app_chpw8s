import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { TickerBanner } from "@/sections/TickerBanner";
import { CommunityTakeover } from "@/sections/CommunityTakeover";
import { LiveChart } from "@/sections/LiveChart";
import { HowToBuy } from "@/sections/HowToBuy";
import { HerdGallery } from "@/sections/HerdGallery";
import { Footer } from "@/sections/Footer";

export const PageWrapper = () => {
  return (
    <div className="box-border caret-transparent min-h-[1000px] outline-[3px]">
      <BackgroundLayer />
      <Header />
      <Hero />
      <TickerBanner />
      <CommunityTakeover />
      <LiveChart />
      <HowToBuy />
      <HerdGallery />
      <Footer />
    </div>
  );
};
