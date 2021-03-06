import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {getUserInfo} from '../../redux/slice/userInfoSlice';

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassWord] = useState<string>('');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const userLogin = async () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        dispatch(getUserInfo());
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* {loading && <Loading />} */}
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
      <Button color="#3740FE" title="Signin" onPress={() => userLogin()} />

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Register')}>
        Don't have account? Click here to signup
      </Text>

      {/* <Text style={styles.loginText}>
                OR
            </Text> */}
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

export default LoginScreen;
