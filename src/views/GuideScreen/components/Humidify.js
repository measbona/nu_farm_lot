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
  bottom: 113px;
`;

const Text = styled.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding: 2px 0px 2px 0px;
`;

const ImageWrapper = styled.View`
  align-items: center;
  bottom: 50px;
`;

const MultipleImageWrapper = styled.View`
  flex-direction: row;
`;

const Divider = styled.View`
  padding: 0px 13px 0px 13px;
`;

const Image = styled.Image``;

const Space = styled.View`
  padding: 5px 0px 5px 0px;
`;

export default class Humidify extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <Image
            source={require('../../../assets/images/Temperature/Temperature.png')}
          />
          <MultipleImageWrapper>
            <Image
              source={require('../../../assets/images/WaterCup/WaterCup.png')}
            />
            <Divider />
            <Image
              source={require('../../../assets/images/DropWater/DropWater.png')}
            />
          </MultipleImageWrapper>
        </ImageWrapper>
        <BottomTexttWrapper>
          <Text size={23} weightFont>
            Detect your farm's humidify,
          </Text>
          <Text size={23}>temperature and flood</Text>
          <Space />
          <Text size={18}>In just a few simple steps</Text>
        </BottomTexttWrapper>
      </Wrapper>
    );
  }
}
