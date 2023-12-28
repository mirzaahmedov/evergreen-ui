import type { RouteObject } from "react-router-dom";

import SignIn from "@/pages/SignIn";

const routes: RouteObject[] = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default routes;
