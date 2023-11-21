import { IReactHookFormProps } from "./types";
import { ErrorMessage } from "./errorMessage/ErrorMessage";
import { Textarea as UtrechtTextarea } from "@utrecht/component-library-react/dist/css-module";
import _ from "lodash";
import { Control, Controller, FieldValues } from "react-hook-form";

export interface ITextAreaProps {
  name: string;
  ariaLabel: string;
  control: Control<FieldValues, any>;
  disabled?: boolean;
  defaultValue?: string;
  hideErrorMessage?: boolean;
}

export const Textarea = ({
  name,
  validation,
  register,
  errors,
  disabled,
  defaultValue,
  hideErrorMessage,
  ariaLabel,
  control,
}: ITextAreaProps & IReactHookFormProps): JSX.Element => (
  <>
    <Controller
      {...{ control, name, errors }}
      rules={validation}
      render={({ fieldState: { error } }) => {
        return (
          <>
            <UtrechtTextarea
              {...register(name, { ...validation })}
              {...{ disabled, defaultValue }}
              invalid={!_.isEmpty(error)}
              aria-label={ariaLabel}
            />
            {error && !hideErrorMessage && <ErrorMessage message={error.message ?? "Error loading error message"} />}
          </>
        );
      }}
    />
  </>
);
