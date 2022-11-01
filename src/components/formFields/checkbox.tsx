import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";

export interface ICheckboxProps {
  label: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export const InputCheckbox: React.FC<ICheckboxProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
  defaultChecked,
  disabled,
}) => (
  <FormControlLabel
    input={<input type="checkbox" {...{ defaultChecked, disabled }} {...register(name, { ...validation })} />}
    {...{ label }}
  />
);
