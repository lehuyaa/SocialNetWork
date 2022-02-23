import {useLayoutEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const useDetailsChat = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return firestore()
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }));
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
};
