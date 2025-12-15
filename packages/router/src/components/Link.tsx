import * as React from "react";
import { Link as TanStackLink } from "@tanstack/react-router";
import type { LinkProps } from "../types";

export function Link({ to, replace, children }: LinkProps) {
  return (
    <TanStackLink to={to} replace={replace}>
      {children}
    </TanStackLink>
  );
}
