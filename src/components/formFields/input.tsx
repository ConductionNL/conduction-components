import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { IReactHookFormProps } from "./types";

export interface IInputProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const InputPassword = ({
  disabled,
  name,
  validation,
  register,
  errors,
}: IInputProps & IReactHookFormProps): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...{ disabled }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      icon={<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HideIcon /> : <ShowIcon />}</span>}
    />
  );
};

export const InputText = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}: IInputProps & IReactHookFormProps): JSX.Element => (
  <TextField
    type="text"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputEmail = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}: IInputProps & IReactHookFormProps): JSX.Element => (
  <TextField
    type="email"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputDate = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}: IInputProps & IReactHookFormProps): JSX.Element => (
  <TextField
    type="date"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputNumber = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}: IInputProps & IReactHookFormProps): JSX.Element => (
  <TextField
    type="number"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);
