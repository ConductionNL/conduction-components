import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";

interface IRadioProps {
  label: string;
  name: string;
  value: string;
}

export const InputRadio = ({
  name,
  validation,
  register,
  label,
  value,
}: IRadioProps & IReactHookFormProps): JSX.Element => (
  <FormControlLabel
    input={<input type="radio" {...{ value }} {...register(name, { ...validation })} />}
    {...{ label }}
  />
);
