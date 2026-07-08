import {
  generateImageBuffer,
  parseJsonBody,
} from "../lib/openai-image";

export const config = {
  maxDuration: 300,
};

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
  send: (data: Buffer) => void;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseJsonBody(req.body);
  const concept = body.concept;
  const topText = body.topText;
  const bottomText = body.bottomText;

  if (!concept || typeof concept !== "string") {
    return res.status(400).json({ error: "Meme concept is required" });
  }

  const prompt = [
    "Create a bold internet meme image featuring Bulltardio, a cartoon bull mascot in a luchador mask.",
    `Scene: ${concept}.`,
    typeof topText === "string" && topText
      ? `Top meme text: "${topText}".`
      : "",
    typeof bottomText === "string" && bottomText
      ? `Bottom meme text: "${bottomText}".`
      : "",
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
