import React from 'react';
import styled from 'styled-components/native';

import {goToSelectFarm} from '../../../navigation/screen';
import utils from '../../../utils';

const ISIPHONEX = utils.devices.isIphoneX ? 245 : 200;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

const ImageWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BottomTexttWrapper = styled.View`
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  align-items: center;
  padding-bottom: ${utils.resizer.getHeight(ISIPHONEX)}px;
`;

const Text = styled.Text`
  font-size: ${props => props.size}px;
  ${props => props.whiteColor && `color: white`}
  font-weight: ${props => (props.weightFont ? 600 : 500)};
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(930)}px;
  height: ${utils.resizer.getHeight(930)}px;
`;

const StartButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  background-color: rgba(124, 199, 81, 1);
`;

const Divider = styled.View`
  padding-vertical: 5px;
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
        <BottomTexttWrapper>
          <Text size={23} weightFont>
            Smart Alert
          </Text>
          <Text size={17}>Powerful sensor that can inform you</Text>
          <Text size={17}>all you need to know about your farm</Text>
          <Divider />
          <StartButton
            activeOpacity={0.5}
            hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
            onPress={() => goToSelectFarm(this.props.componentId)}>
            <Text whiteColor size={20}>
              Get Started
            </Text>
          </StartButton>
        </BottomTexttWrapper>
      </Wrapper>
    );
  }
}
