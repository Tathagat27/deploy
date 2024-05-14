import React from 'react'
import styles from '../../../page.module.css'
import Link from 'next/link'
import fontStyle from '../styles/font.module.scss'

const HeaderHelp = () => {
  return (
    <div className={styles.Header__Help__wrapper}>
      <div className={styles.help__section}>
        <Link className={fontStyle.having__trouble} href='/'><p >Having trouble?</p></Link>
        <Link className={fontStyle.font_Style} href='/'><p>Need Help!</p></Link>
      </div>
      
    </div>
  )
}

export default HeaderHelp