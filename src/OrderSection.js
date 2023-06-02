import React from 'react'
import { formatUSD } from './Util/Money'
import { OrderTable } from './OrderTable'
import './OrderSection.scss'

export const OrderSection = ({drinksTotal, drinksOrder, foodsTotal, foodsOrder}) => {
  return (
    <div className='OrderSection'>
        <div className='OrderSection_Title'>
            Your Order
        </div>
        {
            (drinksTotal > 0 || foodsTotal > 0) &&(
            <>
                <strong>Drinks</strong>
                <OrderTable completeOrder={drinksOrder}/>

                <strong>Foods</strong>
                <OrderTable completeOrder={foodsOrder}/>
            </>
        )}
        {
            drinksTotal === 0 && foodsTotal === 0 &&
            <> 
                Your cart is empty. 
            </>
        }
        <hr />
        <div className='OrderSection_Total'>
            Total:<span>{ formatUSD(drinksTotal + foodsTotal)}</span>
        </div>
    </div>
  )
}
