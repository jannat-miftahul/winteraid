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
            },
            {
                path: "/donation-campaigns",
                element: <h1>Donation Campaigns</h1>,
            },
            {
                path: "/how-to-help",
                element: <h1>How to Help</h1>,
            },
            {
                path: "/dashboard",
                element: <h1>Dashboard</h1>,
            },
        ],
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    }
]);

export default routes;
