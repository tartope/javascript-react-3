import React from 'react'
import { Footer } from '../Footer'
import { formatUSD } from '../Util/Money'
import { OrderTable } from '../OrderTable'
import { calcTotalForAllOrders } from '../Util/Order'
import * as localStorageProxy from '../Util/LocalStorageProxy'
import './OrderHistoryPage.scss'

export const OrderHistoryPage = () => {
    const orders = localStorageProxy.getOrders()
    const total = calcTotalForAllOrders(orders)
    
    return (
        <div className='OrderHistoryPage'>
            <div className='OrderHistoryPage_Header'>
                Order History
            </div>
            <div className='OrderHistoryPage_Content'>
                Grand Total: {formatUSD(total)} <br />
                Total Number of Orders: {orders && orders.length}
            </div>
            <div className='OrderHistoryPage_Content'>
            {   
                orders && 
                orders.map(i => {
                    return <div key={i.id}>
                        Order: {i.id}  <br /> 
                        Total: {formatUSD(i.total)}<br/>
                        Date:  {i.date}<br />
                        <OrderTable completeOrder={i.items}/>
                        <hr />
                    </div>
                })
            }
            </div>
            <br />
            <Footer />
        </div>
    )
}
