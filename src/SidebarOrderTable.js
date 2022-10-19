import React from 'react'
import './SidebarOrderTable.scss'
import * as AppConfig from './Util/App.Config'

export const SidebarOrderTable = ({purchasedItems}) => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    const getPriceForDrink = (type) => {
        return AppConfig.prices.filter(p=>p.type === type)[0].price
    }

    let completeOrder = purchasedItems.filter(i => i.qty > 0)
    completeOrder = completeOrder.map(i => {
        return {
            item: i.type,
            qty: i.qty,
            price: getPriceForDrink(i.type),
            subTotal: i.qty * getPriceForDrink(i.type)
        }
    })
    
    return (
        <div className='SidebarOrderTable'>
            <table className='SidebarContent_Table'>
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
                                        <td>{ i.item }</td>
                                        <td>{ i.qty }</td>
                                        <td>{ formatter.format(i.price) } {' '}ea</td>
                                        <td>{ formatter.format(i.subTotal) }</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>  
        </div>
  )
}
