import React from 'react';
import styled from 'styled-components/native';

import utils from '../../../utils';

const HumandityWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 35px;
`;

const ResourceWrapper = styled.View`
  align-items: center;
`;

const ResourceLabel = styled.Text`
  font-size: 18px;
  font-weight: 600;
  ${props => props.textColor && `color: ${props.textColor}`};
`;

const TemperatureImage = styled.Image``;

const WaterLevelImage = styled.Image``;

const WaterCapacityImage = styled.Image``;

export default class Humandity extends React.Component {
  render() {
    const {crop} = this.props;
    return (
      <HumandityWrapper>
        <ResourceWrapper>
          <TemperatureImage
            source={require('../../../assets/icons/crops/CropTemperature/CropTemperature.png')}
          />
          <ResourceLabel textColor={utils.colors.blue}>
            {crop.humandity.temperature + '°C'}
          </ResourceLabel>
        </ResourceWrapper>
        <ResourceWrapper>
          <WaterLevelImage
            source={require('../../../assets/icons/crops/WaterLevel/WaterLevel.png')}
          />
          <ResourceLabel textColor={utils.colors.orange}>
            {crop.humandity.water_volume + '%'}
          </ResourceLabel>
        </ResourceWrapper>
        <ResourceWrapper>
          <WaterCapacityImage
            source={require('../../../assets/icons/crops/WaterCapacity/WaterCapacity.png')}
          />
          <ResourceLabel textColor={utils.colors.orange}>
            {crop.humandity.water_capacity + 'm'}
          </ResourceLabel>
        </ResourceWrapper>
      </HumandityWrapper>
    );
  }
}
