// 
// File: Order.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: The one and only place where the customer's order is determined.
//

import * as AppConfig from './App.Config'

const getPriceForDrink = (type) => {
    return AppConfig.prices.filter(p=>p.type === type)[0].price
}

export const buildOrder = (drinks) => {
    let total = 0
    let d = Object.keys(drinks)
    const purchasedItems = d.map(i => {
        return {
            type: i,
            qty: drinks[i]
        }
    })

    let order = purchasedItems.map(i => {
        total += i.qty * getPriceForDrink(i.type)
        return {
            item: i.type,
            qty: i.qty,
            price: getPriceForDrink(i.type),
            subTotal: i.qty * getPriceForDrink(i.type)
        }
    })
    order = order.filter(i=> i.qty > 0)
    return {
        order,
        total
    }
}