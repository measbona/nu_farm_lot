import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isNotch = () => {
  return DeviceInfo.hasNotch();
};

const screenHeight = height;

const screenWidth = width;

const clearNotch = () => {
  return 35;
};

const isIOS = Platform.OS === 'ios';

const devicePaddingTop = () => {
  let value = 0;

  if (isIphoneX) {
    value = 44;
  } else if (isIOS) {
    value = 25;
  }

  return value;
};

const isIphoneX = Platform.OS === 'ios' && height >= 812;

export default {
  isNotch,
  isIphoneX,
  screenHeight,
  screenWidth,
  clearNotch,
  devicePaddingTop,
};
