import { createFileRoute } from "@tanstack/react-router";
import { RedirectToUserPost } from "@app/test-router";

export const Route = createFileRoute("/redirectToUserPost")({ component: RedirectToUserPost });
