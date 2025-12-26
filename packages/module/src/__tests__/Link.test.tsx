import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { Link } from "../components/Link";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children }: { children?: ReactNode }) => <a href="/mock">{children}</a>,
}));

describe("<Link /> (web)", () => {
  it("renders children", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("accepts object href", () => {
    render(
      <Link
        href={{
          pathname: "/user/$id",
          params: { id: "1" },
        }}
      >
        User
      </Link>,
    );
    expect(screen.getByText("User")).toBeInTheDocument();
  });

  it("does not crash with empty href", () => {
    render(<Link href="">Empty</Link>);
    expect(screen.getByText("Empty")).toBeInTheDocument();
  });
});
