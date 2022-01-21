import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { setUserInfoFB } from '../api/users';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    setLoading(true);
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        setLoading(false);

                    } catch (e) {
                        setLoading(false);

                    }
                },
                register: async (email, password, displayName) => {
                    setLoading(true);
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                        const uid = auth().currentUser.uid;
                        const User = {
                            displayName,
                            email,
                            avatar: '',
                            uid,
                        }
                        setUserInfoFB(User, uid);
                        setLoading(false);

                    } catch (e) {
                        console.log(e);
                        setLoading(false);

                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};