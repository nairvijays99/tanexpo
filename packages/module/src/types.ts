import type * as React from "react";

export type HrefObject = {
  pathname: string;
  params?: Record<string, string | number | boolean | undefined>;
};

export type Href = string | HrefObject;

/**
 * Web supports prefetch hints, native treats them as `true`
 */
export type Prefetch = boolean | "intent" | "viewport" | "render";

export type LinkProps = {
  href: Href;
  replace?: boolean;
  prefetch?: Prefetch;
  push?: boolean;
  children: React.ReactNode;
};

export type LocalSearchParams = Record<string, string | string[] | undefined>;
