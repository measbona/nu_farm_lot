import {Dimensions} from 'react-native';
const maxCanvasWidth1600 = 1600;
const maxCanvasHeight2560 = 2560;

const maxCanvasWidth1536 = 1536;
const maxCanvasHeight2048 = 2048;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const getCurrentDeviceAspectRadio = () => {
  return deviceWidth / deviceHeight;
};

const get2048DeviceAspectRatio = () => {
  return maxCanvasHeight2048 / maxCanvasWidth1536;
};

const getHeight = imgHeight => {
  if (getCurrentDeviceAspectRadio() === get2048DeviceAspectRatio()) {
    return (imgHeight / maxCanvasHeight2048) * deviceHeight;
  } else {
    return (imgHeight / maxCanvasHeight2560) * deviceHeight;
  }
};

const getWidth = imgWidth => {
  if (getCurrentDeviceAspectRadio() === get2048DeviceAspectRatio()) {
    return (imgWidth / maxCanvasWidth1536) * deviceWidth;
  } else {
    return (imgWidth / maxCanvasWidth1600) * deviceWidth;
  }
};

export default {
  getHeight,
  getWidth,
};
