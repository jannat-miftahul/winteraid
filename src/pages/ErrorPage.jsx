import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-accent mb-4 animate-bounce">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-2">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="btn bg-primary text-white px-6 py-3 rounded-full hover:bg-Orange"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
