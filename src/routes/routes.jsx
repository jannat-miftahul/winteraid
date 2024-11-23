import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import DonationCampaign from "../pages/DonationCampaign";
import CampaignDetails from "../pages/CampaignDetails";

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
                element: <DonationCampaign />,
                loader: () => fetch("../donation.json"),
            },
            {
                path: "/how-to-help",
                element: <h1>How to Help</h1>,
            },
            {
                path: "/dashboard",
                element: <h1>Dashboard</h1>,
            },
            {
                path: "/campaign/:id", 
                element: <CampaignDetails />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    },
]);

export default routes;
