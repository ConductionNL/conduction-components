import * as React from "react";
import * as styles from "./select.module.css";
import { Control, Controller, FieldValues } from "react-hook-form";
import ReactSelect, { MenuPlacement, StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import { IReactHookFormProps } from "../types";
import clsx from "clsx";
import { ErrorMessage } from "../errorMessage/ErrorMessage";

interface ISelectProps {
  control: Control<FieldValues, any>;
  options: { label: string; value: string }[];
  name: string;
  ariaLabel: string;
  id?: string;
  defaultValue?: any;
  disabled?: boolean;
  isClearable?: boolean;
  hideErrorMessage?: boolean;
  menuPlacement?: MenuPlacement;
  placeholder?: string;
}

const selectStyles: StylesConfig = {
  menuPortal: (base) => ({ ...base, zIndex: 100 }),
  option: (base) => ({
    ...base,
    fontFamily: `var(--conduction-input-select-list-option-font-family, ${base.fontFamily})`,
    backgroundColor: `var(--conduction-input-select-list-option-background-color, ${base.backgroundColor}) `,

    "&:hover": {
      backgroundColor: `var(--conduction-input-select-list-option-hover-background-color, ${base.backgroundColor})`,
      color: `var(--conduction-input-select-list-option-hover-color, ${base.color})`,
      fontFamily: `var(--conduction-input-select-list-option-hover-font-family, var(--conduction-input-select-list-option-font-family, ${base.fontFamily}))`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily: `var(--conduction-input-select-placeholder-font-family, var(--utrecht-form-input-placeholder-font-family, ${base.fontFamily}))`,
    color: `var(--conduction-input-select-placeholder-color, var(--utrecht-form-input-placeholder-color, ${base.color}) )`,
  }),
};

const selectMultiStyles: StylesConfig = {
  menuPortal: (base) => ({ ...base, zIndex: 100 }),
  option: (base) => ({
    ...base,
    fontFamily: `var(--conduction-input-select-list-option-font-family, ${base.fontFamily})`,
    backgroundColor: `var(--conduction-input-select-list-option-background-color, ${base.backgroundColor}) `,

    "&:hover": {
      backgroundColor: `var(--conduction-input-select-list-option-hover-background-color, ${base.backgroundColor})`,
      color: `var(--conduction-input-select-list-option-hover-color, ${base.color})`,
      fontFamily: `var(--conduction-input-select-list-option-hover-font-family, var(--conduction-input-select-list-option-font-family, ${base.fontFamily}))`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily: `var(--conduction-input-select-placeholder-font-family, var(--utrecht-form-input-placeholder-font-family, ${base.fontFamily}))`,
    color: `var(--conduction-input-select-placeholder-color, var(--utrecht-form-input-placeholder-color, ${base.color}) )`,
  }),
};

export const SelectMultiple = ({
  id,
  name,
  options,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
  hideErrorMessage,
  menuPlacement,
  placeholder,
  ariaLabel,
}: ISelectProps & IReactHookFormProps): JSX.Element => {
  React.useEffect(() => {
    document.querySelectorAll('[id*="live-region"]').forEach((element: any) => {
      if (element?.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
    document.querySelectorAll('[class*="indicatorSeparator"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
    document.querySelectorAll('[class*="a11yText"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
  }, []);
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <ReactSelect
              aria-label={ariaLabel}
              inputId={id}
              value={value ?? ""}
              className={clsx(styles.select, errors[name] && styles.error)}
              isMulti
              isDisabled={disabled}
              {...{ options, onChange, errors }}
              menuPortalTarget={document.body}
              menuPlacement={menuPlacement}
              styles={selectStyles}
              placeholder={disabled ? "Disabled..." : placeholder ?? "Select one or more options..."}
            />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
          </>
        );
      }}
    />
  );
};

export const SelectCreate = ({
  id,
  name,
  options,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
  hideErrorMessage,
  menuPlacement,
  placeholder,
  ariaLabel,
}: ISelectProps & IReactHookFormProps): JSX.Element => {
  React.useEffect(() => {
    document.querySelectorAll('[id*="live-region"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
    document.querySelectorAll('[class*="indicatorSeparator"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
    document.querySelectorAll('[class*="a11yText"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
  }, []);
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <CreatableSelect
              aria-label={ariaLabel}
              inputId={id}
              value={value ?? ""}
              placeholder={disabled ? "Disabled..." : placeholder ?? "Select one or more options..."}
              className={clsx(styles.select, errors[name] && styles.error)}
              isMulti
              isDisabled={disabled}
              {...{ options, onChange, errors }}
              menuPortalTarget={document.body}
              menuPlacement={menuPlacement}
              styles={selectStyles}
            />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
          </>
        );
      }}
    />
  );
};

export const SelectSingle = ({
  id,
  name,
  options,
  errors,
  control,
  validation,
  isClearable,
  defaultValue,
  disabled,
  hideErrorMessage,
  menuPlacement,
  placeholder,
  ariaLabel,
}: ISelectProps & IReactHookFormProps): JSX.Element => {
  React.useEffect(() => {
    document.querySelectorAll('[id*="live-region"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
    document.querySelectorAll('[class*="indicatorSeparator"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
    document.querySelectorAll('[class*="a11yText"]').forEach((element: any) => {
      if (element.role !== "presentation") {
        element.setAttribute("role", "presentation");
      }
    });
  }, []);
  return (
    <Controller
      {...{ control, name, defaultValue }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <ReactSelect
              aria-label={ariaLabel}
              inputId={id}
              value={value ?? ""}
              className={clsx(styles.select, errors[name] && styles.error)}
              isDisabled={disabled}
              {...{ options, onChange, errors, isClearable }}
              menuPortalTarget={document.body}
              menuPlacement={menuPlacement}
              styles={selectStyles}
              placeholder={disabled ? "Disabled..." : placeholder ?? "Select one or more options..."}
            />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
          </>
        );
      }}
    />
  );
};
