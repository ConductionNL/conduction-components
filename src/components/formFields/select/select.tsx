import * as React from "react";
import * as styles from "./select.module.css";
import clsx from "clsx";
import CreatableSelect from "react-select/creatable";
import ReactSelect, { MenuPlacement, StylesConfig, GroupBase } from "react-select";
import { Control, Controller, FieldValues } from "react-hook-form";
import { IReactHookFormProps } from "../types";
import { ErrorMessage } from "../errorMessage/ErrorMessage";

export type TSelectOption = { label: string; value: string };
export type TGroupedSelectOption = { label: string; options: TSelectOption[] };

interface ISelectProps {
  control: Control<FieldValues, any>;
  options: TSelectOption[] | TGroupedSelectOption[];
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
  option: (base, state) => ({
    ...base,
    fontFamily: `var(--conduction-input-select-list-option-font-family, ${base.fontFamily})`,
    backgroundColor: [
      state.isFocused
        ? `var(--conduction-input-select-list-option-focus-background-color, ${base.backgroundColor})`
        : state.isSelected
        ? `var(--conduction-input-select-list-option-selected-background-color, ${base.backgroundColor})`
        : `var(--conduction-input-select-list-option-background-color, ${base.backgroundColor})`,
    ],

    color: [
      state.isFocused
        ? `var(--conduction-input-select-list-option-focus-color, ${base.color})`
        : state.isSelected
        ? `var(--conduction-input-select-list-option-selected-color, ${base.color})`
        : `var(--conduction-input-select-list-option-color, ${base.color})`,
    ],

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

const setAttributes = (): void => {
  const setRoleToPresentation = (selector: string, role: string) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (element.getAttribute("role") !== "presentation") element.setAttribute("role", role);
      element.removeAttribute("aria-relevant");
      element.removeAttribute("aria-atomic");
      element.removeAttribute("aria-live");
    });
  };

  setRoleToPresentation('[id*="live-region"]', "presentation");
  setRoleToPresentation('[class*="indicatorSeparator"]', "separator");
  setRoleToPresentation('[class*="a11yText"]', "presentation");
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
    setAttributes();
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
              formatGroupLabel={(group) => <GroupLabel {...{ group }} />}
            />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name]?.message as string} />}
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
    setAttributes();
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
              formatGroupLabel={(group) => <GroupLabel {...{ group }} />}
            />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name]?.message as string} />}
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
    setAttributes();
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
              formatGroupLabel={(group) => <GroupLabel {...{ group }} />}
            />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name]?.message as string} />}
          </>
        );
      }}
    />
  );
};

const GroupLabel: React.FC<{ group: GroupBase<unknown> }> = ({ group }) => {
  if (!group.label) return <></>;

  return <span className={styles.groupLabel}>{group.label}</span>;
};
