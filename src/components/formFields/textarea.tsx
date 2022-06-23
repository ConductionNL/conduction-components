import * as React from "react";
import { IReactHookFormProps } from "./types";
import { TextArea } from "@gemeente-denhaag/textarea";

export interface ITextAreaProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const Textarea: React.FC<ITextAreaProps & IReactHookFormProps> = ({ name, validation, register, errors }) => (
  <TextArea {...register(name, { ...validation })} invalid={errors[name]} />
);
