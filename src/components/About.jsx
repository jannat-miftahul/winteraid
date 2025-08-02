import { CgArrowTopRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import {
    FaHandHoldingHeart,
    FaHandsHelping,
    FaUsers,
    FaGift,
    FaDonate,
    FaBullhorn,
    FaHome,
    FaQuoteLeft,
} from "react-icons/fa";
import { GiPoloShirt } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

const About = () => {
    return (
        <section id="about-section" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden" data-aos="fade-up">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 text-9xl text-blue-600">❄️</div>
                <div className="absolute top-40 right-20 text-9xl text-orange-500">🧥</div>
                <div className="absolute bottom-20 left-20 text-9xl text-blue-500">🧤</div>
                <div className="absolute bottom-40 right-10 text-9xl text-orange-400">🧣</div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 lg:px-0 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-Blue font-medium text-center mb-8">
                        About Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                        Bringing warmth and hope to communities in need during the coldest months
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16 border border-gray-100" data-aos="fade-up">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
                            <FaHandHoldingHeart className="text-2xl text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-lightBlue mb-4">Our Mission</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="leading-relaxed mb-6">
                                WinterAid is a non-profit organization dedicated to helping the homeless and those in need during the harsh winter months. Our mission is to provide essential winter clothing and supplies to ensure that everyone can stay warm and safe.
                            </p>
                            <p className="leading-relaxed">
                                We believe that no one should have to suffer from the cold, and we are committed to making a difference in our community. Through our various donation campaigns, we collect and distribute coats, hats, gloves, socks, blankets, and other winter essentials to those who need them the most.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                                <GiPoloShirt className="text-3xl text-blue-600 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-blue-800">Winter Clothing</p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center">
                                <FaHome className="text-3xl text-orange-600 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-orange-800">Safe Shelter</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
                                <FaHandHoldingHeart className="text-3xl text-green-600 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-green-800">Community Care</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                                <FaHandsHelping className="text-3xl text-purple-600 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-purple-800">Support Network</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How You Can Contribute & Our Impact */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100" data-aos="fade-right">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full mr-4">
                                <FaHandsHelping className="text-2xl text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-lightBlue">
                                How You Can Contribute
                            </h3>
                        </div>
                        <p className="mb-6 leading-relaxed">
                            There are several ways you can contribute to our cause:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                                    <FaGift className="text-orange-600" />
                                </div>
                                <p className="text-gray-600">
                                    Donate winter clothing and supplies at our designated drop-off locations.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                                    <FaDonate className="text-orange-600" />
                                </div>
                                <p className="text-gray-600">
                                    Make a monetary donation through our website to support our campaigns.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                                    <MdVolunteerActivism className="text-orange-600" />
                                </div>
                                <p className="text-gray-600">
                                    Volunteer your time to help with sorting, packing, and distributing donations.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                                    <FaBullhorn className="text-orange-600" />
                                </div>
                                <p className="text-gray-600">
                                    Spread the word about WinterAid and our mission to your friends and family.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100" data-aos="fade-left">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full mr-4">
                                <FaUsers className="text-2xl text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-lightBlue">
                                Our Impact
                            </h3>
                        </div>
                        <p className="mb-6 leading-relaxed">
                            Since our inception, we have achieved remarkable milestones:
                        </p>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-3xl font-bold text-blue-600">10,000+</h4>
                                        <p className="text-blue-800 font-semibold">Coats & Blankets Distributed</p>
                                    </div>
                                    <GiPoloShirt className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-3xl font-bold text-green-600">5,000+</h4>
                                        <p className="text-green-800 font-semibold">Families Helped</p>
                                    </div>
                                    <FaHome className="text-4xl text-green-500" />
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-3xl font-bold text-purple-600">1,000+</h4>
                                        <p className="text-purple-800 font-semibold">Active Volunteers</p>
                                    </div>
                                    <FaUsers className="text-4xl text-purple-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16 border border-gray-100" data-aos="fade-up">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-lightBlue mb-4">What People Say</h3>
                        <p className="text-lg text-gray-600">Real stories from those we&apos;ve helped and our volunteers</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                            <div className="flex items-start mb-4">
                                <FaQuoteLeft className="text-2xl text-blue-500 mr-4 mt-1" />
                                <div>
                                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                                        &quot;WinterAid provided my family with the warmth we needed during the coldest months. We are forever grateful.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">J</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lightBlue">Harriet Tubman</p>
                                            <p className="text-sm text-gray-600">Beneficiary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                            <div className="flex items-start mb-4">
                                <FaQuoteLeft className="text-2xl text-orange-500 mr-4 mt-1" />
                                <div>
                                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                                        &quot;Volunteering with WinterAid has been a rewarding experience. It&apos;s amazing to see the impact we can make together.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">J</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lightBlue">Lisa Smith</p>
                                            <p className="text-sm text-gray-600">Volunteer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Work Gallery */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16 border border-gray-100" data-aos="fade-up">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-lightBlue mb-4">Our Work in Action</h3>
                        <p className="text-lg text-gray-600">See the difference your support makes in our community</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <img
                                src="https://i.ibb.co.com/G558fmp/8e98f1060282f903db4c26833a32e035.jpg"
                                alt="Distribution Event"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Community Distribution</h4>
                                    <p className="text-sm">Reaching families in need</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <img
                                src="https://i.ibb.co.com/KbhyPgn/8a671ce771a88dace6aeacf1f4251432.jpg"
                                alt="Volunteer Work"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Volunteer Team</h4>
                                    <p className="text-sm">Hearts and hands working together</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <img
                                src="https://i.ibb.co.com/ZVMZcdj/fd1ccd647e473dead4ccb3720a72e91b.jpg"
                                alt="Winter Supplies"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Winter Essentials</h4>
                                    <p className="text-sm">Quality items for warmth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Get Involved CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-Blue rounded-3xl shadow-xl p-8 lg:p-12 text-center text-white" data-aos="fade-up">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                            <FaHandHoldingHeart className="text-3xl text-white" />
                        </div>
                        <h3 className="text-4xl font-bold mb-4">Get Involved</h3>
                        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                            Join us in making a difference. Your support can help us reach more people in need and bring warmth to those who need it most.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NavLink
                                to="/donation-campaigns"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <FaGift className="mr-2" />
                                Donate Now
                                <CgArrowTopRight size={20} className="ml-2" />
                            </NavLink>
                            <NavLink
                                to="/how-to-help"
                                className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                            >
                                <MdVolunteerActivism className="mr-2" />
                                Volunteer Today
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Thank You Message */}
                <div className="text-center mt-16" data-aos="fade-up">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4">
                        <FaHandHoldingHeart className="text-xl text-white" />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Thank you for your support!
                    </p>
                    <p className="mt-2">Together, we can make winter warmer for everyone</p>
                </div>
            </div>
        </section>
    );
};

export default About;
