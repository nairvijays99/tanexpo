import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@app/router";

function AboutScreen() {
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <Link to="/profile" replace>
        Go to Profile
      </Link>
    </div>
  );
}

export const Route = createFileRoute("/about")({ component: AboutScreen });
