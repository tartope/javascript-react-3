//
// File: atoms.js
// Auth: Martin Burolla
// Date: 10/14/2022
// Desc: Contains all global state for the application.
//

import { atom } from 'recoil'

//
// Usage: 
//
// Desc:
//  
export const lemonadeCounter = atom({
    key: 'lemonadeCounter',
    default: 1
})
