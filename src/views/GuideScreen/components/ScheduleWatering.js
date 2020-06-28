import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BottomTexttWrapper = styled.View`
  align-items: center;
  position: absolute;
  padding-vertical: 40px;
  bottom: 118px;
`;

const Text = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding: 2px 0px 2px 0px;
`;

const ImageWrapper = styled.View`
  align-items: center;
  bottom: 40px;
`;

const Image = styled.Image``;

const Divider = styled.View`
  padding: 5px 0px 5px 0px;
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
        <BottomTexttWrapper>
          <Text size={23} weightFont>Schedule Watering</Text>
          <Divider />
          <Text size={18}>Smart System that works perfectly</Text>
          <Text size={18}>for watering your farm as you want</Text>
        </BottomTexttWrapper>
      </Wrapper>
    );
  }
}
