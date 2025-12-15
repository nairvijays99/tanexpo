import * as React from "react";
import { Link as ExpoLink } from "expo-router";
import type { LinkProps } from "../types";

export function Link({ to, replace, children }: LinkProps) {
  return (
    <ExpoLink href={to} replace={replace}>
      {children}
    </ExpoLink>
  );
}
