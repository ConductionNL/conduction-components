import * as React from "react";
import * as styles from "./CreateKeyValue.module.css";
import clsx from "clsx";
import { Control, Controller, FieldValues } from "react-hook-form";
import { IReactHookFormProps } from "../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHeaderCell,
  TableHeader,
  TableRow,
  Textbox,
  Button,
} from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage } from "../errorMessage/ErrorMessage";

/**
 * Export KeyValue input component (wrapped in FormFieldGroup)
 */
interface CreateKeyValueProps {
  name: string;
  control: Control<FieldValues, any>;
  defaultValue?: IKeyValue[];
  disabled?: boolean;
  copyValue?: {
    canCopy: boolean;
    onCopied?: () => any;
  };
  hideErrorMessage?: boolean;
}

export interface IKeyValue {
  key: string;
  value: string;
}

export const CreateKeyValue = ({
  name,
  errors,
  control,
  validation,
  defaultValue,
  disabled,
  copyValue,
  hideErrorMessage,
}: CreateKeyValueProps & IReactHookFormProps): JSX.Element => {
  return (
    <Controller
      {...{ control, name, errors }}
      rules={validation}
      render={({ field: { onChange } }) => {
        return (
          <>
            <KeyValueComponent handleChange={onChange} {...{ defaultValue, errors, disabled, copyValue }} />
            {errors[name] && !hideErrorMessage && <ErrorMessage message={errors[name]?.message as string} />}
          </>
        );
      }}
    />
  );
};

/**
 * Internal KeyValueComponent (contains all required logic)
 */
interface CreateKeyValueComponentProps {
  handleChange: (...event: any[]) => void;
  defaultValue?: IKeyValue[];
  disabled?: boolean;
  copyValue?: {
    canCopy: boolean;
    onCopied?: () => any;
  };
}

const KeyValueComponent = ({
  defaultValue,
  handleChange,
  disabled,
  copyValue,
}: CreateKeyValueComponentProps): JSX.Element => {
  const [currentKey, setCurrentKey] = React.useState<string>("");
  const [currentValue, setCurrentValue] = React.useState<string>("");
  const [keyValues, setKeyValues] = React.useState<IKeyValue[]>(defaultValue ?? []);
  const [currentCopyIdx, setCurrentCopyIdx] = React.useState<number>();

  const currentKeyRef = React.useRef(null);
  const currentValueRef = React.useRef(null);

  const handleCreate = (): void => {
    const keyValue: IKeyValue = { key: currentKey, value: currentValue };

    setCurrentKey("");
    setCurrentValue("");

    setKeyValues([...keyValues, keyValue]);
  };

  const handleCopyToClipboard = (value: string, id: number) => {
    navigator.clipboard.writeText(value);
    setCurrentCopyIdx(id);
    copyValue?.onCopied && copyValue.onCopied();
  };

  React.useEffect(() => {
    defaultValue && setKeyValues(defaultValue);
  }, [defaultValue]);

  React.useEffect(() => {
    handleChange(keyValues);
  }, [keyValues]);

  return (
    <div className={styles.keyValue}>
      {keyValues && (
        <Table className={styles.table}>
          <TableHeader className={styles.tableHeader}>
            <TableRow>
              <TableHeaderCell>Key</TableHeaderCell>
              <TableHeaderCell>Value</TableHeaderCell>
              <TableHeaderCell />
            </TableRow>
          </TableHeader>
          <TableBody>
            {keyValues.map((keyValue, idx) => (
              <TableRow key={`${keyValue.key}${keyValue.value}${idx}`}>
                <TableCell>{keyValue.key}</TableCell>
                <TableCell>{keyValue.value}</TableCell>
                <TableCell>
                  <div className={styles.buttonsContainer}>
                    {copyValue && (
                      <Button
                        {...{ disabled }}
                        onClick={() => handleCopyToClipboard(keyValue.value, idx)}
                        appearance={currentCopyIdx === idx ? "secondary-action-button" : "primary-action-button"}
                      >
                        <FontAwesomeIcon icon={faCopy} />
                      </Button>
                    )}
                    <Button
                      {...{ disabled }}
                      onClick={() => setKeyValues(keyValues.filter((_keyValue) => _keyValue !== keyValue))}
                      className={clsx(styles.deleteButton)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <div className={styles.form}>
        <Textbox
          type="text"
          placeholder="Key"
          value={currentKey}
          ref={currentKeyRef}
          onChange={(e) => setCurrentKey(e.target.value)}
          {...{ disabled }}
        />

        <Textbox
          type="text"
          placeholder="Value"
          value={currentValue}
          ref={currentValueRef}
          onChange={(e) => setCurrentValue(e.target.value)}
          {...{ disabled }}
        />

        <Button onClick={handleCreate} disabled={!currentKey || !currentValue || disabled}>
          Add
        </Button>
      </div>
    </div>
  );
};
