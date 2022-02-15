import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utils/helper';
import {persistReducer} from 'redux-persist';

interface UserInfo {
  user: any;
}

const initialState: UserInfo = {
  user: {},
};

const suggestSlice = createSlice({
  name: 'suggest',
  initialState,
  reducers: {
    setUserInfo: (state, {payload}) => {
      state.user = payload;
    },
  },
});
const persistConfig = generatePersistConfig('suggest', ['listSuggest']);

export const {setUserInfo} = suggestSlice.actions;
export default persistReducer<UserInfo>(persistConfig, suggestSlice.reducer);
