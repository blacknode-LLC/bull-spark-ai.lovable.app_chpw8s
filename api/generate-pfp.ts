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
  const vibe = body.vibe;

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
