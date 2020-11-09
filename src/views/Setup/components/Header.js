import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import {popBack} from '../../../navigation/screen';

import utils from '../../../utils';

const Button = styled.TouchableOpacity`
  margin-top: ${utils.devices.devicePaddingTop}px;
  align-items: center;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${utils.colors.black};
`;

const Header = ({componentId}) => {
  return (
    <Button onPress={() => popBack(componentId)} activeOpacity={0.5}>
      <MDIcon name="keyboard-arrow-left" size={35} color={utils.colors.black} />
      <Text>Back</Text>
    </Button>
  );
};

export default Header;
