import { jsx as _jsx } from "react/jsx-runtime";
import * as styles from "./TopNav.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
export const PrimaryTopNav = ({ items }) => {
    return (_jsx("nav", { className: styles.primary, children: _jsx("ul", { className: styles.ul, children: items.map(({ label, href, icon }, idx) => (_jsx("li", { className: styles.li, onClick: () => navigate(href), children: _jsx(Link, { icon: icon, iconAlign: "start", children: label }) }, idx))) }) }));
};
export const SecondaryTopNav = ({ items }) => {
    return (_jsx("nav", { className: styles.secondary, children: _jsx("ul", { className: styles.ul, children: items.map(({ label, href, icon }, idx) => (_jsx("li", { className: styles.li, onClick: () => navigate(href), children: _jsx(Link, { icon: icon, iconAlign: "start", children: label }) }, idx))) }) }));
};
