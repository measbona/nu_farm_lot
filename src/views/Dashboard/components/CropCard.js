import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

import utils from '../../../utils';

const Container = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
`;

const Content = styled.View`
  border-radius: 10px;
  background-color: white;
  width: ${utils.devices.screenWidth - 30}px;
  height: ${utils.devices.isIphoneX ? 165 : 150}px;
`;

const LabelWrapper = styled.View`
  padding: 15px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${utils.colors.lightGreen};
`;

const CropLabel = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const ActionWrapper = styled.View`
  right: 0px;
  position: absolute;
  flex-direction: row;
`;

const Touchable = styled.TouchableOpacity`
  margin-horizontal: 10px;
`;

export default class CropCards extends React.Component {
  handleAction = value => {
    if (value === 'edit') {
      Alert.alert(
        'Are you sure you want to edit?',
        '',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Watering Schedule', onPress: () => console.log('OK Pressed')},
          {text: 'Smart Alert', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
    if (value === 'delete') {
      Alert.alert(
        'Are you sure you want to delete?',
        '',
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
    }
  };

  render() {
    const {onLongPress, editAction, onCropPress, crop} = this.props;

    return (
      <Container
        activeOpacity={0.5}
        style={utils.shadows.cropCardShadow}
        onPress={() => onCropPress(crop)}
        onLongPress={() => onLongPress(editAction)}>
        <Content>
          <LabelWrapper>
            <CropLabel>{crop.name}</CropLabel>
            {editAction ? (
              <ActionWrapper>
                <Touchable
                  activeOpacity={0.5}
                  onPress={() => this.handleAction('edit')}
                  hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                  <MDIcon name="edit" size={30} />
                </Touchable>
                <Touchable
                  activeOpacity={0.5}
                  onPress={() => this.handleAction('delete')}
                  hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                  <MDIcon name="delete" size={30} />
                </Touchable>
              </ActionWrapper>
            ) : null}
          </LabelWrapper>
        </Content>
      </Container>
    );
  }
}
