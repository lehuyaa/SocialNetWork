import React, {useContext, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeChatScreen from '../feature/chat/screen/HomeChatScreen';
import DetailsChat from '../feature/chat/screen/DetailsChatScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

// const ArrayTabs = [
//   {
//     name: 'Home',
//     title: 'Home',
//     component: Home,
//     icon: Images.iconHome,
//   },
//   {
//     name: 'Category',
//     title: 'Explore',
//     component: CategoryNews,
//     icon: Images.iconHeart,
//   },
//   {
//     name: 'Main',
//     title: 'Main',
//     component: Routes,
//     icon: Images.iconProfile,
//   },
// ];
//   const AppTab = () => {
//     return (
//       <Tab.Navigator
//         tabBar={(props: BottomTabBarProps) => <BottomTab {...props} />}
//         screenOptions={{
//             headerShown: false
//         }}>
//         {ArrayTabs.map((item, index) => (
//           <Tab.Screen key={`${item.name}`} options={{...item}} {...item} />
//         ))}
//       </Tab.Navigator>
//     );
//   };
const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Chat"
      component={HomeChatScreen}
      options={{title: 'Home Chat'}}
    />
    <Stack.Screen
      name="DetailsChat"
      component={DetailsChat}
      options={{title: 'Home Chat'}}
    />
  </Stack.Navigator>
);

export default AppStack;
