import * as styles from "./Checkbox.module.css";
import { IReactHookFormProps } from "./../types";

export interface ICheckboxProps {
  label: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export const InputCheckbox = ({
  name,
  validation,
  register,
  label,
  defaultChecked,
  disabled,
}: ICheckboxProps & IReactHookFormProps): JSX.Element => (
  <div className={styles.container}>
    <input
      type="checkbox"
      id={`checkbox${name}`}
      {...{ defaultChecked, disabled }}
      {...register(name, { ...validation })}
    />
    <label htmlFor={`checkbox${name}`}>{label}</label>
  </div>
);
