import { createFileRoute } from "@tanstack/react-router";
import { About } from "@basicapp/test-router";

export function AboutScreen() {
  return <About />;
}

export const Route = createFileRoute("/about")({ component: AboutScreen });
