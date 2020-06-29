import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

import {goToSelectFarm} from '../../../navigation/screen';

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

const StartButton = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  justify-content: center;
  bottom: 90px;
`;

const MDIcons = styled(MDIcon)`
  position: absolute;
  left: 115px;
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
          <Divider />
          <Text size={18}>Powerful sensor that can inform you</Text>
          <Text size={18}>all you need to know about your farm</Text>
        </BottomTexttWrapper>
        <StartButton
          activeOpacity={0.5}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          onPress={() => goToSelectFarm(this.props.componentId)}>
          <Text size={23}>Get Started</Text>
          <MDIcons name="keyboard-arrow-right" size={35} />
        </StartButton>
      </Wrapper>
    );
  }
}
