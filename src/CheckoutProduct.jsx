import React from 'react'
import "./checkoutproduct.css"
import { useStateProvider } from './StateProvider'
function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateProvider()
    const removefrombasket=()=>{
            dispatch({
                type:"REMOVE_FROM_BASKET",
                id:id
            })
    }
    return (
        <div className="checkoutproduct">
        <img src={image} alt=""/>
       
        <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price"> 
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
            {Array(rating).fill().map((i)=>{
                return <p>⭐</p>
            })}

          </div>

        <button onClick={removefrombasket} className="remove">Remove from Basket</button>

        </div>
            
        </div>
    )
}

export default CheckoutProduct
