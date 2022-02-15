import {useLayoutEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const useListUserHomeChat = () => {
  const [data, setData] = useState<Array<any>>([]);

  const fetchData = () => {
    return firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot?.docs?.map(documentSnapshot => {
          return {
            ...documentSnapshot?.data(),
          };
        });
        setData(threads);
      });
  };
  useLayoutEffect(() => {
    const unsubscribe = fetchData();

    return () => unsubscribe();
  });

  return {
    data,
    fetchData,
  };
};
