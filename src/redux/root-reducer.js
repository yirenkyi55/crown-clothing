import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartState'],
};

const rootReducer = combineReducers({
  userState: userReducer,
  cartState: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
