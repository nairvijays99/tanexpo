import * as React from "react";
import { Link as ExpoLink } from "expo-router";
import type { LinkProps } from "../types";

export function Link({ href, replace, prefetch, asChild, children }: LinkProps) {
  return (
    <ExpoLink href={href as any} replace={replace} asChild={asChild} prefetch={Boolean(prefetch)}>
      {children}
    </ExpoLink>
  );
}
