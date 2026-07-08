type OpenAIImageResponse = {
  data?: Array<{ url?: string; b64_json?: string }>;
  error?: { message?: string };
};

export async function generateImageBuffer(prompt: string): Promise<Buffer> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not set. Add it in your Vercel project settings.",
    );
  }

  const model = process.env.OPENAI_IMAGE_MODEL ?? "gpt-image-1";

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      n: 1,
      size: "1024x1024",
    }),
  });

  const body = (await response.json()) as OpenAIImageResponse;

  if (!response.ok) {
    throw new Error(body.error?.message ?? "Image generation failed");
  }

  const imageData = body.data?.[0];

  if (imageData?.b64_json) {
    return Buffer.from(imageData.b64_json, "base64");
  }

  if (imageData?.url) {
    const imageResponse = await fetch(imageData.url);

    if (!imageResponse.ok) {
      throw new Error("Failed to download generated image");
    }

    const arrayBuffer = await imageResponse.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  throw new Error("No image returned from OpenAI");
}
