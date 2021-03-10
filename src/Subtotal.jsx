import React from 'react'
import { useStateProvider } from './StateProvider'

import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
function Subtotal() {
    const [{basket},dispatch]=useStateProvider()
    return (
        <div className="subtotal">
           

            <CurrencyFormat 
            renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                    </p>
                    <small className='gift'>
                    <input type="checkbox"/>this order contains a gift

                    </small>
                    </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} displayType={'text'}
             thousandSeparator={true} prefix={'$'}
            />
             <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
