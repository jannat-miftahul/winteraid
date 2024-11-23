import { useState, useEffect } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { NavLink, useLoaderData } from "react-router-dom";
// import campaignsData from "./donation.json"; // Assuming the JSON data is in a file named donation.json

const DonationCampaign = () => {
    const campaignsData = useLoaderData();

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        setCampaigns(campaignsData);
    }, [campaignsData]);

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Donation Campaigns
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign) => (
                        <div
                            key={campaign.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {campaign.title}
                                </h3>
                                <p className="text-gray-700 mb-2">
                                    {campaign.description}
                                </p>
                                <p className="text-gray-500 mb-4">
                                    Division: {campaign.division}
                                </p>
                                <NavLink
                                    to={`/campaign/${campaign.id}`}
                                    className="btn bg-warmOrange text-white px-4 py-2 rounded-full hover:bg-darkBlue"
                                >
                                    Donate Now
                                    <CgArrowTopRight />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonationCampaign;
