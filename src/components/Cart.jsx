import React from 'react'
import CartIcon from '../assets/cart.png'
import '../App.css'

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const cartItemCount = cartItems.length;
  
    return (
      <div>
        <div className="cart">
        <div className='navigation'>
        <p>Home</p>
        <p className='about'>About</p>
        <p className='shop'>Shop</p>
        </div>
        <button className="cart-btn" onClick={() => console.log('Show Cart')}>
        <img src={CartIcon} /> Cart <div className='count'>{cartItemCount}</div>
        </button>
      </div>
      </div>
    );
  };

  export default Cart
