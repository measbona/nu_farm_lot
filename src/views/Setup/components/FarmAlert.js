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

const FarmAlertWrapper = styled.View`
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

export default class FarmAlert extends React.PureComponent {
  state = {
    higherTemperature: null,
    lowerTemperature: null,
    highWaterLevel: null,
    visible: false,
  };

  renderPickerSelect = (array, type, state, Title) => {
    return (
      <PickerWrapper>
        <Picker
          style={{width: 135, height: 210, bottom: 23}}
          selectedValue={state}
          onValueChange={itemValue => {
            if (type === 'higher_temp' && itemValue !== Title) {
              this.setState({higherTemperature: itemValue});
            } else if (type === 'lower_temp' && itemValue !== Title) {
              this.setState({lowerTemperature: itemValue});
            } else if (type === 'high_water_level' && itemValue !== Title) {
              this.setState({highWaterLevel: itemValue});
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
    const {
      visible,
      higherTemperature,
      lowerTemperature,
      highWaterLevel,
    } = this.state;

    const highTempValue = ['Temp Higher', '35', '40', '45'];
    const lowerTempValue = ['Temp Lower', '30', '25', '20'];
    const highWaterLevelValue = ['Water Higher', '1', '2', '3'];
    const enableColor =
      higherTemperature === null &&
      lowerTemperature === null &&
      highWaterLevel === null &&
      true;
    const Label =
      higherTemperature && lowerTemperature && highWaterLevel
        ? `${higherTemperature} / ${lowerTemperature} / ${highWaterLevel}`
        : 'Please set up smart alert';

    return (
      <>
        <Buttonwrapper>
          <FarmAlertWrapper>
            <FarmSizeText enableColor={enableColor}>{Label}</FarmSizeText>
          </FarmAlertWrapper>
          <DropDownIcon
            activeOpacity={0.5}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={() => this.setState({visible: !visible})}>
            <MDIcon name="expand-more" size={30} />
          </DropDownIcon>
        </Buttonwrapper>
        {visible ? (
          <PickerSelectAnimate animation="slideInUp" duration={500}>
            {this.renderPickerSelect(
              highTempValue,
              'higher_temp',
              higherTemperature,
              'Temp Higher',
            )}
            <Divider />
            {this.renderPickerSelect(
              lowerTempValue,
              'lower_temp',
              lowerTemperature,
              'Temp Lower',
            )}
            <Divider />
            {this.renderPickerSelect(
              highWaterLevelValue,
              'high_water_level',
              highWaterLevel,
              'Water Higher',
            )}
          </PickerSelectAnimate>
        ) : null}
      </>
    );
  }
}
