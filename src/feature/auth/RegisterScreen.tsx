import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {setUserInfoFB} from '../../api/users';
import {setUserInfo} from '../../redux/slice/userInfoSlice';
import {useDispatch} from 'react-redux';

interface RegisterProps {}

const RegisterScreen = (props: RegisterProps) => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassWord] = useState<string>('');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const registerUser = async () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        const uid = auth().currentUser.uid;
        const User = {
          displayName,
          email,
          avatar: '',
          uid,
        };
        // setUserInfoFB(User, uid);
        // dispatch(setUserInfo(User));
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={displayName}
        onChangeText={val => setDisplayName(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={val => setPassWord(val)}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button color="#3740FE" title="Signup" onPress={() => registerUser()} />

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already Registered? Click here to login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
});

export default RegisterScreen;
