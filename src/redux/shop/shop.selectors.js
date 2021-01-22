import { createSelector } from 'reselect';

const selectShopState = (state) => state.shopState;

export const selectShopCollections = createSelector(
  selectShopState,
  (shopState) => shopState.collections
);

export const selectCollections = createSelector(
  selectShopCollections,
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    selectShopCollections,
    (collections) => collections[collectionUrlParam]
  );
