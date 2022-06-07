import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { Link } from "gatsby";
import * as styles from "./Logo.module.css";
export const AuthenticatedLogo = ({ layoutClassName, href }) => {
    return (_jsx(Link, { className: styles.logoContainer, to: href ?? "#", children: _jsx("div", { className: clsx(styles.authenticatedLogo, styles.logo, layoutClassName) }) }));
};
export const UnauthenticatedLogo = ({ layoutClassName, href }) => {
    return (_jsx(Link, { className: styles.logoContainer, to: href ?? "#", children: _jsx("div", { className: clsx(styles.unauthenticatedLogo, styles.logo, layoutClassName) }) }));
};
