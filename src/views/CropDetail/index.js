import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import ADIcon from 'react-native-vector-icons/AntDesign';

import utils from '../../utils';

import Water from './components/Water';
import Sensor from './components/Sensor';
import Status from './components/Status';

const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const HeadWrapper = styled.View`
  padding-vertical: 16px;
  padding-horizontal: 5px;
  background-color: ${utils.colors.lightGreen};
`;

const BackButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const BackButtonText = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${utils.colors.darkGreen};
`;

const ImageWrapper = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.Image`
  width: 160px;
  height: 160px;
`;

const Divider = styled.View`
  padding: 10px 0px 10px 0px;
`;

// ++++++++++++++++++++++++++++++++++++++++

const PaginationWrapper = styled.View`
  background-color: ${utils.colors.seaFoam};
  width: 90px;
  height: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const PaginationText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${utils.colors.white};
`;

export default class CropDetail extends React.Component {
  state = {
    index: 1,
  };

  renderImage = () => {
    const {index} = this.state;

    if (index === 0) {
      return (
        <>
          <ImageWrapper>
            <Image source={require('../../assets/images/Sensor/Sensor.png')} />
            <ADIcon name="caretdown" size={35} color={utils.colors.seaFoam} />
            <Divider />
          </ImageWrapper>
        </>
      );
    } else if (index === 2) {
      return (
        <>
          <ImageWrapper>
            <Image
              source={require('../../assets/icons/crops/Tomato/Tomato.png')}
            />
            <ADIcon name="caretdown" size={35} color={utils.colors.seaFoam} />
            <Divider />
          </ImageWrapper>
        </>
      );
    }

    return (
      <>
        <ImageWrapper>
          <Image source={require('../../assets/images/Drone/Drone.png')} />
          <ADIcon name="caretdown" size={35} color={utils.colors.seaFoam} />
          <Divider />
        </ImageWrapper>
      </>
    );
  };

  renderPagination = () => {
    const {index} = this.state;

    if (index === 0) {
      return (
        <PaginationWrapper>
          <PaginationText>Sensor</PaginationText>
        </PaginationWrapper>
      );
    } else if (index === 2) {
      return (
        <PaginationWrapper>
          <PaginationText>Status</PaginationText>
        </PaginationWrapper>
      );
    }

    return (
      <PaginationWrapper>
        <PaginationText>Water</PaginationText>
      </PaginationWrapper>
    );
  };

  render() {
    return (
      <MainContainer>
        <HeadWrapper>
          <BackButtonWrapper activeOpacity={0.5}>
            <MDIcon
              name="keyboard-arrow-left"
              size={35}
              color={utils.colors.darkGreen}
            />
            <BackButtonText>Back</BackButtonText>
          </BackButtonWrapper>
          {this.renderImage()}
        </HeadWrapper>
        <Swiper
          loop={false}
          index={1}
          showsPagination={false}
          onIndexChanged={index => this.setState({index: index})}>
          <Sensor />
          <Water />
          <Status />
        </Swiper>
      </MainContainer>
    );
  }
}
