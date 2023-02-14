import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IInputProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
  icon?: JSX.Element;
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
      icon={
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
        </span>
      }
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
  placeholder,
  errors,
}) => (
  <TextField
    type="text"
    {...{ defaultValue, disabled, placeholder, icon }}
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
  placeholder,
  errors,
}) => (
  <TextField
    type="email"
    {...{ defaultValue, disabled, placeholder, icon }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputURL: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  icon,
  placeholder,
  errors,
}) => (
  <TextField
    type="url"
    {...{ defaultValue, disabled, placeholder, icon }}
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
  placeholder,
  errors,
}) => (
  <TextField
    type="number"
    {...{ defaultValue, disabled, placeholder, icon }}
    {...register(name, { ...validation, valueAsNumber: true })}
    invalid={errors[name]}
  />
);

export const InputFloat: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  register,
  icon,
  placeholder,
  errors,
}) => (
  <TextField
    type="number"
    step=".01"
    {...{ disabled, placeholder, icon, defaultValue }}
    {...register(name, { ...validation, valueAsNumber: true })}
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
