import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@app/test-router";

export function HomeScreen() {
  return <Home />;
}

export const Route = createFileRoute("/")({ component: HomeScreen });
