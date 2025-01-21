import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/error";
import { PUBLIC_ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    children: [PUBLIC_ROUTES],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
