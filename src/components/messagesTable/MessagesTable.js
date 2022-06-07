import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as styles from "./MessagesTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";
export const MessagesTable = ({ messages }) => {
    const { t } = useTranslation();
    return (_jsx(Table, { children: _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableHeader, { children: t("Organisation") }), _jsx(TableHeader, { children: t("Date") }), _jsx(TableHeader, {})] }), messages.map(({ organisation, date, id }) => (_jsxs(TableRow, { className: styles.contentRow, children: [_jsx(TableCell, { children: organisation }), _jsx(TableCell, { children: date }), _jsx(TableCell, { onClick: () => navigate(`/my-messages/${id}`), children: _jsx(Link, { icon: _jsx(ArrowRightIcon, {}), iconAlign: "start", children: t("View message") }) })] }, id)))] }) }));
};
