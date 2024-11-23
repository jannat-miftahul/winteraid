import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-11/12 mx-auto">
            <div className="navbar">
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
                                        isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/donation-campaigns">
                                    Donation Campaigns
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/how-to-help">How to Help</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold gap-0 hover:bg-transparent">
                        <span className="text-darkBlue">Winter</span>
                        <span className="text-warmOrange">Aid</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/donation-campaigns">
                                Donation Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/how-to-help">How to Help</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-[#E76F1B] text-white px-6 hover:bg-secondary">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
