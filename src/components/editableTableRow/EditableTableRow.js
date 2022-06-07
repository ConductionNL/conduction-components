import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import * as styles from "./EditableTableRow.module.css";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@gemeente-denhaag/components-react";
import { CheckedIcon, CloseIcon, EditIcon } from "@gemeente-denhaag/icons";
import { useForm } from "react-hook-form";
import { InputEmail, InputText } from "../formFields";
export const EditableTableRow = ({ thead, value, inputType, handleSave, }) => {
    const [editing, setEditing] = React.useState(false);
    return (_jsxs(TableRow, { children: [_jsx(TableHeader, { className: styles.th, children: thead }), editing && _jsx(EditingTableRow, { ...{ value, inputType, handleSave, setEditing } }), !editing && _jsx(RegularTableRow, { ...{ value, setEditing } })] }));
};
const RegularTableRow = ({ value, setEditing }) => {
    const { t } = useTranslation();
    return (_jsxs(_Fragment, { children: [_jsx(TableCell, { children: value }), _jsx(TableCell, { children: _jsx("div", { className: styles.editButton, onClick: () => setEditing(true), children: _jsx(Link, { icon: _jsx(EditIcon, {}), iconAlign: "start", children: t("Edit") }) }) })] }));
};
const EditingTableRow = ({ value, setEditing, handleSave, inputType, }) => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        handleSave(data.value);
        setEditing(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TableCell, { children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(FormField, { ...{ inputType, value, register, errors } }), _jsxs("div", { className: styles.editButtonsContainer, children: [_jsx("button", { type: "submit", className: styles.submit, children: _jsx(Link, { icon: _jsx(CheckedIcon, {}), iconAlign: "start", children: t("Save") }) }), _jsx("div", { onClick: () => setEditing(false), children: _jsx(Link, { icon: _jsx(CloseIcon, {}), iconAlign: "start", className: styles.cancel, children: t("Cancel") }) })] })] }) }), _jsx(TableCell, {})] }));
};
const FormField = ({ inputType, value, register, errors }) => {
    switch (inputType) {
        case "email":
            return _jsx(InputEmail, { defaultValue: value, ...{ register, errors }, name: "value", validation: { required: true } });
        case "text":
            return _jsx(InputText, { defaultValue: value, ...{ register, errors }, name: "value", validation: { required: true } });
    }
};
