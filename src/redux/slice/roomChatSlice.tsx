import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utils/helper';
import {persistReducer} from 'redux-persist';

const initialState: any = {
  listRoom: [],
};

const roomChatSlice = createSlice({
  name: 'roomChat',
  initialState,
  reducers: {
    addListRoomChat: (state, {payload}) => {
      state.listRoom = payload;
    },
  },
});
// const persistConfig = generatePersistConfig('roomChat', ['listRoom']);

export const {addListRoomChat} = roomChatSlice.actions;
// export default persistReducer<any>(persistConfig, roomChatSlice.reducer);
