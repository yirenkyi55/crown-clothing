import { createSelector } from 'reselect';

const selectShopState = (state) => state.shopState;

export const selectShopCollections = createSelector(
  selectShopState,
  (shopState) => shopState.collections
);
