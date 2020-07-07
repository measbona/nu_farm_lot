import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import utils from '../../../utils';

import CropInfo from './CropInfo';
import Humandity from './Humandity';

import {showCropDetail} from '../../../navigation/screen';

const Wrapper = styled.TouchableOpacity`
  padding-top: 12px;
`;

const CropCard = styled.View`
  justify-content: space-between;
  background-color: ${utils.colors.white};
  height: 200px;
  margin-horizontal: 16px;
  padding-vertical: 15px;
  border-radius: 40px;
`;

const Line = styled.View`
  border-width: 1px;
  margin-horizontal: 16px;
  border-color: ${utils.colors.border};
`;

const BadgeEdit = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
`;

export default class CropCards extends React.Component {
  handleCropData = crop => {
    const {componentId} = this.props;

    this.props.onCropPress(crop);
    showCropDetail({
      crop,
      componentId,
    });
  };

  alert = () => {
    const {edit, crop} = this.props;

    if (edit) {
      Alert.alert(
        'Are you sure you want to edit?',
        `${crop.crop_name}`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Area', onPress: () => console.log('OK Pressed')},
          {text: 'Watering Schedule', onPress: () => console.log('OK Pressed')},
          {text: 'Smart Alert', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }

    Alert.alert(
      'Are you sure you want to delete?',
      `${crop.crop_name}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  render() {
    const {edit, destroy} = this.props;
    return (
      <Wrapper
        activeOpacity={0.5}
        onPress={() => this.handleCropData(this.props.crop)}>
        <CropCard style={utils.shadows.cropCardShadow}>
          <CropInfo {...this.props} />
          <Line />
          <Humandity {...this.props} />
          {(edit || destroy) && (
            <BadgeEdit
              activeOpacity={0.5}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
              onPress={() => this.alert()}>
              {edit ? (
                <Ionicons
                  name="settings"
                  size={35}
                  color={utils.colors.setting}
                />
              ) : (
                <AntDesign
                  name="closecircle"
                  size={30}
                  color={utils.colors.red}
                />
              )}
            </BadgeEdit>
          )}
        </CropCard>
      </Wrapper>
    );
  }
}
