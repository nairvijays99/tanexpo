import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useRouter } from "../hooks/useRouter";

const navigate = vi.fn();
const back = vi.fn();

vi.mock("@tanstack/react-router", async () => {
  const actual =
    await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");
  return {
    ...actual,
    useRouter: () => ({
      navigate,
      history: {
        back,
      },
    }),
  };
});

describe("useRouter", () => {
  it("exposes navigation helpers", () => {
    const { result } = renderHook(() => useRouter());

    expect(result.current.push).toBeTypeOf("function");
    expect(result.current.replace).toBeTypeOf("function");
    expect(result.current.back).toBeTypeOf("function");
  });

  it("push calls router.navigate with replace=false", () => {
    const { result } = renderHook(() => useRouter());
    result.current.push("/home");

    expect(navigate).toHaveBeenCalledWith({
      to: "/home",
      replace: false,
    });
  });

  it("replace calls router.navigate with replace=true", () => {
    const { result } = renderHook(() => useRouter());
    result.current.replace("/home");

    expect(navigate).toHaveBeenCalledWith({
      to: "/home",
      replace: true,
    });
  });

  it("back calls history.back", () => {
    const { result } = renderHook(() => useRouter());
    result.current.back();

    expect(back).toHaveBeenCalled();
  });
});
