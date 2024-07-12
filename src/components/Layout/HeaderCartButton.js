import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
// import CartLogo from '../../assets/cart.png'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        {/* <span className={classes.icon}>{CartLogo}</span> */}
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>


    </button>
  )
}

export default HeaderCartButton