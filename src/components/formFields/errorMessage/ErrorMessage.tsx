import * as styles from "./ErrorMessage.module.css";

export interface IErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: IErrorMessageProps): JSX.Element => (
  <span className={styles.message}>{message}</span>
);
