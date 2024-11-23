import { NavLink } from "react-router-dom";

const Volunteer = () => {
    return (
        <section className="bg-gray-100 mt-20 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Volunteer Spotlight
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="https://i.ibb.co.com/BqnW5Wr/65ad6b393d074440828f0eb122825c48.jpg" // Replace with a suitable image URL
                        alt="Volunteer Spotlight"
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-md object-cover md:mr-4"
                    />
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Mark Johnson
                        </h3>
                        <p className="mb-4">
                            Mark has been a dedicated volunteer with WinterAid
                            for over 5 years. His commitment to helping those in
                            need has made a significant impact on our community.
                            Mark spends his weekends sorting donations, packing
                            supplies, and distributing them to those in need.
                        </p>
                        <NavLink
                            to="/volunteer"
                            className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-darkBlue"
                        >
                            Join Us
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
