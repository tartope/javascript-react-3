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
//  App (read)
// Desc:
//  Stores the drinks that the customer ordered.
//
export const drinkData = atom({
    key: 'drinkData',
    default: {
        tea: 0,
        coffee: 0,
        lemonade: 0
    }
})

//
// Usage: 
//  Header (write)
//  App (read/write)
// Desc:
//  Used to show and hide the offcanvas sidedrawer.
//
export const showSideDrawer = atom({
    key: 'showSideDrawer',
    default: true
})
