import React from 'react';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MDIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import utils from '../../../utils';

const HeaderWrapper = styled.View`
  background-color: ${utils.colors.lightGreen};
  padding-top: 80px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const IconToucableWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px 0px 20px;
  bottom: 13px;
`;

const MenuIconTouchable = styled.TouchableOpacity``;

const MenuIcon = styled(Entypo)``;

const NotificationTouchable = styled.TouchableOpacity``;

const Notification = styled(MDIcons)`
  position: relative;
`;

const BadgeWrapper = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  background: ${utils.colors.black};
  border-color: ${utils.colors.lightGreen};
  border-width: 2px;
  height: 20px;
  width: 20px;
  border-radius: 90px;
  right: 0px;
  top: 0px;
`;

const BadgeNumber = styled.Text`
  position: absolute;
  color: ${utils.colors.white};
  font-size: 12px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper style={utils.shadows.cropCardShadow}>
        <IconToucableWrapper>
          <MenuIconTouchable activeOpacity={0.5}>
            <MenuIcon name="menu" size={37} />
          </MenuIconTouchable>
          <NotificationTouchable activeOpacity={0.5}>
            <Notification name="bell" size={37} />
            <BadgeWrapper>
              <BadgeNumber>1</BadgeNumber>
            </BadgeWrapper>
          </NotificationTouchable>
        </IconToucableWrapper>
      </HeaderWrapper>
    );
  }
}
