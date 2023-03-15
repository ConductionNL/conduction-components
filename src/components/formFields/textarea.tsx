import * as React from "react";
import { TextArea } from "@gemeente-denhaag/textarea";
import { IReactHookFormProps } from "./types";

export interface ITextAreaProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const Textarea = ({ name, validation, register, errors }: ITextAreaProps & IReactHookFormProps) => (
  <TextArea {...register(name, { ...validation })} invalid={errors[name]} />
);
