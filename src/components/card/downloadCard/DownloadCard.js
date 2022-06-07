import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as styles from "./DownloadCard.module.css";
import { DownloadIcon } from "@gemeente-denhaag/icons";
import { Link } from "@gemeente-denhaag/components-react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
export const DownloadCard = ({ icon, label, sizeKb, layoutClassName }) => {
    const { t } = useTranslation();
    return (_jsxs("div", { className: clsx(styles.container, [layoutClassName && layoutClassName]), children: [_jsxs("div", { className: styles.content, children: [_jsx("div", { className: styles.icon, children: icon }), _jsxs("div", { children: [label, " (", sizeKb, "kb)"] })] }), _jsx(Link, { icon: _jsx(DownloadIcon, {}), iconAlign: "start", children: t("Download") })] }));
};
