import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <nav className="box-border caret-transparent gap-x-1 hidden min-h-0 min-w-0 outline-[3px] gap-y-1 md:flex md:min-h-[auto] md:min-w-[auto]">
      <Link
        to="/#chart"
        className="text-sm box-border caret-transparent inline tracking-[-0.14px] leading-5 min-h-0 min-w-0 outline-[3px] px-3 py-2 rounded-[10px] font-bungee md:block md:min-h-[auto] md:min-w-[auto]"
      >
        CHART
      </Link>
      <Link
        to="/#community"
        className="text-sm box-border caret-transparent inline tracking-[-0.14px] leading-5 min-h-0 min-w-0 outline-[3px] px-3 py-2 rounded-[10px] font-bungee md:block md:min-h-[auto] md:min-w-[auto]"
      >
        CTO
      </Link>
      <Link
        to="/#how"
        className="text-sm box-border caret-transparent inline tracking-[-0.14px] leading-5 min-h-0 min-w-0 outline-[3px] px-3 py-2 rounded-[10px] font-bungee md:block md:min-h-[auto] md:min-w-[auto]"
      >
        HOW TO BUY
      </Link>
      <Link
        to="/meme"
        className="text-sm box-border caret-transparent inline tracking-[-0.14px] leading-5 min-h-0 min-w-0 outline-[3px] px-3 py-2 rounded-[10px] font-bungee md:block md:min-h-[auto] md:min-w-[auto]"
      >
        MEME GEN
      </Link>
      <Link
        to="/pfp"
        className="text-sm box-border caret-transparent inline tracking-[-0.14px] leading-5 min-h-0 min-w-0 outline-[3px] px-3 py-2 rounded-[10px] font-bungee md:block md:min-h-[auto] md:min-w-[auto]"
      >
        PFP GEN
      </Link>
    </nav>
  );
};
