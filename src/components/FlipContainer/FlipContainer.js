import React from 'react'
import styles from './styles.module.scss'

const FlipContainer = ({ front, back }) => {
  const frontClone = React.cloneElement(front, { className: styles.front })
  const backClone = React.cloneElement(back, { className: styles.back })
  return (
    <div className={styles.container}>
      <div className={styles.flipcard}>
        <div className={styles.flipcardInner}>
          {frontClone}
          {backClone}
        </div>
      </div>
    </div>
  )
}

export default FlipContainer
