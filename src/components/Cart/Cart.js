import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem  = cartCtx.items.length >0;

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => <li>{item.name}</li>)
}</ul>
        
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.action}>
            <button onClick={props.onClose}>Close</button>
            {hasItem &&<button>Order</button>}

        </div>

    </Modal>
  )
}

export default Cart