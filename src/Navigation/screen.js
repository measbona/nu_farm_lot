import {Navigation} from 'react-native-navigation';

import Dashboard from '../Dashboard';

export const DASHBOARD = 'Nu.Dashboard';

export const Screens = new Map();

Screens.set(DASHBOARD, Dashboard);

export const goToDashboard = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: DASHBOARD,
            },
          },
        ],
      },
    },
  });
};
