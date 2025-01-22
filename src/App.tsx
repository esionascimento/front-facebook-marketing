import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/error";
import { PUBLIC_ROUTES } from "./routes";
import ThemeProvider from "./theme/index";

const router = createBrowserRouter([
  {
    children: [PUBLIC_ROUTES],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
