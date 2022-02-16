import { createSlice } from '@reduxjs/toolkit';
import { generatePersistConfig } from '../../utils/helper';
import { persistReducer } from 'redux-persist';


interface user {
  uid?: string;
  displayName?: string;
  email?: string;
}
interface UserInfo {
  user: user;
}

const initialState: UserInfo = {
  user: {},
};

const userInfoSlice = createSlice({
  name: 'suggest',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.user = payload;
    },
  },
});
const persistConfig = generatePersistConfig('suggest', ['listSuggest']);

export const { setUserInfo } = userInfoSlice.actions;
export default persistReducer<UserInfo>(persistConfig, userInfoSlice.reducer);
