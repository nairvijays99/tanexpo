import { createFileRoute } from "@tanstack/react-router";
import { RedirectToUser } from "@app/test-router";

export const Route = createFileRoute("/redirectToUser")({ component: RedirectToUser });
