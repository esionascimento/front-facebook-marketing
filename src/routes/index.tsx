import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login/Login";

export const PUBLIC_ROUTES: RouteObject = {
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
  ],
};
