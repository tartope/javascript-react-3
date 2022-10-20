//
// File: Money.js
// Auth: Martin Burolla
// Date: 10/20/2022
// Desc: All money functions.
//

export const formatUSD = (money) => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    return formatter.format(money)
}
