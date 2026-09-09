import { describe, expect, it } from "vitest";

describe("Tavily configuration", () => {
  it("accepts the configured API key", async () => {
    const key = process.env.TAVILY_API_KEY;
    expect(key, "TAVILY_API_KEY must be configured").toBeTruthy();
    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ api_key: key, query: "South Africa youth opportunities", max_results: 1, search_depth: "basic" }),
    });
    expect(response.ok, `Tavily returned ${response.status}`).toBe(true);
    const payload = await response.json() as { results?: unknown[] };
    expect(Array.isArray(payload.results)).toBe(true);
  }, 15000);
});
