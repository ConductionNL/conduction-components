import { jsx as _jsx } from "react/jsx-runtime";
import { FormControlLabel } from "@gemeente-denhaag/components-react";
export const InputCheckbox = ({ name, validation, register, label, }) => _jsx(FormControlLabel, { input: _jsx("input", { type: "checkbox", ...register(name, { ...validation }) }), ...{ label } });
