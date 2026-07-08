async function postForImage(url: string, data: unknown): Promise<string> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await response.json()) as { error?: string };
    throw new Error(body.error ?? "Generation failed");
  }

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Generation failed");
  }

  if (!contentType.includes("image/")) {
    throw new Error("Server returned an unexpected response. Try again.");
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

type MemePayload = {
  concept: string;
  topText: string;
  bottomText: string;
};

type PfpPayload = {
  vibe: string;
};

export function generateMeme(data: MemePayload) {
  return postForImage("/api/generate-meme", data);
}

export function generatePfp(data: PfpPayload) {
  return postForImage("/api/generate-pfp", data);
}
