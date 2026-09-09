export function hasVerifiableSource(url: string | null | undefined) {
  if (!url) return false;
  try { const parsed = new URL(url); return parsed.protocol === "https:" && Boolean(parsed.hostname); } catch { return false; }
}
