import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

import utils from '../../../utils';

const Container = styled.View`
  background-color: ${utils.colors.lightGreen};
  padding-top: ${utils.devices.devicePaddingTop}px;
  min-height: ${utils.devices.isNotch() ? 70 : 50}px;
`;

const Wrapper = styled.View`
  min-height: 60px;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 16px;
`;

const Notification = styled.View`
  padding: 12px;
`;

const BadgeWrapper = styled.View`
  right: 4px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-width: 2px;
  position: absolute;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-color: ${utils.colors.lightGreen};
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 12px;
`;

const WeatherForecast = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Image = styled.Image`
  aspect-ratio: 1;
  width: ${utils.resizer.getWidth(200)}px;
  height: ${utils.resizer.getHeight(200)}px;
`;

const Column = styled.View`
  flex: 1;
  padding-vertical: 4px;
  margin-left: 15px;
  justify-content: space-between;
`;

const ForcastText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const Header = ({cropSize, weatherDetail, mounted}) => {
  const weatherCode = weatherDetail && weatherDetail.weather_code.value;
  const weatherType = utils.weather.getWeatherCode(weatherCode);
  // eslint-disable-next-line prettier/prettier
  const weatherTemp = weatherDetail && weatherDetail.temp.value.toFixed() || 'Nan';
  // eslint-disable-next-line prettier/prettier
  const precipitationName = weatherCode && weatherCode.replace(/(^|_)./g, s => s.slice(-1).toUpperCase()) || 'NaN';

  return (
    <Container style={utils.shadows.cropCardShadow}>
      <Wrapper>
        <WeatherForecast>
          {mounted ? (
            <>
              <Image source={weatherType} />
              <Column>
                <ForcastText>{`Temperature : ${weatherTemp} °C`}</ForcastText>
                <ForcastText>{`Precipitation : ${precipitationName}`}</ForcastText>
              </Column>
            </>
          ) : (
            <ActivityIndicator
              style={{marginLeft: 50, marginTop: 15}}
              size="small"
              color="black"
            />
          )}
        </WeatherForecast>
        <Notification>
          <FontAwsome5 name="seedling" size={30} />
          <BadgeWrapper>
            <BadgeText>{cropSize}</BadgeText>
          </BadgeWrapper>
        </Notification>
        <Notification>
          <FontAwsome name="bell" size={30} />
          <BadgeWrapper>
            <BadgeText>1</BadgeText>
          </BadgeWrapper>
        </Notification>
      </Wrapper>
    </Container>
  );
};

export default Header;
