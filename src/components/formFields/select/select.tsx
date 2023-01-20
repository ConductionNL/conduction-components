import * as React from "react";
import * as styles from "./select.module.css";
import { Control, Controller, FieldValues } from "react-hook-form";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";
import { IReactHookFormProps } from "../types";
import clsx from "clsx";

interface ISelectProps {
  control: Control<FieldValues, any>;
  options: { label: string; value: string }[];
  name: string;
  defaultValue?: any;
  disabled?: boolean;
  isClearable?: boolean;
}

export const SelectMultiple: React.FC<ISelectProps & IReactHookFormProps> = ({
  name,
  options,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
}) => {
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <ReactSelect
            value={value ?? ""}
            className={clsx(styles.select, errors[name] && styles.error)}
            isMulti
            isDisabled={disabled}
            {...{ options, onChange, errors }}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
          />
        );
      }}
    />
  );
};

export const SelectCreate: React.FC<ISelectProps & IReactHookFormProps> = ({
  name,
  options,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
}) => {
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <CreatableSelect
            value={value ?? ""}
            placeholder="Select existing or create new entries"
            className={clsx(styles.select, errors[name] && styles.error)}
            isMulti
            isDisabled={disabled}
            {...{ options, onChange, errors }}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
          />
        );
      }}
    />
  );
};

export const SelectSingle: React.FC<ISelectProps & IReactHookFormProps> = ({
  name,
  options,
  errors,
  control,
  validation,
  isClearable,
  defaultValue,
  disabled,
}) => {
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <ReactSelect
            value={value ?? ""}
            className={clsx(styles.select, errors[name] && styles.error)}
            isDisabled={disabled}
            {...{ options, onChange, errors, isClearable }}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
          />
        );
      }}
    />
  );
};
