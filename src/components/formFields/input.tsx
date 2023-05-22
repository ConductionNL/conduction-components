import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage } from "./errorMessage/ErrorMessage";

export interface IInputProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
  icon?: JSX.Element;
  placeholder?: string;
  hideErrorMessage?: boolean;
}

export const InputPassword: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  validation,
  register,
  placeholder,
  errors,
  hideErrorMessage,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <>
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
      {!hideErrorMessage && <ErrorMessage message={errors[name]?.message} />}
    </>
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
  hideErrorMessage,
}) => (
  <>
    <TextField
      type="text"
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
    />
    {!hideErrorMessage && <ErrorMessage message={errors[name]?.message} />}
  </>
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
  hideErrorMessage,
}) => (
  <>
    <TextField
      type="email"
      required={!!validation?.required}
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
    />
    {!hideErrorMessage && <ErrorMessage message={errors[name]?.message} />}
  </>
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
  hideErrorMessage,
}) => (
  <>
    <TextField
      type="url"
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
    />
    {!hideErrorMessage && <ErrorMessage message={errors[name]?.message} />}
  </>
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
  hideErrorMessage,
}) => (
  <>
    <TextField
      type="number"
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation, valueAsNumber: true })}
      invalid={errors[name]}
    />
    {!hideErrorMessage && <ErrorMessage message={errors[name]?.message} />}
  </>
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
  hideErrorMessage,
}) => (
  <>
    <TextField
      type="number"
      step=".01"
      {...{ disabled, placeholder, icon, defaultValue }}
      {...register(name, { ...validation, valueAsNumber: true })}
      invalid={errors[name]}
    />
    {!hideErrorMessage && <ErrorMessage message={errors[name]?.message} />}
  </>
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
