import { useLayoutEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';
import { getUserInfoFB, setUserInfoFB } from '../../api/users';

export const useAuth = () => {
    const login = async (email, password) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            const uid = auth().currentUser.uid;
            const user = getUserInfoFB(uid);
            const payload = {
                uid,
            }
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }


    const register = async (email, password, displayName) => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            const uid = auth().currentUser.uid;
            const User = {
                displayName,
                email,
                avatar: '',
                uid,
            };
            setUserInfoFB(User, uid);
        } catch (e) {
            console.log(e);
        }
    }

    const logout = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            console.error(e);
        }
    }

    return {
        login,
        register,
        logout
    };
};
