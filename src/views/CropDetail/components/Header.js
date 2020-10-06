import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import {dismissModal} from '../../../navigation/screen';

import utils from '../../../utils';

const Wrapper = styled.ImageBackground`
  flex: 0.5;
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

export default class Header extends React.PureComponent {
  render() {
    const {componentId, crop} = this.props;

    return (
      <Wrapper
        source={{
          uri: `${crop.image_name}`,
        }}>
        <Button
          activeOpacity={0.5}
          style={utils.shadows.textShadow}
          onPress={() => dismissModal(componentId)}>
          <MDIcon
            name="keyboard-arrow-left"
            size={35}
            color={utils.colors.black}
          />
          <Text>{crop.name}</Text>
        </Button>
      </Wrapper>
    );
  }
}
