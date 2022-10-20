// 
// File: Order.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: The one and only place where the customer order is calculated.
//

import { getPriceForDrink } from './App.Config'

export const buildOrder = (drinks) => {
    let total = 0
    let arrayOfDrinks = Object.keys(drinks)

    const arrayOfDrinkObjects = arrayOfDrinks.map(i => {
        return {
            type: i,
            qty: drinks[i]
        }
    })

    const allItems = arrayOfDrinkObjects.map(i => {
        total += i.qty * getPriceForDrink(i.type)
        return {
            item: i.type,
            qty: i.qty,
            price: getPriceForDrink(i.type),
            subTotal: i.qty * getPriceForDrink(i.type)
        }
    })

    const order = allItems.filter(i => i.qty > 0)

    return {
        order,
        total
    }
}
