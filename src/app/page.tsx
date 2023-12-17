'use client';
import styles from './page.module.css'
import {dummyData, Item} from '@/data/dummyData'
import Task from '@/component/Task'

export default function Home(){
  return(
      <>
        <header className={styles.header}>
          <h1>ToDo</h1>
        </header>
        <main className={styles.main}>
          <ul>
              {dummyData.map((item: Item) => (
                  <Task key={item.id} {...item}/>
              ))}
          </ul>
        </main>

      </>
  )
}