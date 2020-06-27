import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

import utils from '../utils';

const Buttonwrapper = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  border-color: ${utils.colors.black};
  height: 50px;
  width: 240px;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  position: absolute;
  left: 35px;
  font-size: ${props => props.size};
  font-weight: ${props => (props.weightFont ? 600 : 500)};
  color: ${utils.colors.grey};
  padding: 2px 0px 2px 0px;
`;

const Icon = styled(MDIcon)`
  position: absolute;
  right: 10px;
`;

export default class FarmSelected extends React.Component {
  render() {
    return (
      <>
        <Buttonwrapper activeOpacity={0.7}>
          <ButtonText size={18}>Choose your farm</ButtonText>
          <Icon name="keyboard-arrow-right" size={34} />
        </Buttonwrapper>
      </>
    );
  }
}
