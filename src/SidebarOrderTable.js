import React from 'react'
import { formatUSD } from './Util/Money'
import './SidebarOrderTable.scss'

export const SidebarOrderTable = ({completeOrder}) => {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div className='SidebarOrderTable'>
            <table className='SidebarOrderTable_Table'>
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
