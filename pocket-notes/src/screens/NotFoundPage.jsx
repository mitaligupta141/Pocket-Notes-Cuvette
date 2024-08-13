import React from 'react'
import styles from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
   <h2 className={styles.sub_text}>Error 404 ! &#128546;</h2>
   <p >Oops Looks like you this page does not find !!  </p>
   <Link className={styles.link} to='/'>GO TO HOMEPAGE</Link>
  </div>
  )
}
