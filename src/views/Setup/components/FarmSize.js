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

const Divider = styled.Text``;

export default class FarmSize extends React.PureComponent {
  state = {
    farmWidth: null,
    farmLength: null,
    visible: false,
  };

  renderPickerSelect = dimensions => {
    const {farmWidth, farmLength} = this.state;

    const widthSize = ['Choose Width (㎡)', '1', '2', '3', '4', '5'];
    const heightSize = ['Choose Length (㎡)', '1', '2', '3', '4', '5'];
    const mapSize = dimensions === 'width' ? widthSize : heightSize;

    return (
      <PickerWrapper>
        <Picker
          style={{width: 200, height: 210, bottom: 23}}
          selectedValue={dimensions === 'width' ? farmWidth : farmLength}
          onValueChange={itemValue => {
            if (dimensions === 'width') {
              if (itemValue !== 'Choose Width (㎡)') {
                this.setState({farmWidth: itemValue});
              }
            } else {
              if (itemValue !== 'Choose Length (㎡)') {
                this.setState({farmLength: itemValue});
              }
            }
          }}>
          {mapSize.map(val => (
            <Picker.Item label={val} value={val} />
          ))}
        </Picker>
      </PickerWrapper>
    );
  };

  render() {
    const {visible, farmWidth, farmLength} = this.state;

    const enableColor = farmWidth === null && farmLength === null && true;
    const widthAndLength =
      farmWidth && farmLength
        ? `${farmWidth} x ${farmLength} ㎡`
        : 'Choose farm size';

    return (
      <>
        <Buttonwrapper>
          <FarmSizeWrapper>
            <FarmSizeText enableColor={enableColor}>
              {widthAndLength}
            </FarmSizeText>
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
            {this.renderPickerSelect('width')}
            <Divider>X</Divider>
            {this.renderPickerSelect('height')}
          </PickerSelectAnimate>
        ) : null}
      </>
    );
  }
}
