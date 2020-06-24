import {Navigation} from 'react-native-navigation';

import Dashboard from '../views/Dashboard';
import GuideScreen from '../views/GuideScreen';

export const DASHBOARD = 'Nu.Dashboard';
export const GUIDESCREEN = 'Nu.GuideScreen';

export const Screens = new Map();

Screens.set(DASHBOARD, Dashboard);
Screens.set(GUIDESCREEN, GuideScreen);

export const popBack = componentId => Navigation.pop(componentId);

export const goToDashboard = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: GUIDESCREEN,
            },
          },
        ],
      },
    },
  });
};

// export const guideScreen = () => {
//   Navigation.push({
//     component: {
//       name: GUIDESCREEN,
//     },
//   });
// };
