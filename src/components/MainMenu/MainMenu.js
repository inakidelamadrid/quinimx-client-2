import React from 'react'
import MenuCard from './MenuCard'
import styles from './mainMenu.module.scss'


const MainMenu = props => {
  return (
    <div className="MainMenu">
      <div className={styles.container}>
        <div className={styles.menuBox}>
          <MenuCard title='Punto de venta'></MenuCard>
          <MenuCard title='Inventario'></MenuCard>
          <MenuCard title='Provedores'></MenuCard>
          <MenuCard title='Mercado'></MenuCard>
        </div>
      </div>
    </div>
  )
}
export default MainMenu
