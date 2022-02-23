import { call, put, takeLatest } from 'redux-saga/effects';

import { getUserInfo, setUserInfo } from '../slice/userInfoSlice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


export function* handleGetUserInfo() {
    try {
        const uid =  auth().currentUser.uid;
        const user: any = yield firestore().collection('users').doc(uid).get();
        yield put(setUserInfo(user?._data));
    } catch (error) {
      console.log(error);
    }
  }

export function* userInfoSaga() {
    yield takeLatest(getUserInfo, handleGetUserInfo);
  }