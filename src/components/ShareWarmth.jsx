import { BsGift } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineWifi } from "react-icons/hi";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const ShareWarmth = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Share the Warmth</h2>
                <p className="text-lg mb-8">
                    Join us in making a difference this winter. Your support can
                    help provide essential winter clothing and supplies to those
                    in need.
                </p>

                <div className="flex justify-center space-x-4">
                    <div>
                        <NavLink
                            to="/donation-campaigns"
                            className="btn btn-circle bg-lightBlue text-white font-medium h-32 w-32 hover:bg-secondary"
                        >
                            <BsGift size={44} />
                        </NavLink>
                        <h3 className="text-lg font-semibold mt-2">Donate</h3>
                    </div>

                    {/* buttons */}
                    <div>
                        <NavLink
                            to="/volunteer"
                            className="btn btn-circle bg-Blue text-white font-medium h-32 w-32 hover:bg-secondary"
                        >
                            <FaRegHandshake size={44} />
                        </NavLink>
                        <h3 className="text-lg font-semibold mt-2">
                            Volunteer
                        </h3>
                    </div>

                    <div>
                        <NavLink
                            to="/contact"
                            className="btn btn-circle bg-lightBlue text-white font-medium h-32 w-32 hover:bg-secondary"
                        >
                            <PiPhoneCallDuotone size={44} />
                        </NavLink>
                        <h3 className="text-lg font-semibold mt-2">Contact</h3>
                    </div>

                    <div>
                        <NavLink
                            to="/connect"
                            className="btn btn-circle bg-Blue text-white font-medium h-32 w-32 hover:bg-secondary"
                        >
                            <HiOutlineWifi size={44} />
                        </NavLink>
                        <h3 className="text-lg font-semibold mt-2">Connect</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShareWarmth;
