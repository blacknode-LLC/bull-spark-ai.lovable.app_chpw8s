type MemePayload = {
  concept: string;
  topText: string;
  bottomText: string;
};

type PfpPayload = {
  vibe: string;
};

async function postJson<T>(url: string, data: T): Promise<{ image: string }> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = (await response.json()) as { image?: string; error?: string };

  if (!response.ok) {
    throw new Error(body.error ?? "Generation failed");
  }

  if (!body.image) {
    throw new Error("No image returned");
  }

  return { image: body.image };
}

export function generateMeme(data: MemePayload) {
  return postJson("/api/generate-meme", data);
}

export function generatePfp(data: PfpPayload) {
  return postJson("/api/generate-pfp", data);
}
