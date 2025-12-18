import { Navigate } from "@tanstack/react-router";
import type { Href } from "../types";
import { expoPathToTanStack, splitParams } from "../utils/route-utils";

type RedirectProps = {
  href: Href;
  replace?: boolean;
};

/**
 * Expo-compatible Redirect for web.
 *
 * Maps Expo Router <Redirect /> → TanStack Router <Navigate />
 */
export function Redirect({ href, replace }: RedirectProps) {
  // String path
  if (typeof href === "string") {
    return <Navigate to={href} replace={replace} />;
  }

  const { pathname, params } = href;

  const to = expoPathToTanStack(pathname);
  const { pathParams, searchParams } = splitParams(pathname, params);

  return (
    <Navigate
      to={to}
      params={pathParams}
      search={Object.keys(searchParams).length ? searchParams : undefined}
      replace={replace}
    />
  );
}
