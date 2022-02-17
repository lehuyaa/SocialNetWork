import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utils/helper';
import {persistReducer} from 'redux-persist';

const initialState: any = {};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, {payload}) => {
      state.user = payload;
    },
    logOut: state => {
      delete state.user;
    },
  },
});
// const persistConfig = generatePersistConfig('userInfo', ['user']);

export const {setUserInfo, logOut} = userInfoSlice.actions;
// export default persistReducer<any>(persistConfig, userInfoSlice.reducer);
