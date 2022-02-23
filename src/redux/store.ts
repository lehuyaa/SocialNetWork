import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore
} from 'redux-persist';
import userInfoReducer from './slice/userInfoSlice';
import roomChatReducer from './slice/roomChatSlice';
import listMessageReducer from './slice/listMessageSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const rootReducer = {
  userInfo: userInfoReducer,
  roomChat: roomChatReducer,
  listMessage: listMessageReducer,
};
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware:  [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);


export { store, persistor };




