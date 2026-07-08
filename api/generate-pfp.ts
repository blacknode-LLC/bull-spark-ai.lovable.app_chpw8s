import { VercelRequest, VercelResponse } from "@vercel/node";
import { generateImage } from "./_utils/generateImage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { vibe } = req.body ?? {};

  if (!vibe || typeof vibe !== "string") {
    return res.status(400).json({ error: "Vibe description is required" });
  }

  const prompt = [
    "Create a square profile picture of Bulltardio, a cartoon bull mascot in a luchador mask.",
    `The bull is ${vibe}.`,
    "Centered portrait, clean background, bold colors, crypto meme mascot style, no watermarks.",
  ].join(" ");

  try {
    const image = await generateImage(prompt);
    return res.status(200).json({ image });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to generate PFP";
    return res.status(500).json({ error: message });
  }
}
