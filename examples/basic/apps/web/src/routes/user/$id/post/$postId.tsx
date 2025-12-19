import { createFileRoute } from "@tanstack/react-router";
import { UserPost } from "@basicapp/test-router";

export function UserPostScreen() {
  return <UserPost />;
}

export const Route = createFileRoute("/user/$id/post/$postId")({ component: UserPostScreen });
