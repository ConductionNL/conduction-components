import { jsx as _jsx } from "react/jsx-runtime";
import { TextArea } from "@gemeente-denhaag/textarea";
export const Textarea = ({ name, validation, register, errors }) => (_jsx(TextArea, { ...register(name, { ...validation }), invalid: errors[name] }));
