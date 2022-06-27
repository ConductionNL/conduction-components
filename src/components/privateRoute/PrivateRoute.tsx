import React from "react";
import { navigate } from "gatsby";

interface PrivateRouteProps {
  authenticated: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, authenticated }) => {
  const [_authenticated, setAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!authenticated && window.location.pathname !== "/login") {
      navigate("/login");
    }

    authenticated && setAuthenticated(true);
  }, [authenticated]);

  if (!_authenticated) return <></>;

  return <>{children}</>;
};
