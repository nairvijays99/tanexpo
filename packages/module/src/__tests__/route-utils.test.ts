import { describe, expect, it } from "vitest";
import { expoPathToTanStack } from "../utils/route-utils";

describe("expoPathToTanStack", () => {
  it("converts single param", () => {
    expect(expoPathToTanStack("/user/[id]")).toBe("/user/$id");
  });

  it("converts multiple params", () => {
    expect(expoPathToTanStack("/blog/[category]/[slug]")).toBe("/blog/$category/$slug");
  });

  it("returns same path if no params", () => {
    expect(expoPathToTanStack("/about")).toBe("/about");
  });

  it("handles empty string", () => {
    expect(expoPathToTanStack("")).toBe("");
  });

  it("handles malformed brackets safely", () => {
    expect(expoPathToTanStack("/user/[id")).toBe("/user/[id");
  });
});
