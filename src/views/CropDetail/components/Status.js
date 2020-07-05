import React from 'react';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

import utils from '../../../utils';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 30px;
  bottom: 10px;
`;

const ContentWrapper = styled.View`
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.textColor};
`;

const Image = styled.Image`
  margin-vertical: 6px;
  height: 70px;
  width: 70px;
`;

const ProgressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const VolumnText = styled.Text`
  font-weight: 600;
  color: ${props => props.textColor};
`;

export default class Water extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Text textColor={utils.colors.activate}>Temperature</Text>
            <Image
              source={require('../../../assets/images/Temperature/Temperature.png')}
            />
            <ProgressWrapper>
              <VolumnText
                textColor={utils.colors.activate}
                style={{marginRight: 5}}>
                28°C
              </VolumnText>
              <Progress.Bar
                progress={0.5}
                width={230}
                height={10}
                borderRadius={8}
                borderWidth={0}
                color={utils.colors.activate}
                unfilledColor={utils.colors.lightActivate}
              />
              <VolumnText
                textColor={utils.colors.activate}
                style={{marginLeft: 5}}>
                40°C
              </VolumnText>
            </ProgressWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Text textColor={utils.colors.carrot}>Humandity</Text>
            <Image
              source={require('../../../assets/images/DropWater/DropWater.png')}
            />
            <ProgressWrapper>
              <VolumnText
                textColor={utils.colors.carrot}
                style={{marginRight: 5}}>
                65%
              </VolumnText>
              <Progress.Bar
                progress={0.5}
                width={230}
                height={10}
                borderRadius={8}
                borderWidth={0}
                color={utils.colors.carrot}
                unfilledColor={utils.colors.lightCarrot}
              />
              <VolumnText
                textColor={utils.colors.carrot}
                style={{marginLeft: 5}}>
                100%
              </VolumnText>
            </ProgressWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Text textColor={utils.colors.carrot}>Flood</Text>
            <Image
              source={require('../../../assets/images/WaterCup/WaterCup.png')}
            />
            <ProgressWrapper>
              <VolumnText
                textColor={utils.colors.carrot}
                style={{marginRight: 5}}>
                0.3m
              </VolumnText>
              <Progress.Bar
                progress={0.5}
                width={230}
                height={10}
                borderRadius={8}
                borderWidth={0}
                color={utils.colors.carrot}
                unfilledColor={utils.colors.lightCarrot}
              />
              <VolumnText
                textColor={utils.colors.carrot}
                style={{marginLeft: 5}}>
                1m
              </VolumnText>
            </ProgressWrapper>
          </ContentWrapper>
        </Wrapper>
      </Container>
    );
  }
}
