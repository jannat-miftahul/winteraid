import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import DonationCampaign from "../pages/DonationCampaign";
import CampaignDetails from "../pages/CampaignDetails";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SecuredRoutes from "./SecuredRoutes";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

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
                element: <Dashboard />,
            },
            {
                path: "/campaign/:id",
                element: (
                    <SecuredRoutes>
                        <CampaignDetails />,
                    </SecuredRoutes>
                ),
                // loader: () => fetch("../donation.json"),
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/signin",
                element: <SignIn />,
            },
            {
                path: "/auth/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default routes;
