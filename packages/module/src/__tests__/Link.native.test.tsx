import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

const renderSpy = vi.fn();

vi.mock("expo-router", () => ({
  Link: ({ children }: { children?: ReactNode }) => {
    renderSpy(children);
    return null;
  },
}));

import { Link } from "../components/Link.native";

describe("<Link /> (native)", () => {
  it("delegates rendering to expo-router Link", () => {
    render(<Link href="/profile">Profile</Link>);
    expect(renderSpy).toHaveBeenCalledWith("Profile");
  });
});
