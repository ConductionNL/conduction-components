import React from "react";
import { navigate } from "gatsby";

interface PrivateRouteProps {
  isLoggedIn?: boolean;
}

export const PrivateRoute = ({ children, isLoggedIn }: React.PropsWithChildren<PrivateRouteProps>): JSX.Element => {
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
