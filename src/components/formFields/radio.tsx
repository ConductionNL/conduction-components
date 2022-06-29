import { FormControlLabel } from "@gemeente-denhaag/components-react";
import { IReactHookFormProps } from "./types";

interface IRadioProps {
  label: string;
  name: string;
  value: string;
}

export const InputRadio: React.FC<IRadioProps & IReactHookFormProps> = ({
  name,
  validation,
  register,
  label,
  value,
}) => (
  <FormControlLabel
    input={<input type="radio" {...{ value }} {...register(name, { ...validation })} />}
    {...{ label }}
  />
);
