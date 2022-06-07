import React from "react";
import { navigate } from "gatsby";

interface PrivateRouteProps {
  isLoggedIn?: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isLoggedIn }) => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== "/login") {
      navigate("/login");
    }

    isLoggedIn && setAuthenticated(true);
  }, [isLoggedIn]);

  if (!authenticated) return <></>;

  return <>{children}</>;
};
