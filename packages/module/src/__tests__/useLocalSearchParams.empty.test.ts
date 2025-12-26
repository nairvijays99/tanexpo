import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@tanstack/react-router", async () => {
  const actual =
    await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");
  return {
    ...actual,
    useParams: () => ({}),
    useSearch: () => ({}),
  };
});

import { useLocalSearchParams } from "../hooks/useLocalSearchParams";

describe("useLocalSearchParams (empty)", () => {
  it("returns empty object if none exist", () => {
    const { result } = renderHook(() => useLocalSearchParams());
    expect(result.current).toEqual({});
  });
});
