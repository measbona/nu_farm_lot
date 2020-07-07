import React from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toggle from 'react-native-toggle-element';
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

const ActivateButton = styled.TouchableOpacity`
  margin-vertical: 10px;
`;

const ProgressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const VolumnText = styled.Text`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.textColor};
`;

const ToggleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export default class Water extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Text textColor={utils.colors.activate}>Activated Sensors</Text>
            <ActivateButton activeOpacity={0.5}>
              <AntDesign name="play" size={60} color={utils.colors.activate} />
            </ActivateButton>
            <ProgressWrapper>
              <VolumnText
                textColor={utils.colors.activate}
                style={{marginRight: 10}}>
                1
              </VolumnText>
              <Progress.Bar
                progress={0.5}
                width={230}
                height={10}
                borderRadius={8}
                borderWidth={0}
                color={utils.colors.activate}
                unfilledColor={'#7DDDE9'}
              />
              <VolumnText
                textColor={utils.colors.activate}
                style={{marginLeft: 10}}>
                2
              </VolumnText>
            </ProgressWrapper>
          </ContentWrapper>
          <ToggleWrapper>
            <Text textColor={utils.colors.activate}>Sensor 1</Text>
            <Toggle
              thumbButton={{
                height: 25,
                width: 25,
                activeBackgroundColor: `${utils.colors.white}`,
                inActiveBackgroundColor: `${utils.colors.white}`,
              }}
              trackBar={{
                inActiveBackgroundColor: `${utils.colors.lightActivate}`,
                activeBackgroundColor: `${utils.colors.activate}`,
                width: 45,
                height: 25,
                borderWidth: 4,
              }}
            />
          </ToggleWrapper>
          <ToggleWrapper>
            <Text textColor={utils.colors.activate}>Sensor 2</Text>
            <Toggle
              thumbButton={{
                height: 25,
                width: 25,
                activeBackgroundColor: `${utils.colors.white}`,
                inActiveBackgroundColor: `${utils.colors.white}`,
              }}
              trackBar={{
                inActiveBackgroundColor: `${utils.colors.lightActivate}`,
                activeBackgroundColor: `${utils.colors.activate}`,
                width: 45,
                height: 25,
                borderWidth: 4,
              }}
            />
          </ToggleWrapper>
        </Wrapper>
      </Container>
    );
  }
}
