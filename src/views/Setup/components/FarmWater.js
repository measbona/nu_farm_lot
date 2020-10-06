import React from 'react';
import {Picker} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import utils from '../../../utils';

const Buttonwrapper = styled.View`
  height: 50px;
  width: 240px;
  border-width: 1px;
  position: relative;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  border-color: ${utils.colors.black};
`;

const PickerSelectWrapper = styled.View`
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom: 0px;
  position: absolute;
  align-items: center;
  flex-direction: row;
  padding-bottom: 16px;
  justify-content: center;
  background-color: #cbced5;
`;

const PickerSelectAnimate = Animatable.createAnimatableComponent(
  PickerSelectWrapper,
);

const DropDownIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

const FarmSizeWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const FarmSizeText = styled.Text`
  ${props => props.enableColor && `color: grey`};
  font-size: 16px;
`;

const PickerWrapper = styled.View`
  top: 20px;
  align-items: center;
`;

const Divider = styled.View`
  border-width: 1px;
  border-color: black;
  height: 20px;
`;

export default class FarmWater extends React.PureComponent {
  state = {
    water: null,
    waterTime: null,
    waterLevel: null,
    visible: false,
  };

  renderPickerSelect = (array, type, state, Title) => {
    return (
      <PickerWrapper>
        <Picker
          style={{width: 135, height: 210, bottom: 23}}
          selectedValue={state}
          onValueChange={itemValue => {
            if (type === 'water' && itemValue !== Title) {
              this.setState({water: itemValue});
            } else if (type === 'water_time' && itemValue !== Title) {
              this.setState({waterTime: itemValue});
            } else if (type === 'water_level' && itemValue !== Title) {
              this.setState({waterLevel: itemValue});
            }
          }}>
          {array.map(val => (
            <Picker.Item label={val} value={val} />
          ))}
        </Picker>
      </PickerWrapper>
    );
  };

  render() {
    const {visible, water, waterTime, waterLevel} = this.state;

    const waterValue = ['Hour', '1', '2', '3', '4', '5'];
    const waterTimeValue = [
      'Minute',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ];
    const waterLevelValue = ['Level', 'Low', 'Medium', 'High'];
    const enableColor =
      water === null && waterTime === null && waterLevel === null && true;
    const Label =
      water && waterTime && waterLevel
        ? `${water} / ${waterTime} / ${waterLevel}`
        : 'Please set up water';

    return (
      <>
        <Buttonwrapper>
          <FarmSizeWrapper>
            <FarmSizeText enableColor={enableColor}>{Label}</FarmSizeText>
          </FarmSizeWrapper>
          <DropDownIcon
            activeOpacity={0.5}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={() => this.setState({visible: !visible})}>
            <MDIcon name="expand-more" size={30} />
          </DropDownIcon>
        </Buttonwrapper>
        {visible ? (
          <PickerSelectAnimate animation="slideInUp" duration={500}>
            {this.renderPickerSelect(waterValue, 'water', water, 'Hour')}
            <Divider />
            {this.renderPickerSelect(
              waterTimeValue,
              'water_time',
              waterTime,
              'Minute',
            )}
            <Divider />
            {this.renderPickerSelect(
              waterLevelValue,
              'water_level',
              waterLevel,
              'Level',
            )}
          </PickerSelectAnimate>
        ) : null}
      </>
    );
  }
}
