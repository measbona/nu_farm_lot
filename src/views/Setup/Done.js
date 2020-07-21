import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

import utils from '../../utils';

import {goToDashboard} from '../../navigation/screen';

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
  position: absolute;
  justify-content: center;
  bottom: 90px;
`;

const ButtonText = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding: 2px 0px 2px 0px;
`;

export default class Done extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <AnimateImage
          source={require('../../assets/images/Done/Done.png')}
          animation="bounceIn"
          iterationDelay={200}
        />
        <LabelWrapper>
          <Label size={20}>Your're good to go</Label>
        </LabelWrapper>
        <StartButton
          activeOpacity={0.5}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          onPress={() => goToDashboard()}>
          <ButtonText size={23}>Done</ButtonText>
        </StartButton>
      </Wrapper>
    );
  }
}
