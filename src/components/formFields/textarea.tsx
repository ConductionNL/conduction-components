import { TextArea } from "@gemeente-denhaag/textarea";
import { IReactHookFormProps } from "./types";
import { ErrorMessage } from "./errorMessage/ErrorMessage";

export interface ITextAreaProps {
  name: string;
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
}: ITextAreaProps & IReactHookFormProps): JSX.Element => (
  <>
    <TextArea {...register(name, { ...validation })} {...{ disabled, defaultValue }} invalid={errors[name]} />
    {!hideErrorMessage && errors && <ErrorMessage message={errors[name]?.message} />}
  </>
);
