import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const IphoneXSizeWidth = 375;
const IphoneXSizeHeight = 875;


export const pointWidth = windowWidth/IphoneXSizeWidth;
export const pointHeight = windowHeight/IphoneXSizeHeight;