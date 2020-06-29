import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import FarmSelected from '../../globalcomponent/FarmSelected';

import {goToFarmSize} from '../../navigation/screen';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image``;

const AnimateImage = Animatable.createAnimatableComponent(Image);

const LabelWrapper = styled.View`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Label = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
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
          source={require('../../assets/images/PlantsOnHand/PlantsOnHand.png')}
          animation="fadeIn"
        />
        <LabelWrapper>
          <Label size={23}>Let's choose your farm</Label>
        </LabelWrapper>
        <FarmSelected />
        <StartButton
          activeOpacity={0.5}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          onPress={() => goToFarmSize(this.props.componentId)}>
          <ButtonText size={23}>Next</ButtonText>
          <MDIcons name="keyboard-arrow-right" size={35} />
        </StartButton>
      </Wrapper>
    );
  }
}
