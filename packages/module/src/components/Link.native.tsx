import { Link as ExpoLink } from "expo-router";
import type { LinkProps } from "../types";
import type { Href } from "../types.native";

export function Link({ href, replace, prefetch, push, children }: LinkProps) {
  return (
    <ExpoLink href={href as Href} replace={replace} prefetch={Boolean(prefetch)} push={push}>
      {children}
    </ExpoLink>
  );
}
