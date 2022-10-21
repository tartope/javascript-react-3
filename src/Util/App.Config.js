// 
// File: App.Config.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: All configuration options for the application.
//

export const drinkPrices = [
    { 
        type: "lemonade",
        price: 1.00 
    },
    { 
        type: "tea",
        price: 2.00 
    },
    { 
        type: "coffee",
        price: 3.00 
    }
]

export const getPriceForDrink = (type) => {
    return drinkPrices.find(p => p.type === type).price
}
