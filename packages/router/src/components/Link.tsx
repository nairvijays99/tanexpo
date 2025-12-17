import * as React from "react";
import { Link as TanStackLink } from "@tanstack/react-router";
import type { LinkProps, HrefObject, Prefetch } from "../types";
import { expoPathToTanStack, splitParams } from "../utils/route-utils";

function mapPrefetchToPreload(prefetch: Prefetch | undefined) {
  if (prefetch === true) return "intent";
  return prefetch;
}

export function Link({ href, replace, prefetch, asChild, children }: LinkProps) {
  const preload = mapPrefetchToPreload(prefetch);

  // String href
  if (typeof href === "string") {
    return (
      <TanStackLink to={href} replace={replace} preload={preload} asChild={asChild}>
        {children}
      </TanStackLink>
    );
  }

  // Object-based Expo href
  const { pathname, params } = href as HrefObject;

  const to = expoPathToTanStack(pathname);
  const { pathParams, searchParams } = splitParams(pathname, params);

  return (
    <TanStackLink
      to={to}
      params={pathParams}
      search={Object.keys(searchParams).length ? searchParams : undefined}
      replace={replace}
      preload={preload}
      asChild={asChild}
    >
      {children}
    </TanStackLink>
  );
}
