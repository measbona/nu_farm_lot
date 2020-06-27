import {Navigation} from 'react-native-navigation';

import Dashboard from '../views/Dashboard';
import GuideScreen from '../views/GuideScreen';

import SelectFarm from '../views/SelectFarm';
import FarmSize from '../views/FarmSize';
import Sensor from '../views/Sensor';
import WaterSchedule from '../views/WaterSchedule';
import Water from '../views/Water';
import SmartAlert from '../views/SmartAlert';
import Done from '../views/Done';

export const DASHBOARD = 'Nu.Dashboard';
export const GUIDESCREEN = 'Nu.GuideScreen';

export const SELECT_FARM = 'Nu.SelectFarm';
export const FARM_SIZE = 'Nu.FarmSize';
export const SENSOR = 'Nu.Sensor';
export const WATER_SCHEDULE = 'Nu.WaterSchedule';
export const WATER = 'Nu.Water';
export const SMART_ALERT = 'Nu.SmartAlert';
export const DONE = 'Nu.Done';

export const Screens = new Map();

Screens.set(DASHBOARD, Dashboard);
Screens.set(GUIDESCREEN, GuideScreen);

Screens.set(SELECT_FARM, SelectFarm);
Screens.set(FARM_SIZE, FarmSize);
Screens.set(SENSOR, Sensor);
Screens.set(WATER_SCHEDULE, WaterSchedule);
Screens.set(WATER, Water);
Screens.set(SMART_ALERT, SmartAlert);
Screens.set(DONE, Done);

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
