import PropTypes from "prop-types";
import { CgArrowTopRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
    const { id, title, description, division, image } = campaign;
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 transition duration-500 transform hover:scale-105" data-aos="fade-up">
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="text-center space-y-2 mt-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-700">{description}</p>
                <p className="text-gray-500">Division: {division}</p>

                <NavLink
                    to={`/campaign/${id}`}
                    className="btn bg-Orange text-white px-4 py-2 rounded-full hover:bg-primary gap-0"
                >
                    Donate Now
                    <CgArrowTopRight size={20} />
                </NavLink>
            </div>
        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object.isRequired,
};

export default CampaignCard;
