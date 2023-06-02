// 
// File: Order.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: The one and only place where the customer order is calculated.
//
//       NOTE: This is an academic example and should be treated as such!
//       This logic MUST be stored on the server to prevent the client from
//       altering the cost of the product.
//

import { getPriceForDrink, getPriceForFood } from './App.Config'

/**
 * @param {*} drinks 
 * @returns An array of objects that the customer has ordered.
 *  [
      { 
        item: 'tea', 
        qty: 1, 
        price: 2, 
        subTotal: 2
      }
    ] 
 */
export const buildOrder = (drinks) => {
    let drinksTotal = 0
    let arrayOfDrinks = Object.keys(drinks)

    const arrayOfDrinkObjects = arrayOfDrinks.map(i => {
        return {
            item: i,
            qty: drinks[i]
        }
    })

    const allItems = arrayOfDrinkObjects.map(i => {
        drinksTotal += i.qty * getPriceForDrink(i.item)
        return {
            ...i,
            price: getPriceForDrink(i.item),
            subTotal: i.qty * getPriceForDrink(i.item)
        }
    })

    const drinksOrder = allItems.filter(i => i.qty > 0)

    return {
        drinksOrder,
        drinksTotal
    }
}

export const buildFoodOrder = (foods) => {
    let foodsTotal = 0
    let arrayOfFoods = Object.keys(foods)

    const arrayOfFoodObjects = arrayOfFoods.map(i => {
        return {
            item: i,
            qty: foods[i]
        }
    })

    const allItems = arrayOfFoodObjects.map(i => {
        foodsTotal += i.qty * getPriceForFood(i.item)
        return {
            ...i,
            price: getPriceForFood(i.item),
            subTotal: i.qty * getPriceForFood(i.item)
        }
    })

    const foodsOrder = allItems.filter(i => i.qty > 0)

    return {
        foodsOrder,
        foodsTotal
    }
}

/**
 * @param {*} orders 
 * @returns The total amount of all the orders.
 */
export const calcTotalForAllOrders = (orders) => {
    return (orders) ? orders.map(i => i.total).reduce((a,b)=> a + b, 0) : 0
}

/**
 * @param {} drinks 
 * @returns The total number of drinks the customer has ordered.
 */
export const getTotalNumberDrinks = (drinks) => {
    let totalDrinks = 0
    const arrayOfDrinks = Object.keys(drinks)
    arrayOfDrinks.forEach(i => {
        totalDrinks += drinks[i]
    })
    return totalDrinks
}

export const getTotalNumberFoods = (foods) => {
    let totalFoods = 0
    const arrayOfFoods = Object.keys(foods)
    arrayOfFoods.forEach(i => {
        totalFoods += foods[i]
    })
    return totalFoods
}
