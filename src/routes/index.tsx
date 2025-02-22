import { RouteObject } from "react-router-dom";

import LoginPage from "../pages/login/Login";
import { LayoutAuth } from "../layouts/auth/layoutAuth";

export const PUBLIC_ROUTES: RouteObject = {
  children: [
    {
      element: <LayoutAuth />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
  ],
};
