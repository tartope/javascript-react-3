//
// File: Order.test.js
// Auth: Martin Burolla
// Date: 10/20/2022
// Desc: Tests the order calculation logic.
//       Prices are stored in App.Config.js
//

import { buildOrder, calcTotalForAllOrders, getTotalNumberDrinks } from '../Util/Order'

//
// Test: buildOrder()
//

test('Order 1 lemonade', () => {
  const customerDrinkOrder = {
      tea: 0,
      coffee: 0,
      lemonade: 1
  }
  const {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(1);
});

test('Order 1 tea', () => {
  const customerDrinkOrder = {
      tea: 1,
      coffee: 0,
      lemonade: 0
  }
  const {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(2);
});

test('Order 1 coffee', () => {
  const customerDrinkOrder = {
      tea: 0,
      coffee: 1,
      lemonade: 0
  }
  const {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(3);
});

test('Order a bunch of drinks', () => {
  const customerDrinkOrder = {
      tea: 3,
      coffee: 4,
      lemonade: 2
  }
  const {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(20);
});

test('Order data structure', () => {
  const customerDrinkOrder = {
      tea: 1,
      coffee: 0,
      lemonade: 0
  }
  const {total, order} = buildOrder(customerDrinkOrder)
  /*
    order array:
    [
      { 
        item: 'tea', 
        qty: 1, 
        price: 2, 
        subTotal: 2
      }
    ]
  */
  expect(order[0].item).toBe('tea');
  expect(order[0].qty).toBe(1);
  expect(order[0].price).toBe(2);
  expect(order[0].subTotal).toBe(2);
  expect(total).toBe(2);
});

//
// Test: calcTotalForAllOrders()
//

test('Calculate total for all orders', () => {
  const orders = [
    {
      id: 1,
      items: [
        {
          item: 'lemonade', 
          qty: 1, 
          price: 1, 
          subTotal: 1
        },
        {
          item: 'tea', 
          qty: 1, 
          price: 2, 
          subTotal: 2
        }
      ],
      total: 3, // <== sum this value.
      date: '10/20/2022'
    },
    {
      id: 2,
      items: [
        {
          item: 'lemonade', 
          qty: 7, 
          price: 1, 
          subTotal: 7
        }
      ],
      total: 7, // <== sum this value.
      date: '10/20/2022'
    },
  ]
  const total = calcTotalForAllOrders(orders)
  expect(total).toBe(10);
});

//
// Test: getTotalNumberDrinks()
//

test('Calculate total number of drinks', () => {
  const customerDrinkOrder = {
    tea: 1,
    coffee: 2,
    lemonade: 3
  }
  const total = getTotalNumberDrinks(customerDrinkOrder)
  expect(total).toBe(6);
});
