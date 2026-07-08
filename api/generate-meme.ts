import { VercelRequest, VercelResponse } from "@vercel/node";
import { generateImage } from "./_utils/generateImage";

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
    const image = await generateImage(prompt);
    return res.status(200).json({ image });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to generate meme";
    return res.status(500).json({ error: message });
  }
}
