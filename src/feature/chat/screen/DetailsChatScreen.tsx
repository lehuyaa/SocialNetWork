import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDetailsChat} from '../hook/useDetailsChat';
import firestore from '@react-native-firebase/firestore';

interface DetailsChatProps {}

const DetailsChat = (props: DetailsChatProps) => {
  const {data, setData} = useDetailsChat();

  const onSend = useCallback((messages = []) => {
    setData(previousMessages => GiftedChat.append(previousMessages, messages));
    const {_id, createdAt, text, user} = messages[0];
    // firestore().collection('messages').add({
    //   _id,
    //   createdAt,
    //   text,
    //   user
    // });
  }, []);
  return (
    <GiftedChat
      messages={data}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default DetailsChat;

const styles = StyleSheet.create({
  container: {},
});
