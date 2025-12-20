import { Redirect } from "@tanexpo/router";

export function RedirectToUserPost() {
  return (
    <Redirect
      href={{
        pathname: "/user/[id]/post/[postId]",
        params: { id: "navigate", postId: "99" },
      }}
    />
  );
}
