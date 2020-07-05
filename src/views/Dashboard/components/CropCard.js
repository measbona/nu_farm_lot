import React from 'react';
import styled from 'styled-components/native';

import utils from '../../../utils';

import CropInfo from './CropInfo';
import Humandity from './Humandity';

import {showCropDetail} from '../../../navigation/screen';

const Wrapper = styled.TouchableOpacity`
  padding-top: 12px;
`;

const CropCard = styled.View`
  justify-content: space-between;
  background-color: ${utils.colors.white};
  height: 200px;
  margin-horizontal: 16px;
  padding-vertical: 15px;
  border-radius: 40px;
`;

const Line = styled.View`
  border-width: 1px;
  margin-horizontal: 16px;
  border-color: ${utils.colors.border};
`;

export default class CropCards extends React.Component {
  handleCropData = crop => {
    const {componentId} = this.props;

    this.props.onCropPress(crop);
    showCropDetail({
      crop,
      componentId,
    });
  };

  render() {
    return (
      <Wrapper
        activeOpacity={0.5}
        onPress={() => this.handleCropData(this.props.crop)}>
        <CropCard style={utils.shadows.cropCardShadow}>
          <CropInfo {...this.props} />
          <Line />
          <Humandity {...this.props} />
        </CropCard>
      </Wrapper>
    );
  }
}
