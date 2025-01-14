import { BsGift } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { GiAwareness } from "react-icons/gi";
import { Link } from "react-router-dom";

const HowToHelp = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div
                className="max-w-screen-xl mx-auto px-4 lg:px-0"
                data-aos="fade-up"
            >
                <h2 className="text-3xl text-Orange font-medium text-center mb-8">
                    How to Help
                </h2>
                <p className="text-center text-gray-700 mb-8">
                    There are many ways you can help us make a difference this
                    winter.
                </p>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    data-aos="fade-up"
                >
                    {/* Donate Items */}
                    <div className="bg-white h-72 p-6 flex flex-col justify-between rounded-lg shadow-md text-center space-y-4">
                        <BsGift size={44} className="mx-auto" />
                        <h3 className="text-xl font-semibold">Donate Items</h3>
                        <p className="text-gray-700">
                            Donate coats, hats, gloves, socks, blankets, and
                            other winter essentials.
                        </p>
                        <Link
                            to="/donation-campaigns"
                            className="btn bg-primary text-white px-4 py-2 rounded-full hover:bg-Orange"
                        >
                            View Campaigns
                        </Link>
                    </div>

                    {/* Make a Donation */}
                    <div className="bg-white h-72 p-6 flex flex-col justify-between rounded-lg shadow-md text-center space-y-4">
                        <FaHandHoldingUsd size={44} className="mx-auto" />
                        <h3 className="text-xl font-semibold">
                            Make a Donation
                        </h3>
                        <p className="text-gray-700">
                            Your monetary donations help us purchase essential
                            winter supplies.
                        </p>
                        <Link
                            to="/auth/signin"
                            className="btn bg-primary text-white px-4 py-2 rounded-full hover:bg-Orange"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Volunteer */}
                    <div className="bg-white h-72 flex flex-col justify-between p-6 rounded-lg shadow-md text-center space-y-4">
                        <FaRegHandshake size={44} className="mx-auto" />
                        <h3 className="text-xl font-semibold">Volunteer</h3>
                        <p className="text-gray-700">
                            Join our team of volunteers to help distribute
                            winter supplies.
                        </p>
                        <Link
                            to="/auth/signin"
                            className="btn bg-primary text-white px-4 py-2 rounded-full hover:bg-Orange"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Spread the Word */}
                    <div className="bg-white h-72 p-6 flex flex-col justify-between rounded-lg shadow-md text-center space-y-4">
                        <GiAwareness size={44} className="mx-auto" />
                        <h3 className="text-xl font-semibold">
                            Spread the Word
                        </h3>
                        <p className="text-gray-700">
                            Help us raise awareness by sharing our mission with
                            your network.
                        </p>
                        <Link
                            to="/auth/signin"
                            className="btn bg-primary text-white px-4 py-2 rounded-full hover:bg-Orange"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToHelp;
