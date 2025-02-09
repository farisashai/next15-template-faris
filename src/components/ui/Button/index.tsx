import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './style.module.scss';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
