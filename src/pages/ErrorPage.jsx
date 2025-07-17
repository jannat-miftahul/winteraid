import { Link } from "react-router-dom";
import {
    FaSnowflake,
    FaArrowLeft
} from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-200 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-6xl text-blue-200 animate-pulse">❄️</div>
                <div className="absolute top-40 right-20 text-8xl text-blue-100 animate-pulse">🧥</div>
                <div className="absolute bottom-20 left-20 text-5xl text-orange-200 animate-pulse">🧤</div>
                <div className="absolute bottom-40 right-10 text-6xl text-orange-100 animate-pulse">🧣</div>

                {/* Floating Snowflakes */}
                <FaSnowflake className="absolute top-32 left-1/4 text-blue-200 text-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                <FaSnowflake className="absolute top-60 right-1/3 text-blue-300 text-xl animate-pulse" style={{ animationDuration: '4s' }} />
                <FaSnowflake className="absolute bottom-32 left-1/3 text-blue-200 text-3xl animate-pulse" style={{ animationDuration: '5s' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
                    {/* Error Icon */}
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-6 shadow-lg">
                            <MdOutlineSearchOff className="text-4xl text-white" />
                        </div>

                        {/* 404 Display */}
                        <div className="relative">
                            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                                404
                            </h1>
                            <div className="absolute inset-0 text-8xl lg:text-9xl font-bold text-blue-100 animate-pulse -z-10">
                                404
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Oops! Page Not Found
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto">
                            It seems like you&apos;ve wandered into the winter storm! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                        >
                            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                            Back to Home
                        </Link>
                        <Link
                            to="/donation-campaigns"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            <FaSnowflake className="mr-2" />
                            View Campaigns
                        </Link>
                    </div>

                    {/* Additional Help */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-gray-500 text-sm">
                            Need help?
                            <Link to="/contact" className="text-blue-600 hover:text-blue-800 ml-1 font-medium">
                                Contact our support team
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Fun Winter Message */}
                <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm italic">
                        &quot;Even when you&apos;re lost, WinterAid is here to help you find your way back to warmth&quot; ❄️
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
