import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@tanstack/react-router", async () => {
  const actual =
    await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");
  return {
    ...actual,
    useParams: () => ({ id: "123" }),
    useSearch: () => ({ q: "test" }),
  };
});

import { useLocalSearchParams } from "../hooks/useLocalSearchParams";

describe("useLocalSearchParams (with params)", () => {
  it("returns merged params and search", () => {
    const { result } = renderHook(() => useLocalSearchParams());
    expect(result.current).toEqual({ id: "123", q: "test" });
  });
});
