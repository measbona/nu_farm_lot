import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import utils from '../../utils';

import Header from './components/Header';
import DetailBar from './components/DetailBar';

const Container = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
`;

const Section = styled.View`
  margin-vertical: 7px;
  margin-horizontal: 16px;
`;

const TitleWrapper = styled.View``;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${utils.colors.black};
`;

const widthAndroid = 265;
const heightAndroid = 200;
const widthIos = utils.devices.isIphoneX ? 255 : 230;
const heightIos = utils.devices.isIphoneX ? 190 : 210;

const Image = styled.Image`
  width: ${utils.resizer.getWidth(
    Platform.OS === 'ios' ? widthIos : widthAndroid,
  )}px;
  height: ${utils.resizer.getHeight(
    Platform.OS === 'ios' ? heightIos : heightAndroid,
  )}px;
`;

const Status = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
  justify-content: space-between;
`;

export default class CropDetail extends React.Component {
  renderContent = () => {
    const {crop} = this.props;
    return (
      <ContentWrapper>
        <Section>
          <TitleWrapper>
            <Title>Humandity Detail :</Title>
          </TitleWrapper>
          <Status>
            <Image
              source={require('../../assets/images/Temperature/Temperature.png')}
            />
            <DetailBar
              type="celsius"
              color={utils.colors.activate}
              unFieldCollor={utils.colors.lightActivate}
              max={40}
              min={crop.humandity.temperature}
            />
          </Status>
          <Status>
            <Image
              source={require('../../assets/images/DropWater/DropWater.png')}
            />
            <DetailBar
              type="percent"
              color={utils.colors.carrot}
              unFieldCollor={utils.colors.lightCarrot}
              max={100}
              min={crop.humandity.water_volume}
            />
          </Status>
          <Status>
            <Image
              source={require('../../assets/images/WaterCup/WaterCup.png')}
            />
            <DetailBar
              type="quantity"
              color={utils.colors.carrot}
              unFieldCollor={utils.colors.lightCarrot}
              max={1}
              min={crop.humandity.water_capacity}
            />
          </Status>
        </Section>
        <Section>
          <TitleWrapper>
            <Title>Water :</Title>
          </TitleWrapper>
          <Status>
            <Image
              source={require('../../assets/images/WaterTank/WaterTank.png')}
            />
            <DetailBar
              type="litre"
              color={utils.colors.water}
              unFieldCollor={utils.colors.lightWater}
              max={100}
              min={80}
            />
          </Status>
          <Status>
            <Image
              source={require('../../assets/images/WaterTime/WaterTime.png')}
            />
            <DetailBar
              type="litre"
              color={utils.colors.waterTime}
              unFieldCollor={utils.colors.lightWaterTime}
              max={8}
              min={4}
            />
          </Status>
        </Section>
      </ContentWrapper>
    );
  };

  render() {
    const {componentId, crop} = this.props;

    return (
      <Container>
        <Header componentId={componentId} crop={crop} />
        {this.renderContent()}
      </Container>
    );
  }
}
