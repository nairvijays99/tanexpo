import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const redirectSpy = vi.fn();

vi.mock("expo-router", () => ({
  Redirect: ({ href }: { href: string }) => {
    redirectSpy(href);
    return null;
  },
}));

import { Redirect } from "../components/Redirect.native";

describe("<Redirect /> (native)", () => {
  it("delegates redirect to expo-router", () => {
    render(<Redirect href="/login" />);
    expect(redirectSpy).toHaveBeenCalledWith("/login");
  });
});
