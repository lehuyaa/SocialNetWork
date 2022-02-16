
import { useLayoutEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../../../redux/slice/listMessageSlice';


export const useDetailsChat = () => {

    const { listMessage } = useSelector((state: any) => state);

    const [data, setData] = useState(listMessage?.messages);
    const dispatch = useDispatch();

    const fetchData = () => {
        return firestore()
            .collection('messages')
            .onSnapshot(querySnapshot => {
                const threads = querySnapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
                dispatch(setMessages(threads));

                setData(threads);
            });
    };
    useLayoutEffect(() => {
        const unsubscribe = fetchData();

        return () => unsubscribe();
    });

    return {
        setData,
        data,
        fetchData,
    };
}