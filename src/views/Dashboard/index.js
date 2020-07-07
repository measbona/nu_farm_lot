import React from 'react';
import {FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

import utils from '../../utils';

import Header from './components/Header';
import CropCard from './components/CropCard';
import BottomTab from './components/BottomTab';

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const DashboardAnimate = Animatable.createAnimatableComponent(Wrapper);

const DashboardInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const BoardName = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: ${utils.colors.darkGreen};
`;

const Total = styled.Text`
  font-size: 23px;
  font-weight: 500;
  color: ${utils.colors.darkGreen};
`;

export default class Dashboard extends React.Component {
  state = {
    crop: null,
    edit: false,
    destroy: false,
  };

  renderCrop = ({item}) => {
    const {edit, destroy} = this.state;
    const {componentId} = this.props;

    return (
      <CropCard
        crop={item}
        componentId={componentId}
        onCropPress={eachCrop => this.setState({crop: eachCrop})}
        edit={edit}
        destroy={destroy}
      />
    );
  };

  render() {
    const {edit, destroy} = this.state;
    const {componentId} = this.props;

    const CROPS_DATA = [
      {
        id: '1',
        crop_name: 'Tomato',
        land_size: '20',
        humandity: {
          temperature: '28',
          water_volume: '80',
          water_capacity: '0.3',
        },
      },
      {
        id: '2',
        crop_name: 'Grape',
        land_size: '30',
        humandity: {
          temperature: '25',
          water_volume: '50',
          water_capacity: '0.1',
        },
      },
      {
        id: '3',
        crop_name: 'Sugar Cane',
        land_size: '40',
        humandity: {
          temperature: '30',
          water_volume: '80',
          water_capacity: '0.7',
        },
      },
    ];
    return (
      <DashboardAnimate animation="fadeIn">
        <Header />
        <DashboardInfo>
          <BoardName>Farm Overview</BoardName>
          <Total>{'Total: ' + CROPS_DATA.length}</Total>
        </DashboardInfo>
        <FlatList
          data={CROPS_DATA}
          renderItem={this.renderCrop}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <BottomTab
          onDestroyChange={data => this.setState({destroy: data})}
          onEditChange={data => this.setState({edit: data})}
          edit={edit}
          destroy={destroy}
          componentId={componentId}
        />
      </DashboardAnimate>
    );
  }
}
