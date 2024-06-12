import styles from './Empty.module.css';

import img from '../../assets/clipboard.svg'

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={img} alt="ícone"/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>

        </div>
    )
}