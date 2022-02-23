import {all} from 'redux-saga/effects';
import {messageSaga} from './messageSaga';
import {userInfoSaga} from './userSaga';

export default function* rootSaga() {
  yield all([messageSaga(), userInfoSaga()]);
}
