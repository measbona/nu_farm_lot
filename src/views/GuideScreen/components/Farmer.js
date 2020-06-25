import React from 'react';
import styled from 'styled-components/native';
import utils from '../../../utils';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProfileWrapper = styled.View`
  padding-bottom: 10px;
`;

const TopTextWrapper = styled.View`
  padding-bottom: 40px;
`;

const Profile = styled.Image``;

const BottomTexttWrapper = styled.View`
  align-items: center;
  position: absolute;
  padding-vertical: 40px;
  bottom: 160px;
`;

const Text = styled.Text`
  font-size: ${props => props.size};
  font-weight: ${props => (props.weightFont ? 600 : 500)};
`;

const ImageWrapper = styled.View`
  background-color: ${utils.colors.orange};
  border-radius: 360px;
`;

const Image = styled.Image`
  margin-vertical: 40px;
  margin-horizontal: 40px;
`;

const ProfileAndImageWrapper = styled.View`
  align-items: center;
  bottom: 80px;
`;

export default class Farmer extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ProfileAndImageWrapper>
          <ProfileWrapper>
            <Profile
              source={require('../../../assets/icons/profile/profile.png')}
            />
          </ProfileWrapper>
          <TopTextWrapper>
            <Text size={27} weightFont>
              Hey, Siekchhor
            </Text>
          </TopTextWrapper>
          <ImageWrapper>
            <Image
              source={require('../../../assets/images/Farmer/Farmer.png')}
            />
          </ImageWrapper>
        </ProfileAndImageWrapper>
        <BottomTexttWrapper>
          <Text size={23}>Welcome to NU Farm LoT</Text>
          <Text size={18}>Enhance farmer with technology</Text>
        </BottomTexttWrapper>
      </Wrapper>
    );
  }
}
