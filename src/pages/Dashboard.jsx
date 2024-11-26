import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">
                Welcome, {user?.displayName}!
            </h2>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <img
                        src={
                            user?.photoURL ||
                            "https://i.ibb.co/P1n2z8D/profile-icon-design-free-vector.jpg"
                        }
                        alt="user"
                        className="w-24 h-24 border rounded-full mb-4"
                    />
                    <p className="text-lg font-semibold">{user?.displayName}</p>
                    <p className="text-gray-700">{user?.email}</p>
                </div>
                <div className="mt-6 text-center">
                    <Link
                        to="/update-profile"
                        className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
