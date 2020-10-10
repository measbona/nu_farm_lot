import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

import Geolocation from 'react-native-geolocation-service';

import utils from '../../utils';
import {showCropDetail, goToSetup} from '../../navigation/screen';

import Header from './components/Header';
import CropCard from './components/CropCard';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const DashboardAnimate = Animatable.createAnimatableComponent(Wrapper);

const AddButton = styled.View`
  align-items: center;
`;

const Touchable = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  bottom: ${utils.devices.isNotch() ? 45 : 30}px;
`;

export default class Dashboard extends React.Component {
  state = {
    editAction: false,
    mounted: false,
    locationData: null,
    weatherDetail: null,
    allCrops: [],
  };

  componentDidMount() {
    this.getWeatherInfo();
    this.fetchCrops();
  }

  fetchCrops = async () => {
    const data = {};
    const dbRef = await firestore()
      .collection('crops')
      .get();

    try {
      dbRef.forEach(doc => {
        data[doc.id] = {key: doc.id, ...doc.data()};
      });
    } catch (error) {
      console.log(error);
    }

    this.setState({allCrops: data});
  };

  getLatLngLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(location => resolve(location.coords)),
        () => reject(new Error('LOCATION')),
        {
          maximumAge: 0,
          timeout: 20000,
          enableHighAccuracy: true,
        };
    });
  };

  getWeatherInfo = async () => {
    try {
      const location = await this.getLatLngLocation();

      const latitude = location.latitude;
      const longitude = location.longitude;
      const url = `https://api.climacell.co/v3/weather/realtime?lat=${latitude}&lon=${longitude}&unit_system=si&fields=temp%2Cprecipitation_type%2Cweather_code&apikey=FO1ZtXa5NiFrUBTPLEJ6hIfDrj1iG06g`;

      const fetchWeather = await fetch(url);
      const resJson = await fetchWeather.json();

      this.setState({weatherDetail: resJson, mounted: true});
    } catch (error) {
      this.setState({mounted: false});
    }
  };

  handleOnCropPress = crop => {
    showCropDetail({crop});
  };

  render() {
    const {editAction, mounted, weatherDetail, allCrops} = this.state;
    const {componentId} = this.props;

    return (
      <DashboardAnimate animation="fadeIn">
        <Header
          cropSize={_.size(allCrops)}
          weatherDetail={weatherDetail}
          mounted={mounted}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {_.map(allCrops, (crop, key) => {
            return (
              <CropCard
                key={key}
                crop={crop}
                onLongPress={value => this.setState({editAction: !value})}
                onCropPress={this.handleOnCropPress}
                editAction={editAction}
                componentId={componentId}
              />
            );
          })}
        </ScrollView>

        {editAction && (
          <AddButton>
            <Touchable
              activeOpacity={0.5}
              onPress={() => goToSetup(componentId, {action: 'save'})}
              hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
              <MDIcon name="add-circle-outline" size={45} />
            </Touchable>
          </AddButton>
        )}
      </DashboardAnimate>
    );
  }
}
