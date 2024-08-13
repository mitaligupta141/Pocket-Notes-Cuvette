import React from 'react'
import styles from './GroupName.module.css'
import {color} from '../data/color.js'

function ClassName({item}) {
  const activecolor=color[item.color-1]
  const str = item.className.trim();; 
  const words = str.split(" ");
  const logo = words.length > 1 ? words[0][0] + words[1][0] : words[0][0];

 
  return (
    <div className={styles.conatiner}>
      <div className={styles.logo} style={{backgroundColor:activecolor}}>
        <p>{logo}</p>
      </div>
      <div className={styles.indiviual_class_name}>{str}</div>
    </div>
  )
}

export default ClassName