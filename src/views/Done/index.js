import React from 'react';
import styled from 'styled-components/native';

import utils from '../../utils';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image``;

const LabelWrapper = styled.View`
  align-items: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;

const Label = styled.Text`
  color: ${utils.colors.blue};
  font-size: ${props => props.size};
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding-bottom: 10px;
`;

const StartButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  bottom: 90px;
`;

const ButtonText = styled.Text`
  font-size: ${props => props.size};
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  padding: 2px 0px 2px 0px;
`;

export default class Done extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Image source={require('../../assets/images/Done/Done.png')} />
        <LabelWrapper>
          <Label size={20}>Your're good to go</Label>
        </LabelWrapper>
        <StartButton
          activeOpacity={0.5}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
          onPress={() => alert('Dashboard')}>
          <ButtonText size={23}>Done</ButtonText>
        </StartButton>
      </Wrapper>
    );
  }
}
