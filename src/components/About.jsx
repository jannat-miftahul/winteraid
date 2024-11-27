import { CgArrowTopRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <section className="bg-background py-20" data-aos="fade-up">
            <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

            <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
                <h2 className="text-3xl text-Blue font-bold text-center mb-8">
                    About Us
                </h2>
                <div className="text-lg leading-relaxed">
                    <p className="mb-4">
                        WinterAid is a non-profit organization dedicated to
                        helping the homeless and those in need during the harsh
                        winter months. Our mission is to provide essential
                        winter clothing and supplies to ensure that everyone can
                        stay warm and safe.
                    </p>
                    <p className="mb-4">
                        We believe that no one should have to suffer from the
                        cold, and we are committed to making a difference in our
                        community. Through our various donation campaigns, we
                        collect and distribute coats, hats, gloves, socks,
                        blankets, and other winter essentials to those who need
                        them the most.
                    </p>

                    <div className="flex flex-col lg:flex-row justify-between">
                        <div data-aos="fade-right">
                            <h3 className="text-2xl text-lightBlue font-semibold mt-8 mb-4">
                                How You Can Contribute
                            </h3>
                            <p className="mb-4">
                                There are several ways you can contribute to our
                                cause:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li className="mb-2">
                                    Donate winter clothing and supplies at our
                                    designated drop-off locations.
                                </li>
                                <li className="mb-2">
                                    Make a monetary donation through our website
                                    to support our campaigns.
                                </li>
                                <li className="mb-2">
                                    Volunteer your time to help with sorting,
                                    packing, and distributing donations.
                                </li>
                                <li className="mb-2">
                                    Spread the word about WinterAid and our
                                    mission to your friends and family.
                                </li>
                            </ul>
                        </div>

                        <div data-aos="fade-left">
                            <h3 className="text-2xl text-lightBlue font-semibold mt-8 mb-4">
                                Our Impact
                            </h3>
                            <p className="mb-4">
                                Since our inception, we have:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li className="mb-2">
                                    Distributed over 10,000 coats and blankets.
                                </li>
                                <li className="mb-2">
                                    Helped more than 5,000 families stay warm.
                                </li>
                                <li className="mb-2">
                                    Engaged over 1,000 volunteers in our
                                    campaigns.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl text-lightBlue font-semibold mb-4">
                            Testimonials
                        </h3>
                        <div className="space-y-4">
                            <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                                &quot;WinterAid provided my family with the
                                warmth we needed during the coldest months. We
                                are forever grateful.&quot; - Jane Doe
                            </blockquote>
                            <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                                &quot;Volunteering with WinterAid has been a
                                rewarding experience. It&apos;s amazing to see
                                the impact we can make together.&quot; - John
                                Smith
                            </blockquote>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3
                            className="text-2xl text-lightBlue font-semibold mb-4"
                            data-aos="fade-up"
                        >
                            Our Work
                        </h3>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                            data-aos="fade-up"
                        >
                            <img
                                src="https://i.ibb.co.com/G558fmp/8e98f1060282f903db4c26833a32e035.jpg"
                                alt="Gallery Image 1"
                                className="w-full h-full rounded-lg shadow-md object-center"
                            />
                            <img
                                src="https://i.ibb.co.com/KbhyPgn/8a671ce771a88dace6aeacf1f4251432.jpg"
                                alt="Gallery Image 2"
                                className="w-full h-full rounded-lg shadow-md object-cente"
                            />
                            <img
                                src="https://i.ibb.co.com/ZVMZcdj/fd1ccd647e473dead4ccb3720a72e91b.jpg"
                                alt="Gallery Image 3"
                                className="w-full h-full rounded-lg shadow-md object-center"
                            />
                        </div>
                    </div>

                    <div className="mt-8 text-center" data-aos="fade-up">
                        <h3 className="text-2xl text-lightBlue font-semibold mb-4">
                            Get Involved
                        </h3>
                        <p className="mb-4">
                            Join us in making a difference. Your support can
                            help us reach more people in need.
                        </p>
                        <div>
                            <NavLink
                                to="/donation-campaigns"
                                className="btn bg-Orange text-white px-4 py-2 rounded-full hover:bg-primary"
                            >
                                Donate Now
                                <CgArrowTopRight size={20} />
                            </NavLink>
                        </div>
                    </div>

                    <p
                        className="mt-8 text-center text-accent font-semibold"
                        data-aos="fade-up"
                    >
                        Thank you for your support!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
