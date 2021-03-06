import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

import utils from '../../../utils';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

const Animation = Animatable.createAnimatableComponent(Wrapper);

const ProfileAndImageWrapper = styled.View`
  align-items: center;
  flex: 0.6;
`;

const TexttWrapper = styled.View`
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  align-items: center;
  bottom: ${utils.resizer.getHeight(470)}px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: ${props => props.size}px;
`;

const ImageWrapper = styled.View`
  border-radius: 360px;
  padding: ${utils.resizer.getWidth(290)}px;
  background-color: ${utils.colors.orange};
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(500)}px;
  height: ${utils.resizer.getHeight(500)}px;
`;

export default class Farmer extends React.PureComponent {
  render() {
    return (
      <Animation animation="fadeIn">
        <ProfileAndImageWrapper>
          <ImageWrapper>
            <Image
              source={require('../../../assets/images/Farmer/Farmer.png')}
            />
          </ImageWrapper>
        </ProfileAndImageWrapper>
        <TexttWrapper>
          <Text size={23}>Welcome to NU Farm IoT</Text>
          <Text size={17}>Enhance farmer with technology</Text>
        </TexttWrapper>
      </Animation>
    );
  }
}
