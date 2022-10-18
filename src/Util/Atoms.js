//
// File: atoms.js
// Auth: Martin Burolla
// Date: 10/14/2022
// Desc: Contains all global state for the application.
//

import { atom } from 'recoil'

//
// Usage: 
//  DrinkPage (read/write)
//  SalesPage (read)
// Desc:
//  
export const drinkData = atom({
    key: 'drinkData',
    default: {
        lemonade: 1, 
        tea: 2,
        coffee: 3
    }
})
