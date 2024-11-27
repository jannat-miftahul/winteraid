import { useState } from "react";
import { useParams } from "react-router-dom";
import campaignsData from "../../public/donation.json";
import toast from "react-hot-toast";

const CampaignDetails = () => {
    const { id } = useParams();
    const campaign = campaignsData.find(
        (campaign) => campaign.id === parseInt(id)
    );
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isQuantityValid = () => {
        return !isNaN(formData.quantity) && formData.quantity > 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isQuantityValid()) {
            toast.error("Please enter a valid quantity");
            return;
        }
        toast.success("Thank you! We will reach your destination soon.");
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
    };

    return (
        <section className="bg-background py-12" data-aos="fade-up">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
                <div
                    className="flex flex-col md:flex-row items-center gap-6 mb-8"
                    data-aos="fade-up"
                >
                    <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-md object-cover"
                    />
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-2xl text-Orange font-medium">
                            {campaign.title}
                        </h3>
                        <p className="text-lg">{campaign.description}</p>
                        <p className="text-gray-700">
                            Division: {campaign.division}
                        </p>
                        <p className="text-gray-700">
                            Status: {campaign.status}
                        </p>
                        <p className="text-gray-700">
                            Contact: {campaign.contactInfo}
                        </p>
                    </div>
                </div>

                <h3
                    className="text-3xl text-Blue font-medium mt-12 mb-4"
                    data-aos="fade-up"
                >
                    Donate to this Campaign
                </h3>

                {/* form to submit donation details */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md"
                    data-aos="fade-up"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="quantity"
                        >
                            Quantity of items
                        </label>
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="itemType"
                        >
                            Item type
                        </label>
                        <input
                            type="text"
                            id="itemType"
                            name="itemType"
                            value={formData.itemType}
                            onChange={handleChange}
                            placeholder="e.g. blanket, jacket, sweater"
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="pickupLocation"
                        >
                            Pickup location
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="notes"
                        >
                            Additional notes (optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-Blue text-white font-medium px-6 py-3 rounded-lg hover:bg-lightBlue"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CampaignDetails;
