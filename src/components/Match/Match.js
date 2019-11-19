//@format
import React, { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import forEach from 'lodash/forEach'
import clone from 'lodash/clone'

const CheckBox = React.memo(({ name, selected = false, handleClick }) => {
  return (
    <div
      className={classNames(styles.checkboxInner, styles.leftRight)}
      onClick={() => handleClick(name)}
    >
      {selected ? (
        <FontAwesomeIcon className={styles.icon} icon={faCheck} />
      ) : (
        ''
      )}
    </div>
  )
})

const Match = ({ local, visitor, result }) => {
  const handleClick = selected => {
    const cloneCheckboxes = clone(checkboxes)

    forEach(cloneCheckboxes, (value, key) => {
      if (selected === value.name) {
        value.selected = true
        return
      }
      value.selected = false
    })
    setCheckboxes(cloneCheckboxes)
  }

  const [checkboxes, setCheckboxes] = useState({
    local: {
      name: 'LOCAL',
      handleClick,
      selected: false,
    },
    tie: {
      name: 'TIE',
      selected: false,
      handleClick,
    },
    visitor: {
      name: 'VISITOR',
      handleClick,
      selected: true,
    },
  })

  return (
    <div className={styles.match}>
      <div className={styles.column}>
        {local}
        <div className={styles.checkbox}>
          <CheckBox {...checkboxes.local} />
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.checkbox}>
          <CheckBox {...checkboxes.tie} />
        </div>
        <div className={styles.checkbox}></div>
      </div>
      <div className={styles.column}>
        <div className={styles.checkbox}>
          <CheckBox {...checkboxes.visitor} />
        </div>
        {visitor}
      </div>
    </div>
  )
}
export default Match
