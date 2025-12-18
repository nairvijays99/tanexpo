import { createFileRoute } from "@tanstack/react-router";
import { User } from "@app/test-router";

export function UserScreen() {
  return <User />;
}

export const Route = createFileRoute("/user/$id/")({ component: UserScreen });
