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
import HowToHelp from "../pages/HowToHelp";
import UpdateProfile from "../pages/UpdateProfile";
import ForgotPassword from "../pages/ForgotPassword";

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
                element: <HowToHelp />,
            },
            {
                path: "/dashboard",
                element: (
                    <SecuredRoutes>
                        <Dashboard />
                    </SecuredRoutes>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <SecuredRoutes>
                        <UpdateProfile />
                    </SecuredRoutes>
                ),
            },
            {
                path: "/campaign/:id",
                element: (
                    <SecuredRoutes>
                        <CampaignDetails />
                    </SecuredRoutes>
                ),
                loader: () => fetch("../donation.json"),
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
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default routes;
