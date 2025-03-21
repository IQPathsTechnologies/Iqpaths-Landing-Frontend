

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NoteCard.module.css'

const NoteCard = ({title, link}) => {
  return (
    <a className={styles.titleContainer} href = {link} target="_blank">
        <div className={styles.title}>{title}</div>
    </a>
  )
}

export default NoteCard