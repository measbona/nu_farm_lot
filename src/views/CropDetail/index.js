import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import ADIcon from 'react-native-vector-icons/AntDesign';
import {dismissModal} from '../../navigation/screen';

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

const Icon = styled(ADIcon)`
  margin-vertical: 6px;
`;

const PaginationWrapper = styled.View`
  flex-direction: row;
`;

const PaginationTextWrapper = styled.TouchableOpacity`
  background-color: ${props => props.color};
  width: 90px;
  height: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 15px;
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
          <Image source={require('../../assets/images/Sensor/Sensor.png')} />
          <Icon name="caretdown" size={35} color={utils.colors.seaFoam} />
        </>
      );
    } else if (index === 2) {
      return (
        <>
          <Image
            source={require('../../assets/icons/crops/Tomato/Tomato.png')}
          />
          <Icon name="caretdown" size={35} color={utils.colors.seaFoam} />
        </>
      );
    }

    return (
      <>
        <Image source={require('../../assets/images/Drone/Drone.png')} />
        <Icon name="caretdown" size={35} color={utils.colors.seaFoam} />
      </>
    );
  };

  renderPagination = () => {
    const {index} = this.state;

    const active = utils.colors.seaFoam;
    const inActive = utils.colors.ligntSeaFoam;

    return (
      <PaginationWrapper>
        <PaginationTextWrapper
          activeOpacity={0.5}
          onPress={() => this.setState({index: 0})}
          disabled={index === 0 && true}
          color={index === 0 ? active : inActive}>
          <PaginationText>Sensor</PaginationText>
        </PaginationTextWrapper>
        <PaginationTextWrapper
          activeOpacity={0.5}
          onPress={() => this.setState({index: 1})}
          disabled={index === 1 && true}
          color={index === 1 ? active : inActive}>
          <PaginationText>Water</PaginationText>
        </PaginationTextWrapper>
        <PaginationTextWrapper
          activeOpacity={0.5}
          onPress={() => this.setState({index: 2})}
          disabled={index === 2 && true}
          color={index === 2 ? active : inActive}>
          <PaginationText>Status</PaginationText>
        </PaginationTextWrapper>
      </PaginationWrapper>
    );
  };

  render() {
    const {index} = this.state;
    const {componentId, crop} = this.props;

    return (
      <MainContainer>
        <HeadWrapper>
          <BackButtonWrapper
            activeOpacity={0.5}
            onPress={() => dismissModal(componentId)}>
            <MDIcon
              name="keyboard-arrow-left"
              size={35}
              color={utils.colors.darkGreen}
            />
            <BackButtonText>{crop.crop_name}</BackButtonText>
          </BackButtonWrapper>
          <ImageWrapper>
            {this.renderImage()}
            {this.renderPagination()}
          </ImageWrapper>
        </HeadWrapper>
        <Swiper
          loop={false}
          index={index}
          showsPagination={false}
          onIndexChanged={index => this.setState({index: index})}>
          <Sensor crop={crop} />
          <Water crop={crop} />
          <Status crop={crop} />
        </Swiper>
      </MainContainer>
    );
  }
}
