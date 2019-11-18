import React from 'react'
import styles from './styles.module.scss'

const Team = ({ name, image }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={name} />
      {name}
    </div>
  )
}
export default React.memo(Team)
