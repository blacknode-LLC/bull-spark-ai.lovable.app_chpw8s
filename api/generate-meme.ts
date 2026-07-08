import { VercelRequest, VercelResponse } from "@vercel/node";

type OpenAIImageResponse = {
  data?: Array<{ url?: string; b64_json?: string }>;
  error?: { message?: string };
};

async function generateImage(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not set. Add it in your Vercel project settings.",
    );
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    }),
  });

  const body = (await response.json()) as OpenAIImageResponse;

  if (!response.ok) {
    throw new Error(body.error?.message ?? "Image generation failed");
  }

  const imageData = body.data?.[0];

  if (imageData?.b64_json) {
    return `data:image/png;base64,${imageData.b64_json}`;
  }

  if (imageData?.url) {
    return imageData.url;
  }

  throw new Error("No image returned from OpenAI");
}

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
