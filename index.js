import {Navigation} from 'react-native-navigation';
import Dashboard from './src/Dashboard';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Dashboard);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
