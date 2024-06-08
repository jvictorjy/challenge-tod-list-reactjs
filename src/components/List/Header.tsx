import styles from './Header.module.css'

interface HeaderProps {
    tasksCounter: number;
    checkedTasksCounter: number;
}

export function Header({tasksCounter, checkedTasksCounter}: HeaderProps) {
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                  {tasksCounter === 0
                      ? tasksCounter
                      : `${checkedTasksCounter} de ${tasksCounter}`}
                </span>
            </aside>
        </header>
    )
}