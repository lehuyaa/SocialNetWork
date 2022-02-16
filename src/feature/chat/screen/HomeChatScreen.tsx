import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import {COLORS} from '../../../assets/Colors';
import ItemChat from '../component/ItemChat';
import {useListUserHomeChat} from '../hook/useListUserHomeChat';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../redux/slice/userInfoSlice';

interface HomeChatScreenProps {}

const HomeChatScreen = (props: HomeChatScreenProps) => {
  const {data} = useListUserHomeChat();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await auth().signOut();
      dispatch(logOut());
    } catch (e) {
      console.error(e);
    }
  };
  const renderItem = ({item}) => {
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
