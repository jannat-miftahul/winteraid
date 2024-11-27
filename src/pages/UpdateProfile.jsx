import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({ displayName: name, photoURL });
            toast.success("Profile updated successfully!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-3xl font-medium text-center mb-8">Update Profile</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <button type="submit" className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-Orange w-full mt-4">
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;