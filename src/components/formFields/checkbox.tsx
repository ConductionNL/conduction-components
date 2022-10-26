import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";

export interface ICheckboxProps {
  label: string;
  name: string;
  defaultChecked?: boolean;
}

export const InputCheckbox: React.FC<ICheckboxProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
  defaultChecked,
}) => (
  <FormControlLabel
    input={<input type="checkbox" {...{ defaultChecked }} {...register(name, { ...validation })} />}
    {...{ label }}
  />
);
