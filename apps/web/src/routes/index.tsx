import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@app/router";

function HomeScreen() {
  return (
    <div>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: HomeScreen });
