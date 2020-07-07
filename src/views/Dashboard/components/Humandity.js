import React from 'react';
import styled from 'styled-components/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import utils from '../../../utils';

const HumandityWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 18px;
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
          <AnimatedCircularProgress
            rotation={360}
            size={80}
            width={10}
            fill={(crop.humandity.temperature * 100) / 32}
            tintColor={utils.colors.sky}
            backgroundColor={utils.colors.lightSky}>
            {() => (
              <TemperatureImage
                source={require('../../../assets/icons/crops/CropTemperature/CropTemperature.png')}
              />
            )}
          </AnimatedCircularProgress>
          <ResourceLabel textColor={utils.colors.sky}>
            {crop.humandity.temperature + '°C'}
          </ResourceLabel>
        </ResourceWrapper>
        <ResourceWrapper>
          <AnimatedCircularProgress
            rotation={360}
            size={80}
            width={10}
            fill={(crop.humandity.water_volume * 100) / 100}
            tintColor={utils.colors.carrot}
            backgroundColor={utils.colors.lightCarrot}>
            {() => (
              <WaterLevelImage
                source={require('../../../assets/icons/crops/WaterLevel/WaterLevel.png')}
              />
            )}
          </AnimatedCircularProgress>
          <ResourceLabel textColor={utils.colors.carrot}>
            {crop.humandity.water_volume + '%'}
          </ResourceLabel>
        </ResourceWrapper>
        <ResourceWrapper>
          <AnimatedCircularProgress
            rotation={360}
            size={80}
            width={10}
            fill={crop.humandity.water_capacity * 10 * 10}
            tintColor={utils.colors.carrot}
            backgroundColor={utils.colors.lightCarrot}>
            {() => (
              <WaterCapacityImage
                source={require('../../../assets/icons/crops/WaterCapacity/WaterCapacity.png')}
              />
            )}
          </AnimatedCircularProgress>
          <ResourceLabel textColor={utils.colors.carrot}>
            {crop.humandity.water_capacity + 'm'}
          </ResourceLabel>
        </ResourceWrapper>
      </HumandityWrapper>
    );
  }
}
