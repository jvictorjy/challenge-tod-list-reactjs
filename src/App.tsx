import styles from './App.module.css'
import { Header } from "./components/Header.tsx";
import { Input } from "./components/Input.tsx";
import { Button } from "./components/Button.tsx";
import { Header as HeaderList } from "./components/List/Header.tsx";
import { Item } from "./components/List/Item.tsx";
import { useState } from "react";
import { Empty } from "@phosphor-icons/react";

export interface ITask {
    id: number
    text: string
    isChecked: boolean
}

export function App() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [inputValue, setInputValue] = useState('')

    const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
        if (currentTask.isChecked) {
            return prevValue + 1
        }

        return prevValue
    }, 0)

    function handleAddTask() {
        if (!inputValue) {
            return
        }

        const newTask: ITask = {
            id: new Date().getTime(),
            text: inputValue,
            isChecked: false,
        }

        setTasks((state) => [...state, newTask])
        setInputValue('')
    }

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter((task) => task.id !== id)

        if (!confirm('Deseja mesmo apagar essa tarefa?')) {
            return
        }

        setTasks(filteredTasks)
    }

    function handleToggleTask({ id, value }: { id: number; value: boolean }) {
        console.log(id);
        console.log(value);
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: value }
            }

            return { ...task }
        })

        setTasks(updatedTasks)
    }

    return (
        <div>
            <Header />

            <section className={styles.content}>
                <div className={styles.taskInfoContainer}>
                    <Input
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />

                    <Button content="Criar" onClick={handleAddTask}/>
                </div>

                <div className={styles.tasksList}>
                    <HeaderList
                        tasksCounter={tasks.length}
                        checkedTasksCounter={checkedTasksCounter}
                    />

                    {tasks.length > 0 ? (
                        <div>
                            {tasks.map((task) => (
                                <Item
                                    key={task.id}
                                    data={task}
                                    removeTask={handleRemoveTask}
                                    toggleTaskStatus={handleToggleTask}
                                />
                            ))}
                        </div>
                    ) : (
                        <Empty />
                    )}
                </div>
            </section>
        </div>
)
}