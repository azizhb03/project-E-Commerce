import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
export const CartItems = () => {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
        if (cartItems[e.id]>0)
        {
            return  <div>
            <div className="cartitems-format cartItems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'></button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
        </div>
    
        }return null;
       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>subtatal</p>
                    <p>${getTotalCartAmount}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>shipping fee</p>
                    <p>free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>total</h3>
                    <h3>${getTotalCartAmount}</h3>
                </div>
            </div>
            <button>proceed to checkout</button>
        </div>
        <p>if you have a promo code, enter it here</p>
        <div className="cartitems-promobox">
            <input type="text"placeholder='promo code' />
            <button>submit</button>
        </div>
       </div>
       </div>
  )
}
