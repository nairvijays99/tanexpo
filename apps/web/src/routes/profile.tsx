import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@app/router";

function ProfileScreen() {
  return (
    <div>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export const Route = createFileRoute("/profile")({ component: ProfileScreen });
