import React from 'react'
import { formatUSD } from './Util/Money'
import { OrderTable } from './OrderTable'
import './OrderSection.scss'

export const OrderSection = ({total, order}) => {
  return (
    <div className='OrderSection'>
        <div className='OrderSection_Title'>
            Your Order
        </div>
         {
            total > 0 && 
            <>
                <strong>Drinks</strong>
                <OrderTable completeOrder={order}/>
            </>
        }
        {
            total === 0 && 
            <> 
                Your cart is empty. 
            </>
        }
        <hr />
        <div className='OrderSection_Total'>
            Total:<span>{ formatUSD(total)}</span>
        </div>
    </div>
  )
}
