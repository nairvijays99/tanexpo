import { createFileRoute } from "@tanstack/react-router";
import { RedirectToUserPost } from "@basicapp/test-router";

export const Route = createFileRoute("/redirectToUserPost")({ component: RedirectToUserPost });
