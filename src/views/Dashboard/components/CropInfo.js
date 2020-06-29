import React from 'react';
import styled from 'styled-components/native';

import utils from '../../../utils';

const CropWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 30px;
`;

const CropImage = styled.Image``;

const CropNameWrapper = styled.View`
  align-items: center;
  left: 10px;
`;

const CropName = styled.Text`
  color: ${utils.colors.darkGreen}
  font-size: ${props => props.size}px;
  font-weight: 600;
`;

const CropHealth = styled.View`
  flex-direction: row;
`;

const HealthLevel1 = styled.View`
  height: 7px;
  width: 20px;
  background-color: ${utils.colors.veryDarkGray};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const HealthLevel2 = styled.View`
  height: 7px;
  width: 20px;
  background-color: ${utils.colors.veryDarkGray};
  margin-horizontal: 2px;
`;

const HealthLevel3 = styled.View`
  height: 7px;
  width: 20px;
  background-color: ${utils.colors.veryDarkGray};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export default class CropInfo extends React.Component {
  render() {
    const {crop} = this.props;
    return (
      <CropWrapper>
        <CropImage
          source={require('../../../assets/icons/crops/Tomato/Tomato.png')}
        />
        <CropNameWrapper>
          <CropName size={22}>{crop.crop_name}</CropName>
          <CropName size={17}>{crop.land_size + `㎡`}</CropName>
        </CropNameWrapper>
        <CropHealth>
          <HealthLevel1 />
          <HealthLevel2 />
          <HealthLevel3 />
        </CropHealth>
      </CropWrapper>
    );
  }
}
