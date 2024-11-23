const HowItWorks = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl text-primary font-bold text-center mb-8">
                    How It Works
                </h2>
                <div className="text-lg flex justify-between gap-20">
                    <div className="w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Instructions for Donation
                        </h3>
                        <p className="mb-4">
                            Donating to WinterAid is simple and straightforward.
                            Follow these steps to make a donation:
                        </p>
                        <ol className="list-decimal list-inside mb-4">
                            <li className="mb-2">
                                Gather your winter clothing and supplies that
                                you wish to donate.
                            </li>
                            <li className="mb-2">
                                Ensure that all items are clean and in good
                                condition.
                            </li>
                            <li className="mb-2">
                                Pack the items securely in a bag or box.
                            </li>
                            <li className="mb-2">
                                Label the bag or box with "WinterAid Donation".
                            </li>
                            <li className="mb-2">
                                Drop off the donation at one of our designated
                                collection points.
                            </li>
                        </ol>
                    </div>

                    <div className="w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">
                            Collection Points
                        </h3>
                        <p className="mb-4">
                            We have several collection points across different
                            divisions where you can drop off your donations.
                            Here are the locations:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">
                                Dhaka: 123 Winter St, Dhaka
                            </li>
                            <li className="mb-2">
                                Chittagong: 456 Cozy Ave, Chittagong
                            </li>
                            <li className="mb-2">
                                Khulna: 789 Warm Blvd, Khulna
                            </li>
                            <li className="mb-2">
                                Rajshahi: 101 Comfort Rd, Rajshahi
                            </li>
                            <li className="mb-2">
                                Barisal: 202 Heat Ln, Barisal
                            </li>
                            <li className="mb-2">
                                Sylhet: 303 Snug St, Sylhet
                            </li>
                            <li className="mb-2">
                                Rangpur: 404 Toasty Dr, Rangpur
                            </li>
                            <li className="mb-2">
                                Mymensingh: 505 Cozy Ct, Mymensingh
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Supported Divisions
                    </h3>
                    <p className="mb-4">
                        WinterAid operates in the following divisions of
                        Bangladesh:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mb-2">Dhaka</li>
                        <li className="mb-2">Chittagong</li>
                        <li className="mb-2">Khulna</li>
                        <li className="mb-2">Rajshahi</li>
                        <li className="mb-2">Barisal</li>
                        <li className="mb-2">Sylhet</li>
                        <li className="mb-2">Rangpur</li>
                        <li className="mb-2">Mymensingh</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
