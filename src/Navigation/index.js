import {Navigation} from 'react-native-navigation';

import {goToDashboard, Screens} from './screen';

export const registerScreen = () => {
  Screens.forEach((ScreenComponent, key) =>
    Navigation.registerComponent(key, () => ScreenComponent),
  );
};

export const startApp = () => {
  registerScreen();

  Navigation.events().registerAppLaunchedListener(() => {
    goToDashboard();
  });
};
