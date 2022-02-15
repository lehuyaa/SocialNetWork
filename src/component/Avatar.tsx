import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {pointHeight, pointWidth} from '../utils/ScreenSize';

interface AvatarProps {
  linkImage?: string;
  size?: number;
}

const Avatar = (props: AvatarProps) => {
  const {linkImage = '', size = 1} = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar(size)}
        source={{
          uri: linkImage
            ? linkImage
            : 'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg',
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {},
  avatar: (size: number) => {
    return {
      width: size * pointWidth,
      height: size * pointWidth,
      borderRadius: size * pointWidth * 0.5,
    };
  },
});
