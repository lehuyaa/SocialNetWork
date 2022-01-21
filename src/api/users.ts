import firestore from '@react-native-firebase/firestore';

export const setUserInfoFB = (params: any, uid: string) => {
    firestore().collection('users').doc(uid).set(params);
};
