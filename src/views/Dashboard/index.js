import React from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

import Geolocation from 'react-native-geolocation-service';

import utils from '../../utils';
import {showCropDetail} from '../../navigation/screen';

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

const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default class Dashboard extends React.Component {
  state = {
    editAction: false,
    mounted: false,
    locationData: null,
    weatherDetail: null,
  };

  componentDidMount() {
    this.handleLocation();
  }

  handleLocation = async () => {
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

  handleOnCropPress = crop => {
    showCropDetail({crop});
  };

  render() {
    const {editAction, mounted, weatherDetail} = this.state;

    const CROPS_DATA = [
      {
        name: 'Tomato',
        humandity: {
          temperature: '28',
          water_volume: '80',
          water_capacity: '0.3',
        },
        image_name:
          'https://www.hindimeaning.com/wp-content/uploads/2012/12/Tomato.jpg',
      },
      {
        name: 'JackFruit',
        humandity: {
          temperature: '10',
          water_volume: '90',
          water_capacity: '0.1',
        },
        image_name:
          'https://www.hindimeaning.com/wp-content/uploads/2015/08/Jackfruit.jpg',
      },
      {
        name: 'Carrot',
        humandity: {
          temperature: '19',
          water_volume: '100',
          water_capacity: '0.5',
        },
        image_name:
          'https://www.hindimeaning.com/wp-content/uploads/2012/12/carrots-vegetables.jpg',
      },
      {
        name: 'Cucumber',
        humandity: {
          temperature: '24',
          water_volume: '20',
          water_capacity: '0.1',
        },
        image_name:
          'https://www.hindimeaning.com/wp-content/uploads/2015/08/cucumbers.jpg',
      },
    ];

    return (
      <DashboardAnimate animation="fadeIn">
        <Header
          cropSize={CROPS_DATA.length}
          weatherDetail={weatherDetail}
          mounted={mounted}
        />
        {mounted ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {CROPS_DATA.map((crop, key) => {
              return (
                <CropCard
                  key={key}
                  crop={crop}
                  onLongPress={value => this.setState({editAction: !value})}
                  onCropPress={this.handleOnCropPress}
                  editAction={editAction}
                />
              );
            })}
          </ScrollView>
        ) : (
          <Loading>
            <ActivityIndicator size="large" color={utils.colors.lightGreen} />
          </Loading>
        )}
        {editAction && (
          <AddButton>
            <Touchable
              activeOpacity={0.5}
              onPress={() => alert('Add')}
              hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
              <MDIcon name="add-circle-outline" size={45} />
            </Touchable>
          </AddButton>
        )}
      </DashboardAnimate>
    );
  }
}
