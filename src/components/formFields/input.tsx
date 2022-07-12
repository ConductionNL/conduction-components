import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { IReactHookFormProps } from "./types";

export interface IInputProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
  icon?: JSX.Element;
}

export const InputPassword: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  validation,
  register,
  icon,
  errors,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...{ disabled, icon }}
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
  icon,
  errors,
}) => (
  <TextField
    type="text"
    {...{ defaultValue, disabled, icon }}
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
  icon,
  errors,
}) => (
  <TextField
    type="email"
    {...{ defaultValue, disabled, icon }}
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
  icon,
  errors,
}) => (
  <TextField
    type="date"
    {...{ defaultValue, disabled, icon }}
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
  icon,
  errors,
}) => (
  <TextField
    type="number"
    {...{ defaultValue, disabled, icon }}
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
