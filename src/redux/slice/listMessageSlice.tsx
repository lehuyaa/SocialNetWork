import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utils/helper';
import {persistReducer} from 'redux-persist';

const initialState: any = {
  messages: [],
};

const listMessageSlice = createSlice({
  name: 'listMessage',
  initialState,
  reducers: {
    getMessages: () => {},
    setMessages: (state, {payload}) => {
      state.messages = payload;
    },
  },
});
const persistConfig = generatePersistConfig('listMessage', ['messages']);

export const {setMessages, getMessages} = listMessageSlice.actions;
export default persistReducer<any>(persistConfig, listMessageSlice.reducer);
