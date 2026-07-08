import { useEffect, useState } from "react";

export const LiveChart = () => {
  const DEXSCREENER_PAIR_PATH =
    "solana/4q9ZrBtY2q2vHdmANof4kXA4rPGZMcAdvH2csGPanFWZ";
  const DEXSCREENER_URL = `https://dexscreener.com/${DEXSCREENER_PAIR_PATH}`;
  const PRIMARY_EMBED_URL = `${DEXSCREENER_URL}?embed=1&theme=dark&trades=0&info=0`;
  const SECONDARY_EMBED_URL = `${DEXSCREENER_URL}?embed=1&theme=light&trades=0&info=0`;

  const [embedUrl, setEmbedUrl] = useState(PRIMARY_EMBED_URL);
  const [loaded, setLoaded] = useState(false);
  const [showFallbackHint, setShowFallbackHint] = useState(false);

  useEffect(() => {
    if (loaded) return;

    const timeoutId = window.setTimeout(() => {
      console.warn("__ANIMA_DBG__ DexScreener iframe timeout", embedUrl);
      setShowFallbackHint(true);

      if (embedUrl === PRIMARY_EMBED_URL) {
        console.warn(
          "__ANIMA_DBG__ Switching DexScreener iframe to secondary URL",
          SECONDARY_EMBED_URL,
        );
        setEmbedUrl(SECONDARY_EMBED_URL);
      }
    }, 12000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [loaded, embedUrl, PRIMARY_EMBED_URL, SECONDARY_EMBED_URL]);

  return (
    <section id="chart" className="scroll-mt-20 box-border caret-transparent max-w-6xl outline-[3px] mx-auto px-4 py-16">
      <div className="items-end box-border caret-transparent gap-x-4 flex flex-wrap justify-between outline-[3px] gap-y-4 mb-6">
        <h2 className="text-4xl box-border caret-transparent tracking-[-0.36px] leading-10 min-h-[auto] min-w-[auto] outline-[3px] font-bungee md:text-5xl md:tracking-[-0.48px] md:leading-[48px]">
          LIVE CHART
        </h2>
        <a
          href={DEXSCREENER_URL}
          className="text-sm box-border caret-transparent block tracking-[-0.14px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] underline underline-offset-4 font-bungee"
          target="_blank"
          rel="noreferrer"
        >
          OPEN ON DEXSCREENER ↗
        </a>
      </div>
      <div className="bg-[oklch(0.985_0.015_85)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent outline-[3px] overflow-hidden rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)]">
        <div className="relative box-border caret-transparent outline-[3px] w-full pb-[125%]">
          <iframe
            key={embedUrl}
            title="DEX Screener live chart"
            src={embedUrl}
            className="absolute box-border caret-transparent h-full outline-[3px] w-full inset-0"
            allow="clipboard-write; fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => {
              setLoaded(true);
              setShowFallbackHint(false);
              console.log("__ANIMA_DBG__ DexScreener iframe loaded", embedUrl);
            }}
            onError={() => {
              setLoaded(false);
              setShowFallbackHint(true);
              console.error(
                "__ANIMA_DBG__ DexScreener iframe failed to load",
                embedUrl,
              );

              if (embedUrl === PRIMARY_EMBED_URL) {
                console.warn(
                  "__ANIMA_DBG__ Retrying DexScreener iframe with secondary URL",
                  SECONDARY_EMBED_URL,
                );
                setEmbedUrl(SECONDARY_EMBED_URL);
              }
            }}
          ></iframe>
        </div>
      </div>
      {showFallbackHint ? (
        <p className="text-[oklch(0.38_0.04_260)] text-xs box-border caret-transparent leading-4 outline-[3px] mt-3">
          If the chart keeps spinning, open it directly:{" "}
          <a
            href={DEXSCREENER_URL}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            DexScreener pair page
          </a>
          .
        </p>
      ) : null}
      <p className="text-[oklch(0.38_0.04_260)] text-xs box-border caret-transparent leading-4 outline-[3px] mt-2">
        Live price, trades and depth streaming from DEX Screener.
      </p>
    </section>
  );
};
