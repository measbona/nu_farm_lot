import React from 'react';
import {TextInput} from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import utils from '../../../utils';

const Buttonwrapper = styled.View`
  height: 50px;
  width: 240px;
  border-width: 1px;
  border-radius: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-color: ${utils.colors.black};
  padding-left: 20px;
`;

const TextInputArea = styled.View`
  flex: 1;
  align-items: center;
`;

const CameraButtonWrapper = styled.TouchableOpacity`
  margin-horizontal: 10px;
`;

const Divider = styled.View`
  border-width: 1px;
  height: 30px;
`;

export default class FarmName extends React.PureComponent {
  render() {
    return (
      <Buttonwrapper>
        <TextInputArea>
          <TextInput placeholder="Choose your farm" onChangeText={() => {}} />
        </TextInputArea>
        <Divider />
        <CameraButtonWrapper activeOpacity={0.5}>
          <MDIcon name="camera-alt" size={25} />
        </CameraButtonWrapper>
      </Buttonwrapper>
    );
  }
}
