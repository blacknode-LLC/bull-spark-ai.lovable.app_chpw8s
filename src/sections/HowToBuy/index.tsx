import { HowToBuyStep } from "@/sections/HowToBuy/components/HowToBuyStep";

export const HowToBuy = () => {
  return (
    <section id="how" className="box-border caret-transparent max-w-6xl outline-[3px] mx-auto px-4 py-16">
      <h2 className="text-4xl box-border caret-transparent tracking-[-0.36px] leading-10 outline-[3px] mb-6 font-bungee md:text-5xl md:tracking-[-0.48px] md:leading-[48px]">
        HOW TO BUY
      </h2>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-none outline-[3px] gap-y-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <HowToBuyStep
          stepNumber="1"
          title="GET A SOLANA WALLET"
          description="Download Phantom, Solflare, or Backpack. Fund it with SOL from your favorite exchange."
        />
        <HowToBuyStep
          stepNumber="2"
          title="GO TO A DEX"
          description="Open Jupiter, Raydium, or hit the DexScreener link. Paste the $BULLTARDIO contract in the swap."
        />
        <HowToBuyStep
          stepNumber="3"
          title="SWAP SOL → $BULLTARDIO"
          description="Set slippage to ~3–5% for a smooth trade. Confirm the swap in your wallet."
        />
        <HowToBuyStep
          stepNumber="4"
          title="APE. HOLD. STAY RETARDED."
          description="The bull doesn't care about candles. Diamond hooves only. 🐂💎"
        />
      </div>
    </section>
  );
};
