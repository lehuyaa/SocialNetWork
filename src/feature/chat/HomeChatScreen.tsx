import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { setUserInfoFB } from '../../api/users';
import { AuthContext } from '../../navigation/AuthProvider';

interface HomeChatScreenProps { }

const HomeChatScreen = (props: HomeChatScreenProps) => {

    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Button
                color="#3740FE"
                title="Signup"
                onPress={() => logout()}
            />

        </View>
    );
};

export default HomeChatScreen;

const styles = StyleSheet.create({
    container: {}
});
