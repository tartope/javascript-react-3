//
// File: LocalStorageProxy.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: The one and only interface into the browser's local storage.
//

const LS_COFFEE_PLACE_KEY = 'Coffee_Place_V1'

export const initLocalStorageProxy = () => {
    const orders = JSON.parse(localStorage.getItem(LS_COFFEE_PLACE_KEY))
    if (orders == null) {
        localStorage.setItem(LS_COFFEE_PLACE_KEY, JSON.stringify([]))
    } 
}

export const getOrders= () => {
    return JSON.parse(localStorage.getItem(LS_COFFEE_PLACE_KEY))
}

export const setOrders = (orders) => {
    localStorage.setItem(LS_COFFEE_PLACE_KEY, JSON.stringify(orders))
}
