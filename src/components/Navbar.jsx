import { useContext } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className="bg-background backdrop-blur-md bg-opacity-45 sticky top-0 z-50">
            <div className="navbar max-w-screen-xl mx-auto py-4 px-0">
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
                                            isActive ? "text-secondary" : ""
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
                                            isActive ? "text-secondary" : ""
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
                                            isActive ? "text-secondary" : ""
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
                                            isActive ? "text-secondary" : ""
                                        }`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <NavLink to="/" className="text-2xl font-bold gap-0">
                        <span className="text-primary">Winter</span>
                        <span className="text-secondary">Aid</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-secondary" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation-campaigns"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-secondary" : ""}`
                                }
                            >
                                Donation Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/how-to-help"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-secondary" : ""}`
                                }
                            >
                                How to Help
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `tab ${isActive ? "text-secondary" : ""}`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-4">
                    <div>
                        {user && user?.email ? (
                            <div className="flex flex-col items-center">
                                <img
                                    src={
                                        user?.photoURL ||
                                        "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                    }
                                    alt="user"
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="text-sm">{user?.displayName}</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    <div>
                        {user && user?.email ? (
                            <Link
                                onClick={logOut}
                                className="btn bg-accent text-white px-6 py-2 rounded-full hover:bg-primary gap-0"
                            >
                                Logout <CgArrowTopRight size={20} />
                            </Link>
                        ) : (
                            <Link
                                to="/auth/signin"
                                className="btn bg-accent text-white px-6 py-2 rounded-full hover:bg-primary gap-0"
                            >
                                Login <CgArrowTopRight size={20} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
