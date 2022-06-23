import React from "react";
import { IReactHookFormProps } from "./types";
import { FormControlLabel } from "@gemeente-denhaag/components-react";

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

export const InputRadio: React.FC<ICheckboxProps & IReactHookFormProps> = ({ name, register, label }) => (
  <FormControlLabel input={<input type="radio" {...register(name)} />} {...{ label }} />
);
