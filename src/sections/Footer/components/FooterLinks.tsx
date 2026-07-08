export const FooterLinks = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="box-border caret-transparent tracking-[-0.14px] outline-[3px] uppercase mb-2 font-bungee">
        Links
      </div>
      <ul className="box-border caret-transparent list-none opacity-90 outline-[3px] pl-0">
        <li className="box-border caret-transparent outline-[3px] mb-1">
          <a
            href="https://dexscreener.com/solana/4q9ZrBtY2q2vHdmANof4kXA4rPGZMcAdvH2csGPanFWZ"
            className="box-border caret-transparent outline-[3px] underline underline-offset-4"
          >
            DexScreener
          </a>
        </li>
        <li className="box-border caret-transparent outline-[3px] mb-1">
          <a
            href="https://x.com/bulltardiopf?s=21"
            className="box-border caret-transparent outline-[3px] underline underline-offset-4"
          >
            X / Twitter
          </a>
        </li>
        <li className="box-border caret-transparent outline-[3px]">
          <a
            href="https://x.com/i/communities/2036206732746039353"
            className="box-border caret-transparent outline-[3px] underline underline-offset-4"
          >
            X Community
          </a>
        </li>
      </ul>
    </div>
  );
};
