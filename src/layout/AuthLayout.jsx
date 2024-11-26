import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
    return (
        <div className="bg-gray-100 space-y-4">
            <header>
                <Navbar />
            </header>

            <Outlet />

            <Toaster />
        </div>
    );
};

export default AuthLayout;
