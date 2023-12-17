'use client';
import styles from '@/app/page.module.css'
import {useState} from "react";
type TaskProps = {
    id: number;
    title: string;
    content: string;
}
export default function Task({ title, content}:TaskProps){
    const [isChecked, setIstChecked] = useState(false);
    const taskStyle = isChecked ? styles.titleCompleted : styles.title
    const contentStyle = isChecked ? styles.contentCompleted : ''

    const handleCheckboxCheck = () =>{
        setIstChecked(!isChecked)
    }
    return(
        <main className={styles.mainTask} onClick={handleCheckboxCheck}>
            <li className={styles.Task}>
                <label
                    htmlFor='checkbox'
                    className={taskStyle}
                    onClick={handleCheckboxCheck}
                >{title}
                </label>
                <input
                    type='checkbox'
                    className={styles.checkbox}
                    id='checkbox'
                    checked={isChecked}
                    readOnly={true}
                />
                <p className={contentStyle}>{content}</p>
            </li>
        </main>

    )
}