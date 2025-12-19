import { createFileRoute } from "@tanstack/react-router";
import { User } from "@basicapp/test-router";

export function UserScreen() {
  return <User />;
}

export const Route = createFileRoute("/user/$id/")({ component: UserScreen });
