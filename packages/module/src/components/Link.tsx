import { Link as TanStackLink } from "@tanstack/react-router";
import type { HrefObject, LinkProps, Prefetch } from "../types";
import { expoPathToTanStack, splitParams } from "../utils/route-utils";

function mapPrefetchToPreload(prefetch: Prefetch | undefined) {
  if (prefetch === undefined || prefetch === false) {
    return false;
  }

  if (prefetch === true) {
    return "intent";
  }

  return prefetch;
}

export function Link({ href, replace, prefetch, children }: LinkProps) {
  const preload = mapPrefetchToPreload(prefetch);

  // String href
  if (typeof href === "string") {
    return (
      <TanStackLink to={href} replace={replace} preload={preload}>
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
    >
      {children}
    </TanStackLink>
  );
}
