import { BsTwitterX } from "react-icons/bs";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#181C14] text-white py-8">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
                    {/* Company Information */}
                    <div className="md:w-1/3 space-y-2">
                        <Link
                            to="/"
                            className="text-2xl font-bold gap-0 hover:bg-transparent"
                        >
                            <span className="text-white">Winter</span>
                            <span className="text-secondary">Aid</span>
                        </Link>
                        <p className="">
                            WinterAid is a non-profit organization dedicated to
                            helping the homeless during the winter season.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="md:w-1/3 space-y-2">
                        <h2 className="text-lg font-bold">Contact Us</h2>
                        <p>Email: info@winteraid.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Winter St, Snow City, NY 12345</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary"
                            >
                                <SiFacebook size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary"
                            >
                                <BsTwitterX size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary"
                            >
                                <SiInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-gray-400" />
                <div className="text-center">
                    <p>
                        &copy; {new Date().getFullYear()} WinterAid. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
