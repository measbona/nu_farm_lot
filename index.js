import {startApp} from './src/navigation/index';
import SplashScreen from 'react-native-splash-screen';

setTimeout(() => {
  SplashScreen.hide();
}, 1000);

startApp();
