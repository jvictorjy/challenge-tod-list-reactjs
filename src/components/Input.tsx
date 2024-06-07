import styles from './Input.module.css';
import { InputHTMLAttributes } from 'react';

export function Input({...props}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={styles.container}
            placeholder="Adicionar uma nova tarefa"
            {...props}
        />
    )
}