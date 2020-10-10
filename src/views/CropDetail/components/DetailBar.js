import React from 'react';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

const ProgressWrapper = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const TextWrapper = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const VolumnText = styled.Text`
  font-weight: bold;
  color: ${props => props.textColor};
`;

export default class DetailBar extends React.PureComponent {
  render() {
    const {type, color, unFieldCollor, max, min} = this.props;
    let typeOfStatus = null;

    if (type === 'celsius') {
      typeOfStatus = '°C';
    } else if (type === 'percent') {
      typeOfStatus = '%';
    } else if (type === 'quantity') {
      typeOfStatus = 'm';
    } else {
      typeOfStatus = 'L';
    }

    return (
      <ProgressWrapper>
        <TextWrapper>
          <VolumnText textColor={color} style={{marginRight: 5}}>
            {min + typeOfStatus}
          </VolumnText>
        </TextWrapper>
        <Progress.Bar
          progress={min / max}
          width={170}
          height={15}
          borderRadius={8}
          borderWidth={0}
          color={color}
          unfilledColor={unFieldCollor}
        />
        <TextWrapper>
          <VolumnText textColor={color} style={{marginLeft: 5}}>
            {max + typeOfStatus}
          </VolumnText>
        </TextWrapper>
      </ProgressWrapper>
    );
  }
}
