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
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
`;

const ImageWrapper = styled.View`
  align-items: center;
`;

const ImageRowWrapper = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-horizontal: 50px;
  justify-content: space-between;
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(550)}px;
  height: ${utils.resizer.getHeight(550)}px;
`;

export default class Humidify extends React.PureComponent {
  render() {
    return (
      <Container>
        <ImageWrapper>
          <Image
            source={require('../../../assets/images/Temperature/Temperature.png')}
          />
          <ImageRowWrapper>
            <Image
              source={require('../../../assets/images/WaterCup/WaterCup.png')}
            />
            <Image
              source={require('../../../assets/images/DropWater/DropWater.png')}
            />
          </ImageRowWrapper>
        </ImageWrapper>
        <TextWrapper>
          <Text size={23} weightFont>
            Detect your farm's humidify,
          </Text>
          <Text size={23}>temperature and flood</Text>
          <Text size={17}>In just a few simple steps</Text>
        </TextWrapper>
      </Container>
    );
  }
}
