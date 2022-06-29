import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";

export interface ICheckboxProps {
  label: string;
  name: string;
}

export const InputCheckbox: React.FC<ICheckboxProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
}) => <FormControlLabel input={<input type="checkbox" {...register(name, { ...validation })} />} {...{ label }} />;

export const InputRadio: React.FC<ICheckboxProps & IReactHookFormProps> = ({ name, validation, register, label }) => (
  <FormControlLabel input={<input type="radio" {...register(name, { ...validation })} />} {...{ label }} />
);
