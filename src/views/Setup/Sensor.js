import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import utils from '../../utils';

import {goToWaterSchedule} from '../../navigation/screen';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image``;

const AnimateImage = Animatable.createAnimatableComponent(Image);

const LabelWrapper = styled.View`
  align-items: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;

const Label = styled.Text`
  color: ${utils.colors.blue};
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding-bottom: 10px;
`;

const StartButton = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  justify-content: center;
  bottom: 90px;
`;

const MDIcons = styled(MDIcon)`
  position: absolute;
  left: 50px;
`;

const ButtonText = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding: 2px 0px 2px 0px;
`;

export default class SelectFarm extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <AnimateImage
          source={require('../../assets/images/Sensor/Sensor.png')}
          animation="rotate"
          iterationCount="infinite"
          iterationDelay={2000}
        />
        <LabelWrapper>
          <Label size={20}>Recommand 2 sensors for tomato farm</Label>
          <Label size={16}>a sensor can only detect 5m2 around itself</Label>
        </LabelWrapper>
        <StartButton
          activeOpacity={0.5}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          onPress={() => goToWaterSchedule(this.props.componentId)}>
          <ButtonText size={23}>Next</ButtonText>
          <MDIcons name="keyboard-arrow-right" size={35} />
        </StartButton>
      </Wrapper>
    );
  }
}
