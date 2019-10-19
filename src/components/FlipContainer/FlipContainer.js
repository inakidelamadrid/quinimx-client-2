import React from 'react'
import styles from './styles.module.scss'

const FlipContainer= ({front, back}) => {
  return (
    <div className={styles.container}>
      <div className={styles.flipcard}>
        <div className={styles.flipcardInner}>
          <div className={styles.front}>
            {front}
          </div>
          <div className={styles.back}>
            {back}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipContainer
