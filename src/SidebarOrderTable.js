import React from 'react'
import './SidebarOrderTable.scss'

export const SidebarOrderTable = ({completeOrder}) => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

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
