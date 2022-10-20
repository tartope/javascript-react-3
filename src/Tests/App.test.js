//
// File: App.test.js
// Auth: Martin Burolla
// Date: 10/20/2022
// Desc: Tests the order calculation logic.
//       Prices are stored in App.Config.js
//

import { buildOrder } from '../Util/Order'

test('Order 1 lemonade', () => {
  let customerDrinkOrder = {
      tea: 0,
      coffee: 0,
      lemonade: 1
  }
  let {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(1);
});

test('Order 1 tea', () => {
  let customerDrinkOrder = {
      tea: 1,
      coffee: 0,
      lemonade: 0
  }
  let {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(2);
});

test('Order 1 coffee', () => {
  let customerDrinkOrder = {
      tea: 0,
      coffee: 1,
      lemonade: 0
  }
  let {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(3);
});

test('Order a bunch of drinks', () => {
  let customerDrinkOrder = {
      tea: 3,
      coffee: 4,
      lemonade: 2
  }
  let {total} = buildOrder(customerDrinkOrder)
  expect(total).toBe(20);
});

//

test('Order data structure', () => {
  let customerDrinkOrder = {
      tea: 1,
      coffee: 0,
      lemonade: 0
  }
  let {total, order} = buildOrder(customerDrinkOrder)
  /*
    [
      { 
        item: 'tea', 
        qty: 1, 
        price: 2, 
        subTotal: 2
      }
    ]
  */
  expect(order.length).toBe(1);
  expect(order[0].item).toBe('tea');
  expect(order[0].qty).toBe(1);
  expect(order[0].price).toBe(2);
  expect(order[0].subTotal).toBe(2);
  expect(total).toBe(2);
});
