import { FormEvent, useEffect, useState } from "react";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { generateMeme } from "@/lib/generator";

export const MemePage = () => {
  const [concept, setConcept] = useState(
    "Bulltardio charging a red Ferrari in a bullring while yelling BUY THE DIP",
  );
  const [topText, setTopText] = useState("WHEN CANDLES RED");
  const [bottomText, setBottomText] = useState("BULLTARDIO SEES GREEN");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (image?.startsWith("blob:")) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (image?.startsWith("blob:")) {
      URL.revokeObjectURL(image);
    }
    setImage(null);

    try {
      const imageUrl = await generateMeme({ concept, topText, bottomText });
      setImage(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate meme");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box-border caret-transparent min-h-screen outline-[3px]">
      <BackgroundLayer />
      <Header />
      <div className="box-border caret-transparent max-w-6xl outline-[3px] mx-auto px-4 py-12">
        <h1 className="text-4xl box-border caret-transparent tracking-[-0.36px] leading-10 outline-[3px] font-bungee md:text-6xl md:tracking-[-0.48px] md:leading-[60px]">
          AI MEME GENERATOR
        </h1>
        <p className="text-[oklch(0.38_0.04_260)] box-border caret-transparent leading-6 max-w-2xl outline-[3px] mt-3">
          Describe a scene. The retarded bull posts it. Powered by AI.
        </p>

        <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[3px] gap-y-6 mt-8 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="card-brutal box-border caret-transparent outline-[3px] p-5 space-y-4"
          >
            <label className="box-border caret-transparent block outline-[3px]">
              <span className="text-sm box-border caret-transparent block outline-[3px] font-bungee">
                MEME CONCEPT
              </span>
              <textarea
                className="text-sm bg-[oklch(0.955_0.035_85)] box-border caret-transparent min-h-[100px] outline-[3px] w-full mt-1 p-3 rounded-md border-[3px] border-solid border-[oklch(0.16_0.03_260)]"
                value={concept}
                onChange={(event) => setConcept(event.target.value)}
                maxLength={400}
                required
              />
            </label>

            <div className="box-border caret-transparent gap-x-4 grid grid-cols-none outline-[3px] gap-y-4 sm:grid-cols-2">
              <label className="box-border caret-transparent block outline-[3px]">
                <span className="text-sm box-border caret-transparent block outline-[3px] font-bungee">
                  TOP TEXT
                </span>
                <input
                  className="text-sm bg-[oklch(0.955_0.035_85)] box-border caret-transparent outline-[3px] w-full mt-1 p-2 rounded-md border-[3px] border-solid border-[oklch(0.16_0.03_260)]"
                  value={topText}
                  onChange={(event) => setTopText(event.target.value)}
                  maxLength={80}
                />
              </label>
              <label className="box-border caret-transparent block outline-[3px]">
                <span className="text-sm box-border caret-transparent block outline-[3px] font-bungee">
                  BOTTOM TEXT
                </span>
                <input
                  className="text-sm bg-[oklch(0.955_0.035_85)] box-border caret-transparent outline-[3px] w-full mt-1 p-2 rounded-md border-[3px] border-solid border-[oklch(0.16_0.03_260)]"
                  value={bottomText}
                  onChange={(event) => setBottomText(event.target.value)}
                  maxLength={80}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-brutal btn-brutal-hover box-border caret-transparent outline-[3px] w-full disabled:opacity-60"
            >
              {loading ? "SUMMONING BULL…" : "GENERATE MEME 🐂"}
            </button>

            {error ? (
              <p className="text-sm text-[oklch(0.55_0.22_27)] box-border caret-transparent outline-[3px]">
                {error}
              </p>
            ) : null}
          </form>

          <div className="card-brutal box-border caret-transparent flex items-center justify-center min-h-[320px] outline-[3px] p-4">
            {loading ? (
              <div className="text-center box-border caret-transparent outline-[3px]">
                <div className="text-lg box-border caret-transparent outline-[3px] font-bungee">
                  the bull is thinking...
                </div>
                <div className="text-[oklch(0.38_0.04_260)] text-xs box-border caret-transparent leading-4 outline-[3px] mt-2">
                  Usually 5–15 seconds.
                </div>
              </div>
            ) : image ? (
              <div className="box-border caret-transparent outline-[3px] w-full">
                <img
                  src={image}
                  alt="Generated meme"
                  className="box-border caret-transparent max-w-full outline-[3px] w-full h-auto block rounded-md"
                />
                <a
                  href={image}
                  download="bulltardio-meme.png"
                  className="btn-brutal btn-brutal-hover box-border caret-transparent outline-[3px] w-full mt-4"
                >
                  DOWNLOAD
                </a>
              </div>
            ) : (
              <div className="text-[oklch(0.38_0.04_260)] text-sm text-center box-border caret-transparent outline-[3px]">
                Your meme will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
