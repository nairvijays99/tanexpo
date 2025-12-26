import { describe, expect, it, vi } from "vitest";

const mockParams = { id: "42" };

vi.mock("expo-router", () => ({
  useLocalSearchParams: () => mockParams,
}));

import { useLocalSearchParams } from "../hooks/useLocalSearchParams.native";

describe("useLocalSearchParams.native", () => {
  it("re-exports expo-router implementation", () => {
    expect(useLocalSearchParams()).toBe(mockParams);
  });
});
