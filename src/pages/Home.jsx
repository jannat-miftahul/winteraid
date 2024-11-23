import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />

            {/* About Section */}
            <About />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Dynamic Nested Routes */}
            <Outlet />
        </div>
    );
};

export default Home;
