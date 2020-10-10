import React from 'react';
import styled from 'styled-components/native';

import {goToDashboard} from '../../../navigation/screen';
import utils from '../../../utils';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ImageWrapper = styled.View`
  align-items: center;
`;

const ContentWrapper = styled.View`
  left: 0;
  right: 0;
  margin-top: 20px;
  position: absolute;
  align-items: center;
  bottom: ${utils.resizer.getHeight(380)}px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: ${props => props.size}px;
  ${props => props.whiteColor && `color: white`}
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(930)}px;
  height: ${utils.resizer.getHeight(930)}px;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  border-radius: 50px;
  padding-vertical: 13px;
  background-color: rgba(124, 199, 81, 1);
  width: ${utils.devices.screenWidth - 64}px;
  bottom: ${utils.resizer.getHeight(100)}px;
`;

export default class SmartAlert extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <Image
            source={require('../../../assets/images/PowerfulSensor/PowerfulSensor.png')}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Text size={23}>Smart Alert</Text>
          <Text size={17}>Powerful sensor that can inform you</Text>
          <Text size={17}>all you need to know about your farm</Text>
        </ContentWrapper>
        <Button
          activeOpacity={0.5}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          onPress={() => goToDashboard(this.props.componentId)}>
          <Text whiteColor size={20}>
            Get Started
          </Text>
        </Button>
      </Wrapper>
    );
  }
}
