import styles from './App.module.css'
import { Header } from "./components/Header.tsx";
import { Input } from "./components/Input.tsx";
import { Button } from "./components/Button.tsx";
import { Header as HeaderList } from "./components/List/Header.tsx";

export function App() {
    return (
        <div>
            <Header />

            <section className={styles.content}>
                <div className={styles.taskInfoContainer}>
                    <Input/>

                    <Button content="Criar"/>
                </div>

                <div className={styles.tasksList}>
                    <HeaderList tasksCounter={0} checkedTasksCounter={0} />
                </div>
            </section>
        </div>
)
}