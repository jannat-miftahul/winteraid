import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
// import campaignsData from "./donation.json"; // Assuming the JSON data is in a file named donation.json

const DonationCampaign = () => {
    const campaignsData = useLoaderData();

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        setCampaigns(campaignsData);
    }, [campaignsData]);

    return (
        <section className="bg-background py-12">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-0 space-y-8" data-aos="fade-up">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center text-Blue">
                        Donation Campaigns
                    </h2>
                    <p className="text-center text-gray-600">
                        Choose a campaign to donate to and help those in need.
                        Your donation can make a difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonationCampaign;
