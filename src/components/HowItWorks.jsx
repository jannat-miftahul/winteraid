import {
    FaMapMarkerAlt,
    FaClipboardList,
    FaCheckCircle,
    FaBoxOpen,
    FaTags,
    FaTruck,
    FaHandHoldingHeart
} from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';

const HowItWorks = () => {
    return (
        <section className="bg-gradient-to-br from-Blue via-blue-800 to-blue-700 py-20 text-white relative overflow-hidden" data-aos="fade-up">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 text-9xl">❄️</div>
                <div className="absolute top-40 right-20 text-9xl">🧥</div>
                <div className="absolute bottom-20 left-20 text-6xl">🧤</div>
                <div className="absolute bottom-40 right-10 text-6xl">🧣</div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 lg:px-0 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-Orange to-lightOrange bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Join our mission to bring warmth to those in need during the cold winter months
                    </p>
                </div>

                {/* Instructions for Donation */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" data-aos="fade-right">
                        <div className="flex items-center mb-6">
                            <div className="bg-Orange p-3 rounded-full mr-4">
                                <FaHandHoldingHeart className="text-2xl text-white" />
                            </div>
                            <h3 className="text-3xl text-lightOrange font-bold">
                                Instructions for Donation
                            </h3>
                        </div>
                        <p className="mb-6 text-blue-100 text-lg leading-relaxed">
                            Donating to WinterAid is simple and straightforward.
                            Follow these steps to make a donation:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-Orange/20 p-2 rounded-full mr-4 mt-1">
                                    <FaClipboardList className="text-lightOrange" />
                                </div>
                                <p className="text-blue-100">
                                    Gather your winter clothing and supplies that you wish to donate.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-Orange/20 p-2 rounded-full mr-4 mt-1">
                                    <FaCheckCircle className="text-lightOrange" />
                                </div>
                                <p className="text-blue-100">
                                    Ensure that all items are clean and in good condition.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-Orange/20 p-2 rounded-full mr-4 mt-1">
                                    <FaBoxOpen className="text-lightOrange" />
                                </div>
                                <p className="text-blue-100">
                                    Pack the items securely in a bag or box.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-Orange/20 p-2 rounded-full mr-4 mt-1">
                                    <FaTags className="text-lightOrange" />
                                </div>
                                <p className="text-blue-100">
                                    Label the bag or box with &quot;WinterAid Donation&quot;.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-Orange/20 p-2 rounded-full mr-4 mt-1">
                                    <FaTruck className="text-lightOrange" />
                                </div>
                                <p className="text-blue-100">
                                    Drop off the donation at one of our designated collection points.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Collection Points */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" data-aos="fade-left">
                        <div className="flex items-center mb-6">
                            <div className="bg-Orange p-3 rounded-full mr-4">
                                <FaMapMarkerAlt className="text-2xl text-white" />
                            </div>
                            <h3 className="text-3xl text-lightOrange font-bold">
                                Collection Points
                            </h3>
                        </div>
                        <p className="mb-6 text-blue-100 text-lg leading-relaxed">
                            We have several collection points across different
                            divisions where you can drop off your donations.
                        </p>
                        <div className="grid gap-3">
                            {[
                                { city: "Dhaka", address: "123 Winter St, Dhaka" },
                                { city: "Chittagong", address: "456 Cozy Ave, Chittagong" },
                                { city: "Khulna", address: "789 Warm Blvd, Khulna" },
                                { city: "Rajshahi", address: "101 Comfort Rd, Rajshahi" },
                                { city: "Barisal", address: "202 Heat Ln, Barisal" },
                                { city: "Sylhet", address: "303 Snug St, Sylhet" },
                                { city: "Rangpur", address: "404 Toasty Dr, Rangpur" },
                                { city: "Mymensingh", address: "505 Cozy Ct, Mymensingh" }
                            ].map((location, index) => (
                                <div key={index} className="flex items-center bg-blue-800/30 rounded-lg p-3">
                                    <FaMapMarkerAlt className="text-lightOrange mr-3" />
                                    <div>
                                        <span className="font-semibold text-orange-300">{location.city}:</span>
                                        <span className="text-blue-100 ml-2">{location.address}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Supported Divisions */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" data-aos="fade-up">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl text-lightOrange font-bold mb-4">
                            Supported Divisions
                        </h3>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            WinterAid operates across all divisions of Bangladesh, ensuring comprehensive coverage
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Dhaka", "Chittagong", "Khulna", "Rajshahi",
                            "Barisal", "Sylhet", "Rangpur", "Mymensingh"
                        ].map((division, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-lightOrange/10 to-Orange/30 rounded-xl p-4 text-center border border-lightOrange/30 hover:border-lightOrange/60 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="text-2xl flex justify-center mb-2"><FaBuildingColumns /></div>
                                <span className="text-white font-semibold">{division}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
