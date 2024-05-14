import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import NotFound from '../../../Images/Images_student/NotFound.png'

const Transactions = ({setOverview}) => {
    return (
        <main className={styles.transMain}>
            <div className={styles.transContent}>
                <Image src={NotFound} alt='alt'/>
                <p className="">Oops! sorry we can{"'"}t find anything</p>
                <button onClick={()=>setOverview()} className={styles.btn}>Go back to home</button>
            </div>
        </main>
    )
}

export default Transactions
