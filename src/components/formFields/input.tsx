import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { IReactHookFormProps } from "./types";

export interface IInputProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
}

export const InputPassword: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  validation,
  register,
  placeholder,
  errors,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...{ disabled, placeholder }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      icon={<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HideIcon /> : <ShowIcon />}</span>}
    />
  );
};

export const InputText: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  placeholder,
  errors,
}) => (
  <TextField
    type="text"
    {...{ defaultValue, disabled, placeholder }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputEmail: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  placeholder,
  errors,
}) => (
  <TextField
    type="email"
    {...{ defaultValue, disabled, placeholder }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputDate: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  errors,
}) => (
  <TextField
    type="date"
    {...{ defaultValue, disabled }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputNumber: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  placeholder,
  errors,
}) => (
  <TextField
    type="number"
    {...{ defaultValue, disabled, placeholder }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

interface IInputFileProps {
  accept?: string;
}

export const InputFile: React.FC<IInputFileProps & IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  accept,
  defaultValue,
  validation,
  register,
}) => (
  <input
    className="denhaag-textfield__input"
    type="file"
    {...{ defaultValue, disabled, accept }}
    {...register(name, { ...validation })}
  />
);
