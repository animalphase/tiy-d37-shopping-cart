let storeItemDatabase = [
  {
    id: 0,
    type: 'celery',
    price: 0.23
  },
  {
    id: 1,
    type: 'platinum',
    price: 2348.07
  },
  {
    id: 2,
    type: 'circuitry',
    price: 3.52
  },
  {
    id: 3,
    type: 'jerky snax',
    price: 0.99
  },
  {
    id: 4,
    type: 'servo motors',
    price: 23.56
  },
  {
    id: 5,
    type: 'lithium ion battery (medium)',
    price: 12.56
  },
  {
    id: 6,
    type: 'journal',
    price: 1.99
  }
];

let initialState = {
  storeItems: storeItemDatabase,
  cart: [],
  cartTotal: 0
};

const calculateCartTotal = cartArray => {
  let total = 0;
  cartArray.forEach(item => {
    total += item.price;
  });
  return total.toFixed(2);
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'ADD_ITEM':
      let newCart = currentState.cart.slice();
      newCart.push(action.item);
      return Object.assign({}, currentState, {
        cart: newCart,
        cartTotal: calculateCartTotal(newCart)
      });
  }
}
