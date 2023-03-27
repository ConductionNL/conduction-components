import * as styles from "./select.module.css";
import { Control, Controller, FieldValues } from "react-hook-form";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";
import { IReactHookFormProps } from "../types";
import clsx from "clsx";
import { ErrorMessage } from "../errorMessage/ErrorMessage";

interface ISelectProps {
  control: Control<FieldValues, any>;
  options: { label: string; value: string }[];
  name: string;
  defaultValue?: any;
  disabled?: boolean;
  isClearable?: boolean;
  hideErrorMessage?: boolean;
}

export const SelectMultiple = ({
  name,
  options,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
  hideErrorMessage,
}: ISelectProps & IReactHookFormProps): JSX.Element => {
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <ReactSelect
              value={value ?? ""}
              className={clsx(styles.select, errors[name] && styles.error)}
              isMulti
              isDisabled={disabled}
              {...{ options, onChange, errors }}
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
              placeholder={disabled ? "Disabled..." : "Select one or more options..."}
            />
            {!hideErrorMessage && errors && <ErrorMessage message={errors[name]?.message} />}
          </>
        );
      }}
    />
  );
};

export const SelectCreate = ({
  name,
  options,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
  hideErrorMessage,
}: ISelectProps & IReactHookFormProps): JSX.Element => {
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <CreatableSelect
              value={value ?? ""}
              placeholder={disabled ? "Disabled..." : "Select or create one or multiple options..."}
              className={clsx(styles.select, errors[name] && styles.error)}
              isMulti
              isDisabled={disabled}
              {...{ options, onChange, errors }}
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
            />
            {!hideErrorMessage && errors && <ErrorMessage message={errors[name]?.message} />}
          </>
        );
      }}
    />
  );
};

export const SelectSingle = ({
  name,
  options,
  errors,
  control,
  validation,
  isClearable,
  defaultValue,
  disabled,
  hideErrorMessage,
}: ISelectProps & IReactHookFormProps): JSX.Element => {
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <ReactSelect
              value={value ?? ""}
              className={clsx(styles.select, errors[name] && styles.error)}
              isDisabled={disabled}
              {...{ options, onChange, errors, isClearable }}
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
              placeholder={disabled ? "Disabled..." : "Select an option..."}
            />
            {!hideErrorMessage && errors && <ErrorMessage message={errors[name]?.message} />}
          </>
        );
      }}
    />
  );
};
