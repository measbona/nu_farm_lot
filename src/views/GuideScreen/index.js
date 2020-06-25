import React from 'react';
import Swiper from 'react-native-swiper';

import Farmer from './components/Farmer';
import Humidify from './components/Humidify';
import ScheduleWatering from './components/ScheduleWatering';
import SmartAlert from './components/SmartAlert';

export default class GuideScreen extends React.Component {
  render() {
    return (
      <Swiper paginationStyle={{bottom: 130}} loop={false}>
        <Farmer />
        <Humidify />
        <ScheduleWatering />
        <SmartAlert />
      </Swiper>
    );
  }
}
