import { BsGift } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineWifi } from "react-icons/hi";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const ShareWarmth = () => {
    return (
        <section className="bg-background py-20" data-aos="fade-down">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl text-Blue font-medium mb-4">Share the Warmth</h2>
                <p className="text-lg mb-8">
                    Join us in making a difference this winter. Your support can
                    help provide essential winter clothing and supplies to those
                    in need.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-sm mx-auto">
                    <div data-aos="flip-right">
                        <NavLink
                            to="/donation-campaigns"
                            className="btn btn-circle bg-lightBlue text-white font-medium h-32 w-32 hover:bg-Orange"
                        >
                            <BsGift size={44} />
                        </NavLink>
                        <h3 className="text-lg text-Blue font-semibold mt-2">Donate</h3>
                    </div>

                    {/* buttons */}
                    <div data-aos="flip-right">
                        <NavLink
                            to="/volunteer"
                            className="btn btn-circle bg-Blue text-white font-medium h-32 w-32 hover:bg-Orange"
                        >
                            <FaRegHandshake size={44} />
                        </NavLink>
                        <h3 className="text-lg text-Blue font-semibold mt-2">
                            Volunteer
                        </h3>
                    </div>

                    <div data-aos="flip-right">
                        <NavLink
                            to="/contact"
                            className="btn btn-circle bg-lightBlue text-white font-medium h-32 w-32 hover:bg-Orange"
                        >
                            <PiPhoneCallDuotone size={44} />
                        </NavLink>
                        <h3 className="text-lg text-Blue font-semibold mt-2">Contact</h3>
                    </div>

                    <div data-aos="flip-right">
                        <NavLink
                            to="/connect"
                            className="btn btn-circle bg-Blue text-white font-medium h-32 w-32 hover:bg-Orange"
                        >
                            <HiOutlineWifi size={44} />
                        </NavLink>
                        <h3 className="text-lg text-Blue font-semibold mt-2">Connect</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShareWarmth;
