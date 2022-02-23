import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDetailsChat} from '../hook/useDetailsChat';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {getMessages} from '../../../redux/slice/listMessageSlice';
import Avatar from '../../../component/Avatar';

interface DetailsChatProps {}

const DetailsChat = (props: DetailsChatProps) => {
  const {data, setData, fetchData} = useDetailsChat();
  const {user} = useSelector((state: any) => state.userInfo);
  const {listMessage} = useSelector((state: any) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const onSend = useCallback((messages = []) => {
    setData(previousMessages => GiftedChat.append(previousMessages, messages));
    const {_id, createdAt, text, user} = messages[0];
    console.log('user', user);
    firestore().collection('messages').add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const renderAvatar = props => {
    const {avatar} = props.currentMessage.user;
    return <Avatar linkImage={avatar} size={24} />;
  };
  return (
    <View style={styles.container}>
      <GiftedChat
        messages={data}
        onSend={messages => onSend(messages)}
        user={{
          _id: user?.uid,
          avatar: user?.avatar,
        }}
        renderAvatar={renderAvatar}
      />
    </View>

    // <View />
  );
};

export default DetailsChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
