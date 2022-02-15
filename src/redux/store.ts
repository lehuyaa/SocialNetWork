import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore
  } from 'redux-persist';
  import userInfoReducer from './slice/userInfoSlice';

const rootReducer = {
  userInfo: userInfoReducer,
};
const store = configureStore({
    reducer: rootReducer,
});


const persistor = persistStore(store);

export {store, persistor};