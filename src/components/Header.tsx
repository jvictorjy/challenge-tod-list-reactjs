import styles from './Header.module.css'

import logo from '../assets/logo-todo.svg'

export function Header() {
    return (
        <header className={styles.container}>
            <img src={logo} alt="logo da aplicação" />
        </header>
    )
}