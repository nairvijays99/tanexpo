import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const push = vi.fn();
const replace = vi.fn();
const back = vi.fn();

vi.mock("expo-router", () => ({
  useRouter: () => ({
    push,
    replace,
    back,
  }),
}));

import { useRouter } from "../hooks/useRouter.native";

describe("useRouter.native", () => {
  it("exposes push, replace and back from expo-router", () => {
    const { result } = renderHook(() => useRouter());

    expect(result.current.push).toBe(push);
    expect(result.current.replace).toBe(replace);
    expect(result.current.back).toBe(back);
  });
});
