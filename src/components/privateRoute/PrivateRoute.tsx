import React from "react";
import { navigate } from "gatsby";

interface PrivateRouteProps {
  authenticated: boolean;
}

export const PrivateRoute = ({ children, authenticated }: React.PropsWithChildren<PrivateRouteProps>): JSX.Element => {
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
