import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Password reset email sent!");
        setTimeout(() => {
            window.location.href = "https://mail.google.com";
        }, 2000);
    };

    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-3xl font-medium text-center mb-8">
                    Forgot Password
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-Orange w-full mt-4"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
