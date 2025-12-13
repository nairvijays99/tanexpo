import { createFileRoute } from "@tanstack/react-router";
import { Test } from "@app/ui";

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

export const Route = createFileRoute("/")({ component: App });
