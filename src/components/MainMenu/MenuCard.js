import React from 'react'
import styles from './menuCard.module.scss'

const MenuCard = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardBody}>{children}</div>
      <div className={styles.cardBottom}>
        <div className={styles.cardActions}>
          <a href="#">Cancel</a>
          <button type="button">Invite</button>
        </div>
      </div>
    </div>
  )
}
export default MenuCard
