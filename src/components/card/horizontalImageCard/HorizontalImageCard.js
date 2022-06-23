import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as styles from "./HorizontalImageCard.module.css";
import clsx from "clsx";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";
export const HorizontalImageCard = ({ title, layoutClassName, external, link, iconOrImage, }) => {
    return (_jsxs("div", { className: clsx(styles.container, [layoutClassName && layoutClassName]), onClick: () => navigate(link.href), children: [_jsx("div", { className: styles.imageOrIconContainer, children: iconOrImage }), _jsxs("div", { className: styles.link, children: [_jsx("div", { className: styles.title, children: title }), _jsx(Link, { icon: external ? _jsx(ExternalLinkIcon, {}) : _jsx(ArrowRightIcon, {}), iconAlign: "start", children: link.label })] })] }));
};
