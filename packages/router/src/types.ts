import type { ReactNode } from "react";

export type LinkProps = {
  to: string;
  replace?: boolean;
  children: ReactNode;
};
