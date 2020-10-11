import React from 'react';
import styled from 'styled-components/native';

import utils from '../../../utils';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

const TextWrapper = styled.View`
  left: 0px;
  right: 0px;
  position: absolute;
  align-items: center;
  bottom: ${utils.resizer.getHeight(390)}px;
`;

const Text = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: bold;
`;

const ImageWrapper = styled.View`
  align-items: center;
  flex: 0.6;
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(930)}px;
  height: ${utils.resizer.getHeight(930)}px;
`;

export default class ScheduleWatering extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <Image
            source={require('../../../assets/images/ScheduleWatering/ScheduleWatering.png')}
          />
        </ImageWrapper>
        <TextWrapper>
          <Text size={23}>Schedule Watering</Text>
          <Text size={17}>Smart System that works perfectly</Text>
          <Text size={17}>for watering your farm as you want</Text>
        </TextWrapper>
      </Wrapper>
    );
  }
}
