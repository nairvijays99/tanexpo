import type { HrefObject } from "../types";

/**
 * Converts:
 *  /user/[id]/post/[slug] → /user/$id/post/$slug
 */
export function expoPathToTanStack(pathname: string) {
  return pathname.replace(/\[([^\]]+)\]/g, (_, key) => `$${key}`);
}

/**
 * Splits params into:
 * - path params (used by dynamic segments)
 * - search params (query string)
 */
export function splitParams(pathname: string, params: HrefObject["params"] = {}) {
  const dynamicKeys = Array.from(pathname.matchAll(/\[([^\]]+)\]/g), (m) => m[1]);

  const pathParams: Record<string, unknown> = {};
  const searchParams: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    if (dynamicKeys.includes(key)) {
      pathParams[key] = value;
    } else {
      searchParams[key] = value;
    }
  }

  return { pathParams, searchParams };
}
