import { Link } from "react-router-dom";

export const HeaderBrand = () => {
  return (
    <Link
      to="/"
      className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2"
    >
      <img
        src="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/IMG_1493.jpg"
        alt="Bulltardio"
        className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-10 rounded-[3.35544e+07px] border-2 border-solid border-[oklch(0.16_0.03_260)]"
      />
      <span className="text-xl box-border caret-transparent block tracking-[-0.2px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] font-bungee">
        $BULLTARDIO
      </span>
    </Link>
  );
};
