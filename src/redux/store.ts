import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore
} from 'redux-persist';
// import userInfoReducer from './slice/userInfoSlice';
// import roomChatReducer from './slice/roomChatSlice';
// import listMessageReducer from './slice/listMessageSlice';
const rootReducer = {
  // userInfo: userInfoReducer,
  // roomChat: roomChatReducer,
  // listMessage: listMessageReducer,

};
const store = configureStore({
  reducer: rootReducer,
});


const persistor = persistStore(store);

export { store, persistor };