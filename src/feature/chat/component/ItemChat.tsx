import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from '../../../component/Avatar';
import {pointHeight, pointWidth} from '../../../utils/ScreenSize';

interface ItemChatProps {
  name?: string;
  dateLastSeen?: string;
  lastMessage?: string;
  onPress?: () => void;
}

const ItemChat = (props: ItemChatProps) => {
  const {
    name = '',
    dateLastSeen = '',
    lastMessage = '',
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar size={44} />
      <View style={styles.viewInfo}>
        <View style={styles.viewName}>
          <Text style={styles.boldText}>{name}</Text>
          <Text style={styles.boldText}>{dateLastSeen}</Text>
        </View>
        <Text style={styles.normalText}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25 * pointWidth,
    paddingRight: 28 * pointWidth,
    flexDirection: 'row',
  },
  viewInfo: {
    flex: 1,
    paddingLeft: 16 * pointWidth,
  },
  viewName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldText: {
    fontSize: 15 * pointHeight,
    color: 'white',
    fontWeight: '500',
  },
  normalText: {
    fontSize: 13 * pointHeight,
    color: 'white',
    fontWeight: '300',
    marginTop: 5 * pointHeight,
  },
});

export default ItemChat;
