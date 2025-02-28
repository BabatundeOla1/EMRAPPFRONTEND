import React from 'react'
import styles from "./dashBoard.module.css"

function DashBoard(){

  return(
    <div className= {styles.dashBoardPage} >
      <nav className={styles.navBar}>
        <p>Hospital Management System</p>
      </nav>
    </div>
  )  
}

export default DashBoard