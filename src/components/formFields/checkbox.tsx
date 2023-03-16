import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";

export interface ICheckboxProps {
  label: string;
  name: string;
}

export const InputCheckbox = ({
  name,
  validation,
  register,
  label,
}: ICheckboxProps & IReactHookFormProps): JSX.Element => (
  <FormControlLabel input={<input type="checkbox" {...register(name, { ...validation })} />} {...{ label }} />
);
