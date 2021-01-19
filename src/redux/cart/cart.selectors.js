import { createSelector } from 'reselect';

const selectCart = (state) => state.cartState;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumuldatedQuantity, cartItem) =>
        accumuldatedQuantity + cartItem.quantity,
      0
    )
);
