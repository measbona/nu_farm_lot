import React from 'react';
import {Platform} from 'react-native';
import Swiper from 'react-native-swiper';

import Farmer from './components/Farmer';
import Humidify from './components/Humidify';
import ScheduleWatering from './components/ScheduleWatering';
import SmartAlert from './components/SmartAlert';

import utils from '../../utils';

export default class GuideScreen extends React.Component {
  render() {
    const {componentId} = this.props;

    return (
      <Swiper
        loop={false}
        paginationStyle={
          Platform.OS === 'ios'
            ? utils.devices.isNotch()
              ? {bottom: 17}
              : {bottom: 10}
            : {bottom: 10}
        }>
        <Farmer />
        <Humidify />
        <ScheduleWatering />
        <SmartAlert componentId={componentId} />
      </Swiper>
    );
  }
}
