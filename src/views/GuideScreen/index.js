import React from 'react';
import Swiper from 'react-native-swiper';

import Farmer from './components/Farmer';
import Humidify from './components/Humidify';
import ScheduleWatering from './components/ScheduleWatering';
import SmartAlert from './components/SmartAlert';

export default class GuideScreen extends React.Component {
  render() {
    const {componentId} = this.props;

    return (
      <Swiper loop={false}>
        <Farmer />
        <Humidify />
        <ScheduleWatering />
        <SmartAlert componentId={componentId} />
      </Swiper>
    );
  }
}
