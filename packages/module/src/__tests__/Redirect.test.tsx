import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Redirect } from "../components/Redirect";

const navigateSpy = vi.fn();

vi.mock("@tanstack/react-router", async () => {
  const actual =
    await vi.importActual<typeof import("@tanstack/react-router")>("@tanstack/react-router");
  return {
    ...actual,
    Navigate: ({ to }: { to: string }) => {
      navigateSpy(to);
      return null;
    },
  };
});

describe("<Redirect />", () => {
  it("redirects to given route", () => {
    render(<Redirect href="/login" />);
    expect(navigateSpy).toHaveBeenCalledWith("/login");
  });

  it("handles empty href safely", () => {
    render(<Redirect href="" />);
    expect(navigateSpy).toHaveBeenCalledWith("");
  });
});
