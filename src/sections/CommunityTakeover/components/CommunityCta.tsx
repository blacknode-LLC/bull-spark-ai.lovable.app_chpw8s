import { Link } from "react-router-dom";

export const CommunityCta = () => {
  return (
    <div className="bg-[oklch(0.9_0.035_85)] box-border caret-transparent outline-[3px] px-5 py-4 border-t-[3px] border-solid border-[oklch(0.16_0.03_260)] md:px-8">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-between outline-[3px] gap-y-4">
        <p className="text-sm font-medium box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
          This is your coin now. Act like it. 🐂
        </p>
        <Link
          to="/meme"
          className="text-[oklch(0.985_0.01_85)] text-sm items-center bg-[oklch(0.55_0.22_27)] shadow-[oklch(0.16_0.03_260)_4px_4px_0px_0px] box-border caret-transparent gap-x-2 flex justify-center tracking-[0.28px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 px-5 py-3 rounded-[10px] border-[3px] border-solid border-[oklch(0.16_0.03_260)] font-bungee"
        >
          MAKE A MEME
        </Link>
      </div>
    </div>
  );
};
