import React from 'react';
import {Alert, Platform, AppState} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import AndroidOpenSettings from 'react-native-android-open-settings';

import Farmer from './components/Farmer';
import Humidity from './components/Humidity';
import ScheduleWatering from './components/ScheduleWatering';
import SmartAlert from './components/SmartAlert';

import utils from '../../utils';

export default class GuideScreen extends React.Component {
  state = {
    mounted: false,
    appState: AppState.currentState,
  };

  componentDidMount() {
    if (this.state.appState === 'active') {
      this.accessPermission();
    }

    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      this.accessPermission();
    }

    this.setState({appState: nextAppState});
  };

  accessPermission = async () => {
    const result =
      Platform.OS === 'ios'
        ? await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        : await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        return this.requestOpenLocation();
      case RESULTS.BLOCKED:
        return this.requestPermission();
      default:
        return this.setState({mounted: true});
    }
  };

  requestOpenLocation = () => {
    return Alert.alert(
      'NU Farm IoT need access your location to estimate forecast',
      '',
      [
        {
          text: 'Open Setting',
          onPress: () =>
            Platform.OS === 'ios'
              ? openSettings()
              : AndroidOpenSettings.locationSourceSettings(),
        },
      ],
      {cancelable: false},
    );
  };

  requestPermission = () => {
    return Alert.alert(
      'NU Farm IoT need location permission',
      '',
      [
        {
          text: 'Open Setting',
          onPress: () =>
            Platform.OS === 'ios'
              ? openSettings()
              : AndroidOpenSettings.appDetailsSettings(),
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {mounted} = this.state;
    const {componentId} = this.props;

    return (
      mounted && (
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
          <Humidity />
          <ScheduleWatering />
          <SmartAlert componentId={componentId} />
        </Swiper>
      )
    );
  }
}
