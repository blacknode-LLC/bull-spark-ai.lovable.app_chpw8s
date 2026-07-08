import { VercelRequest, VercelResponse } from "@vercel/node";
import { generateImageBuffer } from "./_utils/generateImage";

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
    const imageBuffer = await generateImageBuffer(prompt);

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(imageBuffer);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to generate PFP";
    return res.status(500).json({ error: message });
  }
}
