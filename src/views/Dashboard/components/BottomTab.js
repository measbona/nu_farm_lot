import React from 'react';
import styled from 'styled-components/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import utils from '../../../utils';
import Colors from '../../../utils/colors';

const Wrapper = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 25px;
  padding-bottom: 10px;
  height: 70px;
`;

const EditButton = styled.TouchableOpacity``;

const EditImage = styled.Image``;

const AddButton = styled.TouchableOpacity`
  padding-bottom: 49px;
`;

const AddImage = styled.Image``;

const DeleteButton = styled.TouchableOpacity``;

const DeleteImage = styled.Image``;

export default class BottomTab extends React.Component {
  render() {
    const yellow = Colors.yellow;
    return (
      <Wrapper style={utils.shadows.cropCardShadow}>
        <EditButton activeOpacity={0.5}>
          <EditImage source={require('../../../assets/icons/Edit/Edit.png')} />
        </EditButton>
        <AddButton activeOpacity={0.5}>
          <AnimatedCircularProgress
            rotation={72}
            size={70}
            width={10}
            fill={60}
            tintColor={yellow}>
            {() => (
              <AddImage source={require('../../../assets/icons/Add/Add.png')} />
            )}
          </AnimatedCircularProgress>
        </AddButton>
        <DeleteButton activeOpacity={0.5}>
          <DeleteImage
            source={require('../../../assets/icons/Trash/Trash.png')}
          />
        </DeleteButton>
      </Wrapper>
    );
  }
}
