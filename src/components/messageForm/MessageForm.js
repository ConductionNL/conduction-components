import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Button, FormField, FormFieldInput, FormFieldLabel } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { Textarea } from "../formFields";
export const MessageForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    //the empty onSubmit is dependend on an API to function. This API is not yet implemented
    const onSubmit = async () => { };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(FormField, { children: _jsxs(FormFieldInput, { children: [_jsx(FormFieldLabel, { children: t("Message") }), _jsx(Textarea, { ...{ register, errors }, name: "message", validation: { required: true } })] }) }), _jsx(Button, { size: "large", type: "submit", children: t("Send") })] }));
};
