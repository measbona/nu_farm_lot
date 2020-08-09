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

  handleEditAction = value => {
    this.setState({editAction: !value});
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
      },
      {
        id: '2',
        name: 'Graph',
        humandity: {
          temperature: '28',
          water_volume: '80',
          water_capacity: '0.3',
        },
      },
    ];

    return (
      <DashboardAnimate animation="fadeIn">
        <Header />
        <ScrollView>
          {CROPS_DATA.map(crop => {
            return (
              <CropCard
                key={crop.id}
                crop={crop}
                onLongPress={this.handleEditAction}
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
