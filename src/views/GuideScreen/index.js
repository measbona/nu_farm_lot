import React from 'react';
import styled from 'styled-components/native';
import utils from '../../utils';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  padding-vertical: 40px;
`;

const Text = styled.Text`
  font-size: ${props => props.sizeFont};
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

export default class GuideScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProfileWrapper>
          <Profile source={require('../../assets/icons/profile/profile.png')} />
        </ProfileWrapper>
        <TopTextWrapper>
          <Text sizeFont={27} weightFont>
            Hey, Siekchhor
          </Text>
        </TopTextWrapper>
        <ImageWrapper>
          <Image source={require('../../assets/images/guide1/guide1.png')} />
        </ImageWrapper>
        <BottomTexttWrapper>
          <Text sizeFont={23}>Welcome to NU Farm LoT</Text>
          <Text sizeFont={18}>Enhance farmer with technology</Text>
        </BottomTexttWrapper>
      </Wrapper>
    );
  }
}
