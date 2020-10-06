import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

import utils from '../../../utils';

const Wrapper = styled.View`
  justify-content: center;
  background-color: ${utils.colors.lightGreen};
  min-height: ${utils.devices.isNotch() ? 70 : 50}px;
`;

const Action = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  padding-bottom: ${utils.devices.isNotch() ? 15 : 0}px;
  justify-content: space-between;
`;

const Touchable = styled.TouchableOpacity``;

export default class BottomTab extends React.Component {
  render() {
    return (
      <Wrapper>
        <Action>
          <Touchable>
            <MDIcon name="edit" size={40} />
          </Touchable>
          <Touchable>
            <MDIcon name="add-circle" size={40} />
          </Touchable>
          <Touchable>
            <MDIcon name="delete" size={40} />
          </Touchable>
        </Action>
      </Wrapper>
    );
  }
}
