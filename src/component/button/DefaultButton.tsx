import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DefaultButtonProps { }

const DefaultButton = (props: DefaultButtonProps) => {
    return (
        <View style={styles.container}>
            <Text>DefaultButton</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {}
});

export default DefaultButton;
