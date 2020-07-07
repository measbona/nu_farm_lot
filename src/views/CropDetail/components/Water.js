import React from 'react';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

import utils from '../../../utils';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.View``;

const ContentWrapper = styled.View`
  padding-vertical: 20px;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.textColor};
`;

const Image = styled.Image`
  margin-vertical: 10px;
`;

const ProgressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const VolumnText = styled.Text`
  font-weight: 600;
  color: ${props => props.textColor};
`;

const Button = styled.TouchableOpacity`
  bottom: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 150px;
  height: 40px;
  background-color: ${utils.colors.water};
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${utils.colors.white};
`;

export default class Water extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Text textColor={utils.colors.water}>Water Tank</Text>
            <Image
              source={require('../../../assets/images/WaterTank/WaterTank.png')}
            />
            <ProgressWrapper>
              <VolumnText
                textColor={utils.colors.water}
                style={{marginRight: 5}}>
                500L
              </VolumnText>
              <Progress.Bar
                progress={0.5}
                width={230}
                height={10}
                borderRadius={8}
                borderWidth={0}
                color={utils.colors.water}
                unfilledColor={utils.colors.lightWater}
              />
              <VolumnText
                textColor={utils.colors.water}
                style={{marginLeft: 5}}>
                1000L
              </VolumnText>
            </ProgressWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Text textColor={utils.colors.waterTime}>Water Times / Day</Text>
            <Image
              source={require('../../../assets/images/WaterTime/WaterTime.png')}
            />
            <ProgressWrapper>
              <VolumnText
                textColor={utils.colors.waterTime}
                style={{marginRight: 5}}>
                500L
              </VolumnText>
              <Progress.Bar
                progress={0.5}
                width={230}
                height={10}
                borderRadius={8}
                borderWidth={0}
                color={utils.colors.waterTime}
                unfilledColor={utils.colors.lightWaterTime}
              />
              <VolumnText
                textColor={utils.colors.waterTime}
                style={{marginLeft: 5}}>
                1000L
              </VolumnText>
            </ProgressWrapper>
          </ContentWrapper>
        </Wrapper>
        <Button activeOpacity={0.5}>
          <ButtonText>Water Now</ButtonText>
        </Button>
      </Container>
    );
  }
}
