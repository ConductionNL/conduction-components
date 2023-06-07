import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { TextField } from "@gemeente-denhaag/textfield";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
export const InputPassword = ({ disabled, name, validation, register, errors, }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (_jsx(TextField, { type: showPassword ? "text" : "password", ...{ disabled }, ...register(name, { ...validation }), invalid: errors[name], icon: _jsx("span", { onClick: () => setShowPassword(!showPassword), children: showPassword ? _jsx(HideIcon, {}) : _jsx(ShowIcon, {}) }) }));
};
export const InputText = ({ disabled, name, defaultValue, validation, register, errors, }) => (_jsx(TextField, { type: "text", ...{ defaultValue, disabled }, ...register(name, { ...validation }), invalid: errors[name] }));
export const InputEmail = ({ disabled, name, defaultValue, validation, register, errors, }) => (_jsx(TextField, { type: "email", ...{ defaultValue, disabled }, ...register(name, { ...validation }), invalid: errors[name] }));
export const InputDate = ({ disabled, name, defaultValue, validation, register, errors, }) => (_jsx(TextField, { type: "date", ...{ defaultValue, disabled }, ...register(name, { ...validation }), invalid: errors[name] }));
export const InputNumber = ({ disabled, name, defaultValue, validation, register, errors, }) => (_jsx(TextField, { type: "number", ...{ defaultValue, disabled }, ...register(name, { ...validation }), invalid: errors[name] }));
