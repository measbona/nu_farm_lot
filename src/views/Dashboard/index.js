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
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true});
    }, 1000);

    Geolocation.getCurrentPosition(
      position => {
        this.setState({locationData: position});
      },
      error => {
        // See error code charts below.
        console.warn(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  handleOnCropPress = crop => {
    showCropDetail({crop});
  };

  render() {
    const {editAction, mounted} = this.state;

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
        <Header cropSize={CROPS_DATA.length} />
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
