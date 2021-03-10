import React from 'react'
import "./checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import { useStateProvider } from './StateProvider'
import Subtotal from './Subtotal'

function CheckOut() {
    const [{basket},dispatch]=useStateProvider()
    return (
        <div className="checkout">
           <div className="checkout_left">
           <img 
            className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Prime/XCM_Manual_1500x350_1210306_1210306_IN_Prime_Deals_7a028a6d_aba0_4767_9510_e5e013c3a81f_jpg_LOWER_QL85_.jpg" alt=""/>
        {basket?.length===0?(
            <div>
                <h1 className="checkout_title">Your Shopping Basket Is Empty</h1>
                <p>you have no item in your basket , to add item in your basket click on "add to basket" button </p>
            </div>
        ):( <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            
            {basket?.map((item)=>{
              return  <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            })}
        </div>
        )}
           </div>
         { basket?.length>0 && (
            <div className="checkout_right">
                <Subtotal/>
            </div>
         )}
        </div>
    )
}

export default CheckOut
