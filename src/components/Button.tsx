import styles from './Button.module.css';

import { ButtonHTMLAttributes } from 'react';
import {PlusCircle} from "@phosphor-icons/react";

export function Button({content, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={styles.container} {...props}>
            {content}
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </button>
    )
}