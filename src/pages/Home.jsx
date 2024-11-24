import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Feature from "../components/Feature";
// import Volunteer from "../components/volunteer";
import ShareWarmth from "../components/ShareWarmth";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />

            {/* About Section */}
            <About />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Feature Section */}
            <Feature />

            {/* Volunteer Section */}
            {/* <Volunteer /> */}

            {/* Share Warmth Section */}
            <ShareWarmth />

            {/* Dynamic Nested Routes */}
            <Outlet />
        </div>
    );
};

export default Home;
