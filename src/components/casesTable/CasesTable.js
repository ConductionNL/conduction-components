import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as styles from "./CasesTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";
export const CasesTable = ({ cases }) => {
    const { t } = useTranslation();
    return (_jsx(Table, { children: _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableHeader, { children: t("Title") }), _jsx(TableHeader, { children: t("Status") }), _jsx(TableHeader, { children: t("Date") }), _jsx(TableHeader, {})] }), cases.map((_case) => (_jsxs(TableRow, { className: styles.contentRow, children: [_jsx(TableCell, { children: _case.omschrijving }), _jsx(TableCell, { children: _case.status }), _jsx(TableCell, { children: _case.startdatum }), _jsx(TableCell, { onClick: () => navigate(`/my-cases/${_case.id}`), children: _jsx(Link, { icon: _jsx(ArrowRightIcon, {}), iconAlign: "start", children: t("View case") }) })] }, _case.id)))] }) }));
};
