//
// File: Atoms.js
// Auth: Martin Burolla
// Date: 10/14/2022
// Desc: Contains all global state for the application.
//

import { atom } from 'recoil'

//
// Access: 
//   Read/Write:
//     App
//     DrinkPage
//   Read:
//     Header
//     SideBarContent
// Desc:
//   Stores the drinks that the customer has ordered.
//
export const orderedDrinks = atom({
    key: 'orderedDrinks',
    default: {
        tea: 0,
        coffee: 0,
        lemonade: 0
    }
})

//
// Access: 
//   Read/Write:
//     App
//   Write:
//     Header
// Desc:
//  Used to show and hide the offcanvas sidedrawer.
//
export const showSideDrawer = atom({
    key: 'showSideDrawer',
    default: false
})
