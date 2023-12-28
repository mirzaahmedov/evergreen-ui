import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/app/routes";

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
