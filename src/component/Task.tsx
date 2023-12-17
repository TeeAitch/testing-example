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

    const handleCheckboxCheck = () =>{
        setIstChecked(!isChecked)
    }
    return(
           <li className={styles.Task}>
               <label
                   htmlFor='checkbox'
                   className={styles.title}
                   onClick={handleCheckboxCheck}
               >{title}
               </label>
               <input
                   type='checkbox'
                   className={styles.checkbox}
                   id='checkbox'
                   checked={isChecked}
               />
               <p>{content}</p>
           </li>
    )
}