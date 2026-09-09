import { describe, expect, it } from "vitest";
import { hasVerifiableSource } from "./sourceIntegrity";

describe("hasVerifiableSource", () => {
  it("accepts secure external source URLs", () => {
    expect(hasVerifiableSource("https://www.nsfas.org.za/content/bursary-scheme.html")).toBe(true);
  });
  it("rejects missing, relative, and insecure URLs", () => {
    expect(hasVerifiableSource(undefined)).toBe(false);
    expect(hasVerifiableSource("/opportunity/1")).toBe(false);
    expect(hasVerifiableSource("http://example.com")).toBe(false);
  });
});
