import { NavLink } from "react-router-dom";

const Feature = () => {
    return (
        <section className="bg-gray-100 mt-20 py-12">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Featured Campaign
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="https://i.ibb.co.com/52YSNLV/9c3d2883adcc17ef8fc365b6ca0f9412.jpg"
                        alt="Featured Campaign"
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-md md:mr-4"
                    />
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Winter Warmth Drive
                        </h3>
                        <p className="mb-8">
                            Our Winter Warmth Drive is dedicated to providing
                            essential winter clothing and supplies to those in
                            need. Join us in making a difference this winter by
                            donating coats, hats, gloves, and blankets.
                        </p>
                        <NavLink
                            to="/donation-campaigns"
                            className="bg-warmOrange text-white font-medium px-6 py-3 rounded-lg hover:bg-darkBlue"
                        >
                            Learn More
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
