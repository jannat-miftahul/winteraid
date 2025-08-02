import { Link } from "react-router-dom";
import {
    FaSnowflake,
    FaArrowLeft
} from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-6xl text-lightBlue/30 animate-pulse">❄️</div>
                <div className="absolute top-40 right-20 text-8xl text-Blue/20 animate-pulse">🧥</div>
                <div className="absolute bottom-20 left-20 text-5xl text-Orange/30 animate-pulse">🧤</div>
                <div className="absolute bottom-40 right-10 text-6xl text-lightOrange/30 animate-pulse">🧣</div>

                <FaSnowflake className="absolute top-32 left-1/4 text-lightBlue/40 text-2xl" />
                <FaSnowflake className="absolute top-60 right-1/3 text-Blue/30 text-xl" />
                <FaSnowflake className="absolute bottom-32 left-1/3 text-lightBlue/40 text-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="p-8">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-Orange to-lightOrange rounded-full mb-6 shadow-lg">
                            <MdOutlineSearchOff className="text-4xl text-white" />
                        </div>

                        <div className="relative">
                            <h1 className="text-6xl lg:text-8xl font-bold text-Blue">
                                404
                            </h1>
                            <div className="absolute inset-0 text-8xl lg:text-9xl font-bold text-Blue/10 animate-ping -z-10">
                                404
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-10">
                        <h2 className="text-xl lg:text-2xl font-bold text-primary mb-4">
                            Oops! Page Not Found
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-Orange to-lightOrange mx-auto mb-6 animate-pulse"></div>
                        <p className="text-lg text-lightBlue mb-4 leading-relaxed max-w-2xl mx-auto">
                            It seems like you&apos;ve wandered into the winter storm! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                        <p className="text-primary">
                            Don&apos;t worry, let&apos;s get you back to warmth and safety.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-Blue to-lightBlue text-white px-8 py-4 rounded-full font-semibold hover:from-lightBlue hover:to-Blue transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg group"
                        >
                            <FaArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
                            Back to Home
                        </Link>
                        <Link
                            to="/donation-campaigns"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-Orange to-lightOrange text-white px-8 py-4 rounded-full font-semibold hover:from-lightOrange hover:to-Orange transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                        >
                            <FaSnowflake className="mr-2" />
                            View Campaigns
                        </Link>
                    </div>

                    <div className="mt-10 border-t border-lightBlue/20">
                        <p className="text-lightBlue text-sm">
                            Need help?
                            <Link to="/contact" className="text-Blue hover:text-accent ml-1 font-medium transition-colors duration-300">
                                Contact our support team
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="text-center p-6">
                    <p className="text-primary/80 text-sm italic hover:text-accent transition-colors duration-300">
                        &quot;Even when you&apos;re lost, WinterAid is here to help you find your way back to warmth&quot; ❄️
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
