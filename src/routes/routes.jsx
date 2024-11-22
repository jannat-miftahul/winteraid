import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    }
]);

export default routes;
