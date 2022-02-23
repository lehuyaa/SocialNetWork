import {useLayoutEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {addListRoomChat} from '../../../redux/slice/roomChatSlice';

export const useListUserHomeChat = () => {
  const {roomChat} = useSelector((state: any) => state);
  const {user} = useSelector((state: any) => state.userInfo);

  const dispatch = useDispatch();

  const [data, setData] = useState<Array<any>>(roomChat?.listRoom);

  const fetchData = () => {
    return firestore()
      .collection('users')
      .where('uid', '!=', user.uid)
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot?.docs?.map(documentSnapshot => {
          return {
            ...documentSnapshot?.data(),
          };
        });
        dispatch(addListRoomChat(threads));

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
