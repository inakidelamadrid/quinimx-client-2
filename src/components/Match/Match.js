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

const Match = ({ matchName, local, visitor, data = null }) => {
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

  const internalData = data || {
    local: {
      name: 'LOCAL',
      selected: true,
    },
    tie: {
      name: 'TIE',
      selected: false,
    },
    visitor: {
      name: 'VISITOR',
      selected: false,
    },
  }

  forEach(internalData, obj => {
    obj.handleClick = handleClick
  })

  const [checkboxes, setCheckboxes] = useState(internalData)

  return (
    <div className={styles.match}>
      <div className={styles.matchTitle}>{matchName}</div>
      <div className={styles.matchBody}>
        <div className={styles.column}>
          <div>{local}</div>
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
          <div className={classNames(styles.checkbox, styles.visitor)}>
            <CheckBox {...checkboxes.visitor} />
          </div>
          <div className={styles.visitorLogo}>{visitor}</div>
        </div>
      </div>
    </div>
  )
}
export default Match
