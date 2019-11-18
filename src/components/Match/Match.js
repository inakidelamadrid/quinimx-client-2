import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

const Match = ({ local, visitor, result }) => {
  return (
    <div className={styles.match}>
      <div className={styles.column}>
        {local}
        <div className={styles.checkbox}>
          <div className={styles.checkboxInner}></div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={classNames(styles.checkbox, styles.bordered)}>
          <div className={styles.checkboxInner}></div>
        </div>
        <div className={classNames(styles.checkbox, styles.bordered)}></div>
      </div>
      <div className={styles.column}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxInner}></div>
        </div>
        {visitor}
      </div>
    </div>
  )
}
export default Match
