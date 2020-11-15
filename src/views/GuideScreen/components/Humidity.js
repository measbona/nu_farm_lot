import React from 'react';
import styled from 'styled-components/native';

import utils from '../../../utils';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

const TextWrapper = styled.View`
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  align-items: center;
  padding-bottom: ${utils.resizer.getHeight(370)}px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: ${props => props.size}px;
`;

const ImageWrapper = styled.View`
  align-items: center;
  flex: 0.6;
`;

const IconWrapper = styled.View`
  flex-direction: row;
  margin-horizontal: 50px;
  ${props => props.row && `align-self: stretch`};
  ${props => props.row && `justify-content: space-between`};
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(550)}px;
  height: ${utils.resizer.getHeight(550)}px;
`;

export default class Humidity extends React.PureComponent {
  render() {
    return (
      <Container>
        <ImageWrapper>
          <IconWrapper>
            <Image
              source={require('../../../assets/images/Temperature/Temperature.png')}
            />
          </IconWrapper>
          <IconWrapper row>
            <Image
              source={require('../../../assets/images/WaterCup/WaterCup.png')}
            />
            <Image
              source={require('../../../assets/images/DropWater/DropWater.png')}
            />
          </IconWrapper>
        </ImageWrapper>
        <TextWrapper>
          <Text size={23}>Detect your farm's humidity,</Text>
          <Text size={23}>temperature and flood</Text>
          <Text size={17}>In just a few simple steps</Text>
        </TextWrapper>
      </Container>
    );
  }
}
