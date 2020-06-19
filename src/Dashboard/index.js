import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

const View = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Text = styled.Text``;

export default class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}
