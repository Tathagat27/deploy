import React from 'react'
import styles from './style/ReadMore.module.scss'

function ReadMore({text, handler }) {
  return (
    <button onClick={handler} className={styles.Read_More}>
        <span className={styles.Read_More_text}>{text}</span>
    </button>
  )
}

export default ReadMore;