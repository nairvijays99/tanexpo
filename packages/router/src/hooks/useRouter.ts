import { useRouter as useTanStackRouter } from "@tanstack/react-router";
import { expoPathToTanStack, splitParams } from "../utils/route-utils";
import type { Href } from "../types";

export function useRouter() {
  const router = useTanStackRouter();

  function navigate(href: Href, replace = false) {
    if (typeof href === "string") {
      router.navigate({ to: href, replace });
      return;
    }

    const { pathname, params } = href;
    const to = expoPathToTanStack(pathname);
    const { pathParams, searchParams } = splitParams(pathname, params);

    router.navigate({
      to,
      params: pathParams,
      search: Object.keys(searchParams).length ? searchParams : undefined,
      replace,
    });
  }

  return {
    push: (href: Href) => navigate(href, false),
    replace: (href: Href) => navigate(href, true),
    navigate,
    back: () => router.history.back(),
    prefetch: router.preloadRoute,
  };
}
