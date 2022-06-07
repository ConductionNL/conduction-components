import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { navigate } from "gatsby";
export const PrivateRoute = ({ children, isLoggedIn }) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    React.useEffect(() => {
        if (!isLoggedIn && window.location.pathname !== "/login") {
            navigate("/login");
        }
        isLoggedIn && setAuthenticated(true);
    }, [isLoggedIn]);
    if (!authenticated)
        return _jsx(_Fragment, {});
    return _jsx(_Fragment, { children: children });
};
