import React from 'react'
import { formatUSD } from './Util/Money'
import { capitalize } from './Util/Strings'
import './OrderTable.scss'

export const OrderTable = ({completeOrder}) => {
    return (
        <div className='OrderTable'>
            <table className='OrderTable_Table'>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Qty</td>
                        <td>Price</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    { 
                        completeOrder.map(i => {
                            return <tr key={ i.item }>
                                        <td>{ capitalize(i.item) }</td>
                                        <td>{ i.qty }</td>
                                        <td>{ formatUSD(i.price) } {' '}ea</td>
                                        <td>{ formatUSD(i.subTotal) }</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>  
        </div>
  )
}
