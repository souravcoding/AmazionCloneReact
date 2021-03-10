import React from 'react'
import './product.css'
import { useStateProvider } from './StateProvider'
function Product({id,title,price,rating,image}) {
  const [{basket},dispatch]=useStateProvider()

  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image
      }
    })
  }
    return (
        <div className="product">
        <div className="product_info">
        <p>{title}</p>
         <p className="product_price">
             <small>$</small>
             <strong>{price}</strong>
        </p>    
          <div className="product_rating">
            {Array(rating).fill().map((i)=>{
                return <p>⭐</p>
            })}

          </div> 
        </div>  
          <img src={image} alt=""/>
         <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
