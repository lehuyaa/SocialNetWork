import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import { COLORS } from '../../../assets/Colors';
import ItemChat from '../component/ItemChat';
import { useListUserHomeChat } from '../hook/useListUserHomeChat';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native';

interface HomeChatScreenProps { }

const HomeChatScreen = (props: HomeChatScreenProps) => {
  const { data } = useListUserHomeChat();
  const navigation = useNavigation<any>();
  const { user, logout } = useContext<any>(AuthContext);

  const renderItem = ({ item }) => {
    return (
      <ItemChat
        onPress={() => navigation.navigate('DetailsChat')}
        name={item.displayName}
        dateLastSeen="08:43"
        lastMessage="maciej.kowalski@email.com"
      />
    );
  };
  const userLogin = () => {
    const params = {
      displayName: 'adasdasd',
    };
    console.log('user', user);
    firestore().collection('users').doc('êff').set(params);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
        <Button color="#3740FE" title="Signin" onPress={() => userLogin()} />
        <Button color="#3740FE" title="logout" onPress={() => logout()} />
      </View>
    </SafeAreaView>
  );
};

export default HomeChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
});
