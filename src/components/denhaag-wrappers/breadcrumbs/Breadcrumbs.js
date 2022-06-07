import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * This is a wrapper element based on https://nl-design-system.github.io/denhaag/?path=/docs/css-navigation-breadcrumb--default-story
 *
 * IMPORTANT: DO NOT MAKE CHANGES TO THIS FILE, AS ALL CHANGES WILL BE LOST UPON PACKAGE IMPLEMENTATION
 *
 * Note: we do not use css modules here due to this component being a wrapper
 */
import { Link } from "gatsby";
import "./Breadcrumbs.css";
export const Breadcrumbs = ({ crumbs }) => {
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: "denhaag-breadcrumb", children: _jsx("ol", { className: "denhaag-breadcrumb__list", itemScope: true, itemType: "https://schema.org/BreadcrumbList", children: crumbs.map((crumb, idx) => {
                if (crumbs.length !== idx + 1) {
                    return _jsx(CrumbItem, { ...crumb, ...{ idx } }, idx);
                }
                return _jsx(LastCrumbItem, { ...crumb, ...{ idx } }, idx);
            }) }) }));
};
const CrumbItem = ({ pathname, crumbLabel, idx }) => (_jsx("li", { className: "denhaag-breadcrumb__item", itemProp: "itemListElement", itemScope: true, itemType: "https://schema.org/ListItem", children: _jsxs(Link, { className: "denhaag-breadcrumb__link", to: pathname, itemProp: "item", children: [_jsx("span", { className: "denhaag-breadcrumb__text", itemProp: "name", children: crumbLabel }), _jsx("svg", { "aria-hidden": "true", className: "denhaag-icon", fill: "none", focusable: "false", height: "1em", "shape-rendering": "auto", viewBox: "0 0 24 24", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z", fill: "currentColor" }) }), _jsx("meta", { content: idx.toString(), itemProp: "position" })] }) }));
const LastCrumbItem = ({ pathname, crumbLabel, idx }) => (_jsx("li", { "aria-current": "page", className: "denhaag-breadcrumb__item", itemProp: "itemListElement", itemScope: true, itemType: "https://schema.org/ListItem", children: _jsxs(Link, { "aria-current": "page", className: "denhaag-breadcrumb__link denhaag-breadcrumb__link--current", to: pathname, itemProp: "item", children: [_jsx("span", { className: "denhaag-breadcrumb__text", itemProp: "name", children: crumbLabel }), _jsx("meta", { content: idx.toString(), itemProp: "position" })] }) }));
