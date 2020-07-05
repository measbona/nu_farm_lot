import {Navigation} from 'react-native-navigation';
import utils from '../utils';

import GuideScreen from '../views/GuideScreen';

import SelectFarm from '../views/Setup/SelectFarm';
import FarmSize from '../views/Setup/FarmSize';
import Sensor from '../views/Setup/Sensor';
import WaterSchedule from '../views/Setup/WaterSchedule';
import Water from '../views/Setup/Water';
import SmartAlert from '../views/Setup/SmartAlert';
import Done from '../views/Setup/Done';

import Dashboard from '../views/Dashboard';
import CropDetail from '../views/CropDetail';

export const GUIDESCREEN = 'Nu.GuideScreen';

export const SELECT_FARM = 'Nu.SelectFarm';
export const FARM_SIZE = 'Nu.FarmSize';
export const SENSOR = 'Nu.Sensor';
export const WATER_SCHEDULE = 'Nu.WaterSchedule';
export const WATER = 'Nu.Water';
export const SMART_ALERT = 'Nu.SmartAlert';
export const DONE = 'Nu.Done';

export const DASHBOARD = 'Nu.Dashboard';
export const CROP_DETAIL = 'Nu.CropDetail';

export const Screens = new Map();

Screens.set(GUIDESCREEN, GuideScreen);

Screens.set(SELECT_FARM, SelectFarm);
Screens.set(FARM_SIZE, FarmSize);
Screens.set(SENSOR, Sensor);
Screens.set(WATER_SCHEDULE, WaterSchedule);
Screens.set(WATER, Water);
Screens.set(SMART_ALERT, SmartAlert);
Screens.set(DONE, Done);

Screens.set(DASHBOARD, Dashboard);
Screens.set(CROP_DETAIL, CropDetail);

export const dismissModal = componentId => Navigation.dismissModal(componentId);

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

export const goToSelectFarm = componentId => {
  Navigation.push(componentId, {
    component: {
      name: SELECT_FARM,
    },
  });
};

export const goToFarmSize = componentId => {
  Navigation.push(componentId, {
    component: {
      name: FARM_SIZE,
    },
  });
};

export const goToSensor = componentId => {
  Navigation.push(componentId, {
    component: {
      name: SENSOR,
    },
  });
};

export const goToWaterSchedule = componentId => {
  Navigation.push(componentId, {
    component: {
      name: WATER_SCHEDULE,
    },
  });
};

export const goToWater = componentId => {
  Navigation.push(componentId, {
    component: {
      name: WATER,
    },
  });
};

export const goToSmartAlert = componentId => {
  Navigation.push(componentId, {
    component: {
      name: SMART_ALERT,
    },
  });
};

export const goToDone = componentId => {
  Navigation.push(componentId, {
    component: {
      name: DONE,
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
