export const HeroMedia = () => {
  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="bg-[oklch(0.985_0.015_85)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent outline-[3px] overflow-hidden rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)]">
        <img
          src="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1495.jpg"
          alt="Bulltardio mascot"
          className="box-border caret-transparent max-w-full outline-[3px] w-full"
        />
      </div>
      <div className="absolute bg-[oklch(0.985_0.015_85)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent hidden outline-[3px] w-40 overflow-hidden rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)] -left-6 -bottom-6 md:block">
        <img
          src="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1491.jpg"
          alt="Bulltardio charging"
          className="box-border caret-transparent max-w-full outline-[3px] w-full"
        />
      </div>
      <div className="absolute text-sm bg-[oklch(0.85_0.19_92)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent tracking-[-0.14px] leading-5 outline-[3px] px-3 py-2 rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)] -right-4 -top-4 font-bungee">
        NO ROADMAP JUST VIBES
      </div>
    </div>
  );
};
