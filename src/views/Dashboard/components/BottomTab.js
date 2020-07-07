import React from 'react';
import styled from 'styled-components/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import utils from '../../../utils';
import Colors from '../../../utils/colors';
import device from '../../../utils/Devices';

const Wrapper = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 25px;
  padding-bottom: 10px;
  height: ${device.isIphoneX ? 70 : 60}px;
`;

const EditButton = styled.TouchableOpacity``;

const EditImage = styled.Image``;

const AddButton = styled.TouchableOpacity`
  padding-bottom: 49px;
`;

const AddImage = styled.Image``;

const DeleteButton = styled.TouchableOpacity``;

const DeleteImage = styled.Image``;

const Divider = styled.View`
  align-items: center;
  padding-bottom: 49px;
`;

export default class BottomTab extends React.Component {
  handleTickButton = () => {
    const {onDestroyChange, onEditChange, edit, destroy} = this.props;

    if (edit) {
      onEditChange(false);
    } else {
      onDestroyChange(false);
    }
  };

  handleIconRender = () => {
    const {edit, destroy} = this.props;

    if (edit || destroy) {
      return (
        <AnimatedCircularProgress
          rotation={82}
          size={70}
          width={10}
          fill={55}
          tintColor={Colors.yellow}>
          {() => (
            <AddImage source={require('../../../assets/icons/Tick/Tick.png')} />
          )}
        </AnimatedCircularProgress>
      );
    } else {
      return (
        <AnimatedCircularProgress
          rotation={82}
          size={70}
          width={10}
          fill={55}
          tintColor={Colors.yellow}>
          {() => (
            <AddImage source={require('../../../assets/icons/Add/Add.png')} />
          )}
        </AnimatedCircularProgress>
      );
    }
  };

  render() {
    const {onDestroyChange, onEditChange, edit, destroy} = this.props;

    return (
      <Wrapper style={utils.shadows.cropCardShadow}>
        {edit || destroy ? (
          <Divider />
        ) : (
          <EditButton activeOpacity={0.5} onPress={() => onEditChange(true)}>
            <EditImage
              source={require('../../../assets/icons/Edit/Edit.png')}
            />
          </EditButton>
        )}
        <AddButton activeOpacity={0.9} onPress={this.handleTickButton}>
          {this.handleIconRender()}
        </AddButton>
        {edit || destroy ? (
          <Divider />
        ) : (
          <DeleteButton
            activeOpacity={0.5}
            onPress={() => onDestroyChange(true)}>
            <DeleteImage
              source={require('../../../assets/icons/Trash/Trash.png')}
            />
          </DeleteButton>
        )}
      </Wrapper>
    );
  }
}
