import * as React from "react";
import { TextArea } from "@gemeente-denhaag/textarea";
import { IReactHookFormProps } from "./types";

export interface ITextAreaProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const Textarea = ({
  name,
  validation,
  register,
  errors,
  disabled,
  defaultValue,
}: ITextAreaProps & IReactHookFormProps): JSX.Element => (
  <TextArea {...register(name, { ...validation })} {...{ disabled, defaultValue }} invalid={errors[name]} />
);
