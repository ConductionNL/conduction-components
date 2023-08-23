import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "@gemeente-denhaag/divider";
import { Link } from "@gemeente-denhaag/link";
import { navigate } from "gatsby";
import * as styles from "./RichContentCard.module.css";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";
export const RichContentCard = ({ link, labelsWithIcon, tags, contentLinks, linkIsExternal, }) => {
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.link, onClick: () => navigate(link.href), children: _jsx(Link, { icon: linkIsExternal ? _jsx(ExternalLinkIcon, {}) : _jsx(ArrowRightIcon, {}), iconAlign: "start", children: link.label }) }), _jsx("div", { className: styles.labelsWithIcon, children: labelsWithIcon.map(({ label, icon }) => (_jsx(LabelWithIcon, { ...{ label, icon } }))) }), _jsx("div", { className: styles.tags, children: tags.map((tag) => (_jsx(Tag, { ...{ tag } }))) }), contentLinks && (_jsxs("div", { className: styles.contentLinks, children: [_jsx(Divider, {}), contentLinks.map(({ title, subTitle, href }) => (_jsx(ContentLink, { ...{ title, subTitle, href } })))] }))] }));
};
const LabelWithIcon = ({ label, icon }) => {
    return (_jsxs("div", { className: styles.labelWithIcon, children: [_jsx("span", { className: styles.labelWithIcon_icon, children: icon }), _jsx("span", { className: styles.labelWithIcon_label, children: label })] }));
};
const Tag = ({ tag }) => {
    return _jsx("span", { className: styles.tag, children: tag });
};
const ContentLink = ({ title, subTitle, href }) => {
    return (_jsxs(Link, { className: styles.contentLink, children: [_jsxs("div", { className: styles.contentLink_content, children: [_jsx("span", { className: styles.contentLink_title, children: title }), _jsx("span", { className: styles.contentLink_subTitle, children: subTitle })] }), _jsx("div", { children: _jsx(ArrowRightIcon, {}) })] }));
};
