import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: "ease-in-out", // Animation easing
          once: true, // Whether animation should happen only once
        });
      }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Toaster />
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
