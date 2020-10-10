import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import {goToSetup} from '../../../navigation/screen';

import utils from '../../../utils';

const Container = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
`;

const Content = styled.View`
  border-radius: 10px;
  background-color: white;
  width: ${utils.devices.screenWidth - 30}px;
  height: ${utils.devices.isIphoneX ? 165 : 162}px;
`;

const LabelWrapper = styled.View`
  padding: 15px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${utils.colors.lightGreen};
`;

const CropLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ActionWrapper = styled.View`
  right: 0px;
  position: absolute;
  flex-direction: row;
`;

const Touchable = styled.TouchableOpacity`
  margin-horizontal: 10px;
`;

const Image = styled.Image`
  flex: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: ${utils.devices.screenWidth - 30}px;
  height: ${utils.devices.isIphoneX ? 165 : 162}px;
`;

export default class CropCards extends React.Component {
  onDeletePress = () => {
    return null;
  };

  render() {
    const {
      onLongPress,
      editAction,
      onCropPress,
      crop,
      componentId,
    } = this.props;
    const image =
      {uri: crop.image_url} ||
      require('../../../assets/images/placeholder.png');

    return (
      <Container
        activeOpacity={0.5}
        style={utils.shadows.cropCardShadow}
        onPress={() => onCropPress(crop)}
        onLongPress={() => onLongPress(editAction)}>
        <Content>
          <LabelWrapper>
            <CropLabel>{crop.name}</CropLabel>
            {editAction ? (
              <ActionWrapper>
                <Touchable
                  activeOpacity={0.5}
                  onPress={() => goToSetup(componentId, {action: 'edit', crop})}
                  hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                  <MDIcon name="edit" size={30} />
                </Touchable>
                <Touchable
                  activeOpacity={0.5}
                  onPress={this.onDeletePress}
                  hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                  <MDIcon name="delete" size={30} />
                </Touchable>
              </ActionWrapper>
            ) : null}
          </LabelWrapper>
          <Image source={image} />
        </Content>
      </Container>
    );
  }
}
