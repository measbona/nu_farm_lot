import DeviceInfo from 'react-native-device-info';

const isNotch = () => {
  return DeviceInfo.hasNotch();
};

export default {
  isNotch,
};
