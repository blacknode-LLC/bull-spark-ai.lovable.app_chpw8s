import { FormEvent, useState } from "react";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { generatePfp } from "@/lib/generator";

const PRESETS = [
  "wearing a black leather jacket and gold chain, gangster vibes",
  "as a wizard with pointy purple hat casting a spell",
  "wearing pixelated CryptoPunk 3D glasses, degen mode",
  "as an astronaut floating in space, moon in background",
  "wearing a red cape like a matador, arena background",
  "as a chef with a tall white hat holding a wooden spoon",
  "wearing a Santa hat and cozy sweater, snowflakes falling",
  "as a samurai with a katana, cherry blossoms behind",
];

export const PfpPage = () => {
  const [vibe, setVibe] = useState(PRESETS[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const result = await generatePfp({ vibe });
      setImage(result.image);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate PFP");
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
          PFP GENERATOR
        </h1>
        <p className="text-[oklch(0.38_0.04_260)] box-border caret-transparent leading-6 max-w-2xl outline-[3px] mt-3">
          Pick a vibe or write your own. The bull dresses up. You screenshot it.
          You&apos;re now the bull.
        </p>

        <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[3px] gap-y-6 mt-8 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="card-brutal box-border caret-transparent outline-[3px] p-5 space-y-4"
          >
            <label className="box-border caret-transparent block outline-[3px]">
              <span className="text-sm box-border caret-transparent block outline-[3px] font-bungee">
                DESCRIBE YOUR BULL
              </span>
              <textarea
                className="text-sm bg-[oklch(0.955_0.035_85)] box-border caret-transparent min-h-[100px] outline-[3px] w-full mt-1 p-3 rounded-md border-[3px] border-solid border-[oklch(0.16_0.03_260)]"
                value={vibe}
                onChange={(event) => setVibe(event.target.value)}
                maxLength={300}
                required
              />
            </label>

            <div className="box-border caret-transparent outline-[3px]">
              <div className="text-[oklch(0.38_0.04_260)] text-xs uppercase box-border caret-transparent outline-[3px] mb-2 font-bungee">
                Quick presets
              </div>
              <div className="box-border caret-transparent flex flex-wrap gap-2 outline-[3px]">
                {PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setVibe(preset)}
                    className="text-xs bg-[oklch(0.9_0.035_85)] box-border caret-transparent outline-[3px] px-3 py-1 rounded-md border-[3px] border-solid border-[oklch(0.16_0.03_260)] font-bungee hover:bg-[oklch(0.85_0.19_92)]"
                  >
                    {preset.split(",")[0]}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-brutal btn-brutal-hover box-border caret-transparent outline-[3px] w-full disabled:opacity-60"
            >
              {loading ? "PAINTING THE BULL…" : "GENERATE PFP 🎨"}
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
                  painting hooves...
                </div>
                <div className="text-[oklch(0.38_0.04_260)] text-xs box-border caret-transparent leading-4 outline-[3px] mt-2">
                  Usually 5–15 seconds.
                </div>
              </div>
            ) : image ? (
              <div className="box-border caret-transparent outline-[3px] w-full">
                <img
                  src={image}
                  alt="Generated PFP"
                  className="aspect-square box-border caret-transparent max-w-full object-cover outline-[3px] w-full h-auto block rounded-md"
                />
                <a
                  href={image}
                  download="bulltardio-pfp.png"
                  className="btn-brutal btn-brutal-hover box-border caret-transparent outline-[3px] w-full mt-4"
                >
                  DOWNLOAD
                </a>
              </div>
            ) : (
              <div className="text-[oklch(0.38_0.04_260)] text-sm text-center box-border caret-transparent outline-[3px]">
                Your bull will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
