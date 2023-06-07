import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as styles from "./ImageAndDetailsCard.module.css";
import clsx from "clsx";
import { Link } from "@gemeente-denhaag/link";
import { navigate } from "gatsby";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
export const ImageAndDetailsCard = ({ image, title, subHeader, introduction, link, layoutClassName, }) => {
    return (_jsxs("div", { className: clsx(styles.container, [layoutClassName && layoutClassName]), onClick: () => navigate(link.href), children: [_jsx("div", { className: styles.image, children: image }), _jsxs("div", { className: styles.content, children: [_jsxs("div", { children: [_jsx("div", { className: styles.title, children: title }), _jsx("span", { className: styles.subHeader, children: subHeader })] }), _jsx("div", { className: styles.introduction, children: introduction }), _jsx("div", { className: styles.link, children: _jsx(Link, { icon: _jsx(ArrowRightIcon, {}), iconAlign: "start", children: link.label }) })] })] }));
};
