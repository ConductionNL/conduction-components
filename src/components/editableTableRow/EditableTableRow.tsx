import { TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import * as styles from "./EditableTableRow.module.css";
import * as React from "react";
import { Link } from "@gemeente-denhaag/components-react";
import { CheckedIcon, CloseIcon, EditIcon } from "@gemeente-denhaag/icons";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { InputEmail, InputText } from "../formFields";

interface InputTypes {
  inputType: "text" | "email";
}

interface EditableTableRowProps {
  thead: string;
  value: string;
  saveLabel: string;
  cancelLabel: string;
  editLabel: string;
  handleSave: (value: any) => void;
}

export const EditableTableRow = ({
  thead,
  value,
  inputType,
  editLabel,
  cancelLabel,
  saveLabel,
  handleSave,
}: EditableTableRowProps & InputTypes): JSX.Element => {
  const [editing, setEditing] = React.useState<boolean>(false);

  return (
    <TableRow>
      <TableHeader className={styles.th}>{thead}</TableHeader>

      {editing && <EditingTableRow {...{ value, inputType, handleSave, setEditing, saveLabel, cancelLabel }} />}
      {!editing && <RegularTableRow {...{ value, setEditing, editLabel }} />}
    </TableRow>
  );
};

/**
 * Specific rows based on editing (Regular: not editing & Editing: editing)
 */

interface RegularTableRowProps {
  value: string;
  editLabel: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegularTableRow = ({ value, editLabel, setEditing }: RegularTableRowProps): JSX.Element => {
  return (
    <>
      <TableCell>{value}</TableCell>

      <TableCell>
        <div className={styles.editButton} onClick={() => setEditing(true)}>
          <Link icon={<EditIcon />} iconAlign="start">
            {editLabel}
          </Link>
        </div>
      </TableCell>
    </>
  );
};

interface EditingTableRowProps {
  value: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  saveLabel: string;
  cancelLabel: string;
  handleSave: (value: any) => void;
}

const EditingTableRow = ({
  value,
  setEditing,
  handleSave,
  inputType,
  saveLabel,
  cancelLabel,
}: EditingTableRowProps & InputTypes): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any): void => {
    handleSave(data.value);
    setEditing(false);
  };

  return (
    <>
      <TableCell>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField {...{ inputType, value, register, errors }} />

          <div className={styles.editButtonsContainer}>
            <button type="submit" className={styles.submit}>
              <Link icon={<CheckedIcon />} iconAlign="start">
                {saveLabel}
              </Link>
            </button>

            <div onClick={() => setEditing(false)}>
              <Link icon={<CloseIcon />} iconAlign="start" className={styles.cancel}>
                {cancelLabel}
              </Link>
            </div>
          </div>
        </form>
      </TableCell>

      <TableCell />
    </>
  );
};

interface FormFieldProps {
  value: string;
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
}

const FormField = ({ inputType, value, register, errors }: FormFieldProps & InputTypes): JSX.Element => {
  switch (inputType) {
    case "email":
      return <InputEmail defaultValue={value} {...{ register, errors }} name="value" validation={{ required: true }} />;
    case "text":
      return <InputText defaultValue={value} {...{ register, errors }} name="value" validation={{ required: true }} />;
  }
};
