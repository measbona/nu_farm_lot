import {Navigation} from 'react-native-navigation';
import utils from '../utils';

import GuideScreen from '../views/GuideScreen';
import Dashboard from '../views/Dashboard';
import CropDetail from '../views/CropDetail';
import Setup from '../views/Setup';

export const GUIDESCREEN = 'Nu.GuideScreen';
export const DASHBOARD = 'Nu.Dashboard';
export const CROP_DETAIL = 'Nu.CropDetail';
export const SET_UP = 'Nu.Setup';

export const Screens = new Map();

Screens.set(GUIDESCREEN, GuideScreen);
Screens.set(DASHBOARD, Dashboard);
Screens.set(CROP_DETAIL, CropDetail);
Screens.set(SET_UP, Setup);

export const dismissModal = componentId => Navigation.dismissModal(componentId);

export const popBack = componentId => Navigation.pop(componentId);

export const setRootHome = () => {
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

export const goToDashboard = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: DASHBOARD,
              options: {
                layout: {
                  backgroundColor: `${utils.colors.veryLightGray}`,
                  componentBackgroundColor: `${utils.colors.veryLightGray}`,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const showCropDetail = passProps => {
  Navigation.showModal({
    component: {
      name: CROP_DETAIL,
      passProps,
      options: {
        layout: {
          backgroundColor: `${utils.colors.veryLightGray}`,
          componentBackgroundColor: `${utils.colors.veryLightGray}`,
        },
      },
    },
  });
};

export const goToSetup = (componentId, passProps) => {
  Navigation.push(componentId, {
    component: {
      name: SET_UP,
      passProps,
      options: {
        layout: {
          backgroundColor: `${utils.colors.veryLightGray}`,
          componentBackgroundColor: `${utils.colors.veryLightGray}`,
        },
      },
    },
  });
};
