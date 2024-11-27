import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Feature = () => {
    return (
        <section className="bg-background py-20" data-aos="flip-up">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
                <h2 className="text-4xl text-Blue font-medium text-center mb-8">
                    Featured Campaign
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="https://i.ibb.co.com/vwDGNjr/2e2884bec093.jpg"
                        alt="Featured Campaign"
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-md md:mr-4"
                    />
                    <div className="md:w-1/2">
                        <h3 className="text-2xl text-lightBlue font-semibold mb-4">
                            Winter Warmth Drive
                        </h3>
                        <p className="mb-8">
                            Our Winter Warmth Drive is dedicated to providing
                            essential winter clothing and supplies to those in
                            need. Join us in making a difference this winter by
                            donating coats, hats, gloves, and blankets.
                        </p>
                        <NavLink
                            to="/campaign/1"
                            className="btn bg-Orange text-white px-6 py-3 rounded-full hover:bg-primary"
                        >
                            Learn More
                            <RxDoubleArrowRight size={20} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
