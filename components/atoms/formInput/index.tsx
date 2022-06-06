import React from 'react';
import styles from './index.module.scss';

interface Props {
  type: string;
  name: string;
  placeholder: string;
  onChange: () => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ type, name, placeholder, onChange }: Props) => {
  return <input className={styles.input} type={type} placeholder={placeholder} name={name} onChange={onChange()} />;
};

export default FormInput;
