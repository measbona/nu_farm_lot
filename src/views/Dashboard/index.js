import React from 'react';
import {ScrollView} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

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

export default class Dashboard extends React.Component {
  state = {
    editAction: false,
  };

  handleOnCropPress = crop => {
    showCropDetail({crop});
  };

  render() {
    const {editAction} = this.state;

    const CROPS_DATA = [
      {
        id: '1',
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
        id: '2',
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
        id: '3',
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
        id: '4',
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
        <ScrollView>
          {CROPS_DATA.map(crop => {
            return (
              <CropCard
                key={crop.id}
                crop={crop}
                onLongPress={value => this.setState({editAction: !value})}
                onCropPress={this.handleOnCropPress}
                editAction={editAction}
              />
            );
          })}
        </ScrollView>
        {editAction ? (
          <AddButton>
            <Touchable
              activeOpacity={0.5}
              onPress={() => alert('Add')}
              hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
              <MDIcon name="add-circle-outline" size={45} />
            </Touchable>
          </AddButton>
        ) : null}
      </DashboardAnimate>
    );
  }
}
