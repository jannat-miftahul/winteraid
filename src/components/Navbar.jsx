import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-100">
            <div className="navbar max-w-screen-xl mx-auto py-4 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `tab ${
                                            isActive
                                                ? "text-warmOrange"
                                                : "hover:text-[#608BC1"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation-campaigns"
                                    className={({ isActive }) =>
                                        `tab ${
                                            isActive ? "text-warmOrange" : ""
                                        }`
                                    }
                                >
                                    Donation Campaigns
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/how-to-help"
                                    className={({ isActive }) =>
                                        `tab ${
                                            isActive ? "text-warmOrange" : ""
                                        }`
                                    }
                                >
                                    How to Help
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        `tab ${
                                            isActive ? "text-warmOrange" : ""
                                        }`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <NavLink to="/" className="text-2xl font-bold gap-0">
                        <span className="text-darkBlue">Winter</span>
                        <span className="text-warmOrange">Aid</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-warmOrange" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation-campaigns"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-warmOrange" : ""}`
                                }
                            >
                                Donation Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/how-to-help"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-warmOrange" : ""}`
                                }
                            >
                                How to Help
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-warmOrange" : ""}`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <NavLink
                        to="/login"
                        className="bg-[#E76F1B] text-white font-medium px-6 py-2 rounded-md hover:bg-darkBlue"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
