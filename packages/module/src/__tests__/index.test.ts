import { describe, expect, it } from "vitest";
import * as module from "../index";

describe("public exports", () => {
  it("exports Link", () => {
    expect(module.Link).toBeDefined();
  });

  it("exports useRouter", () => {
    expect(module.useRouter).toBeDefined();
  });
});
