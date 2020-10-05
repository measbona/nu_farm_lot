import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import {popBack} from '../../../navigation/screen';

import utils from '../../../utils';

const Wrapper = styled.View`
  padding-top: ${utils.devices.devicePaddingTop}px;
  min-height: ${utils.devices.isNotch() ? 70 : 50}px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${utils.colors.black};
`;

const Header = ({componentId}) => {
  return (
    <Wrapper>
      <Button
        onClick={() => popBack(componentId)}
        activeOpacity={0.5}
        style={utils.shadows.textShadow}>
        <MDIcon
          name="keyboard-arrow-left"
          size={35}
          color={utils.colors.black}
        />
        <Text>Back</Text>
      </Button>
    </Wrapper>
  );
};

export default Header;
