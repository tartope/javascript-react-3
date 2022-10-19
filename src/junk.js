const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const prices = [
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

let d = formatter.format(prices.filter(i=> i.type === "coffee")[0].price)

console.log(prices)
console.log(d)

