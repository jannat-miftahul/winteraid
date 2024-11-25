import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const SecuredRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/signin" />;
};

SecuredRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SecuredRoutes;
