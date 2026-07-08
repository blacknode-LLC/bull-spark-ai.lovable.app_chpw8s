import { HerdFigure } from "@/sections/HerdGallery/components/HerdFigure";

export const HerdGallery = () => {
  return (
    <section className="box-border caret-transparent max-w-6xl outline-[3px] mx-auto px-4 py-16">
      <h2 className="text-4xl box-border caret-transparent tracking-[-0.36px] leading-10 outline-[3px] mb-6 font-bungee md:text-5xl md:tracking-[-0.48px] md:leading-[48px]">
        THE HERD
      </h2>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-4 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <HerdFigure
          imageUrl="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1488.jpg"
          caption="PLZ BE PATIENT"
          figureVariant="rotate-[-1.4999977205181305deg]"
        />
        <HerdFigure
          imageUrl="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1489.jpg"
          caption="COMFY MODE"
          figureVariant="rotate-[1.4999977205181305deg]"
        />
        <HerdFigure
          imageUrl="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1490.jpg"
          caption="BIG BRAIN"
          figureVariant="rotate-[-1.4999977205181305deg]"
        />
        <HerdFigure
          imageUrl="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1492.jpg"
          caption="PARTY BULL"
          figureVariant="rotate-[1.4999977205181305deg]"
        />
        <HerdFigure
          imageUrl="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1493.jpg"
          caption="GM 👍"
          figureVariant="rotate-[-1.4999977205181305deg]"
        />
        <HerdFigure
          imageUrl="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1494.jpg"
          caption="CHARGING"
          figureVariant="rotate-[1.4999977205181305deg]"
        />
      </div>
    </section>
  );
};
