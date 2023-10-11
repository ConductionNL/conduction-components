import { IReactHookFormProps } from "./types";
import { ErrorMessage } from "./errorMessage/ErrorMessage";
import { Textarea as UtrechtTextarea } from "@utrecht/component-library-react/dist/css-module";

export interface ITextAreaProps {
  name: string;
  ariaLabel?: string;
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
}: ITextAreaProps & IReactHookFormProps): JSX.Element => (
  <>
    <UtrechtTextarea
      {...register(name, { ...validation })}
      {...{ disabled, defaultValue }}
      invalid={errors[name]}
      aria-label={ariaLabel}
    />
    {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name].message} />}
  </>
);
