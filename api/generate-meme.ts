import { VercelRequest, VercelResponse } from "@vercel/node";
import { generateImageBuffer } from "./_utils/generateImage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { concept, topText, bottomText } = req.body ?? {};

  if (!concept || typeof concept !== "string") {
    return res.status(400).json({ error: "Meme concept is required" });
  }

  const prompt = [
    "Create a bold internet meme image featuring Bulltardio, a cartoon bull mascot in a luchador mask.",
    `Scene: ${concept}.`,
    topText ? `Top meme text: "${topText}".` : "",
    bottomText ? `Bottom meme text: "${bottomText}".` : "",
    "High contrast, funny, crypto meme style, no watermarks.",
  ]
    .filter(Boolean)
    .join(" ");

  try {
    const imageBuffer = await generateImageBuffer(prompt);

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(imageBuffer);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to generate meme";
    return res.status(500).json({ error: message });
  }
}
