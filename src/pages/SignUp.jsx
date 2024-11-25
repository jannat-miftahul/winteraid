import { Link } from "react-router-dom";


const SignUp = () => {


    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form  className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Register for an account
                        </h3>
                        {/* name */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    

                        {/* photo */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URl
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                        {/* email */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        {/* password */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
            

                        {/* accept term and condition */}
                        <label className="cursor-pointer label justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkbox-mark"></span>
                            <span className="label-text">
                                I accept the terms and conditions
                            </span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-md">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/signin"
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
