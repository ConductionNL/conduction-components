import * as React from "react";
import { Textbox } from "@utrecht/component-library-react/dist/css-module";
import { IReactHookFormProps } from "./types";
import { ErrorMessage } from "./errorMessage/ErrorMessage";

export interface IInputProps {
  name: string;
  ariaLabel: string;
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
  ariaLabel,
}) => {
  return (
    <>
      <Textbox
        type="password"
        {...{ disabled, placeholder }}
        {...register(name, { ...validation })}
        invalid={errors[name]}
        aria-label={ariaLabel}
      />
      {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
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
  ariaLabel,
}) => (
  <>
    <Textbox
      type="text"
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      aria-label={ariaLabel}
    />
    {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
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
  ariaLabel,
}) => (
  <>
    <Textbox
      type="email"
      required={!!validation?.required}
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      aria-label={ariaLabel}
    />
    {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
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
  ariaLabel,
}) => (
  <>
    <Textbox
      type="url"
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      aria-label={ariaLabel}
    />
    {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
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
  ariaLabel,
}) => (
  <>
    <Textbox
      type="number"
      {...{ defaultValue, disabled, placeholder, icon }}
      {...register(name, { ...validation, valueAsNumber: true })}
      invalid={errors[name]}
      aria-label={ariaLabel}
    />
    {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
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
  ariaLabel,
}) => (
  <>
    <Textbox
      type="number"
      step=".01"
      {...{ disabled, placeholder, icon, defaultValue }}
      {...register(name, { ...validation, valueAsNumber: true })}
      invalid={errors[name]}
      aria-label={ariaLabel}
    />
    {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
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
  ariaLabel,
}) => (
  <input
    className="denhaag-Textbox__input"
    type="file"
    {...{ defaultValue, disabled, accept }}
    {...register(name, { ...validation })}
    aria-label={ariaLabel}
  />
);
