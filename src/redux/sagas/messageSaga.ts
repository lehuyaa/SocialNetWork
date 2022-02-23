import { call, put, takeLatest } from 'redux-saga/effects';
import { getMessages, setMessages } from '../slice/listMessageSlice';
import firestore from '@react-native-firebase/firestore';



export function* handleGetMessages() {
    try {
    let data = []
      firestore()
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.map(doc => {
            data.push({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          });
        });
      });
      yield put(setMessages({ ...data }));

    } catch (error) {
      console.log(error);
    }
  }

export function* messageSaga() {
  yield takeLatest(getMessages, handleGetMessages);
}