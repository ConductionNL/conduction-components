import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as styles from "./Date.module.css";
import { Control, Controller, FieldValues } from "react-hook-form";
import { IReactHookFormProps } from "../types";
import DatePicker from "react-datepicker";

interface IDateProps {
  control: Control<FieldValues, any>;
  name: string;
  showTimeSelect?: boolean;
  disabled?: boolean;
}

export const InputDate = ({
  name,
  errors,
  control,
  validation,
  disabled,
}: IDateProps & IReactHookFormProps): JSX.Element => {
  return (
    <Controller
      {...{ control, name }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <DatePicker
            calendarClassName={styles.calendar}
            className="denhaag-datepicker__input"
            onChange={(date) => onChange(date)}
            dateFormat="d-MM-yyyy HH:mm"
            selected={value}
            timeIntervals={1}
            showTimeSelect
            {...{ errors, value, disabled }}
          />
        );
      }}
    />
  );
};
