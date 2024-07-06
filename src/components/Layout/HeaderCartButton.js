import React from 'react'
import classes from './HeaderCartButton.module.css'
// import CartLogo from '../../assets/cart.png'

function HeaderCartButton() {
  return (
    <button className={classes.button}>
        {/* <span className={classes.icon}>{CartLogo}</span> */}
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>


    </button>
  )
}

export default HeaderCartButton