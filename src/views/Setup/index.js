import React from 'react';
import {
  TouchableOpacity,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styled from 'styled-components/native';
import storage from '@react-native-firebase/storage';
import ImageResizer from 'react-native-image-resizer';
import {popBack} from '../../navigation/screen';

import Header from './components/Header';
import utils from '../../utils';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ImageWrapper = styled.View`
  align-items: center;
`;

const imageWidth = () => {
  if (Platform.OS === 'ios') {
    return utils.resizer.getWidth(utils.devices.isIphoneX ? 950 : 750);
  }

  return utils.resizer.getWidth(950);
};

const imageHeight = () => {
  if (Platform.OS === 'ios') {
    return utils.resizer.getHeight(utils.devices.isIphoneX ? 700 : 650);
  }

  return utils.resizer.getWidth(950);
};

const Image = styled.Image`
  border-radius: ${utils.resizer.getWidth(950) / 2}px;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`;

const TextInputWrapper = styled.View`
  position: relative;
  width: ${utils.devices.screenWidth - 64}px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: ${props => props.fontSize}px;
  ${props => props.color && `color: ${props.color}`}
  ${props => props.margin && `margin: 0px 0px 10px 5px`};
`;

const TextInput = styled.TextInput`
  height: 50px;
  font-size: 13px;
  font-weight: 400;
  border-width: 2px;
  padding-left: 15px;
  border-radius: 50px;
  border-color: #e5e5e5;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  border-radius: 50px;
  align-items: center;
  padding-vertical: 13px;
  background-color: rgba(
    124,
    199,
    81,
    ${props => (props.cropName.length === 0 ? 0.5 : 1)}
  );
  bottom: ${utils.resizer.getHeight(100)}px;
  width: ${utils.devices.screenWidth - 64}px;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  bottom: ${utils.resizer.getHeight(200)}px;
`;

export default class Setup extends React.PureComponent {
  state = {
    cropName: '',
    cropImage: null,
    cropUri: '',
    loading: false,
  };

  componentDidMount() {
    const {action, crop} = this.props;

    if (action === 'edit') {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        cropName: crop.name,
        cropUri: crop.image_url,
      });
    }
  }

  selectFile = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, async res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        let compressedImage = await this.resize(res);
        this.setState({
          cropImage: compressedImage,
          cropUri: compressedImage.uri,
        });
      }
    });
  };

  resize = data => {
    return new Promise((resolve, reject) => {
      ImageResizer.createResizedImage(data.uri, 360, 640, 'PNG', 100, 0)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  uploadImage = async () => {
    const {cropImage, cropName} = this.state;
    const {componentId} = this.props;

    this.setState({loading: true});
    const {uri} = cropImage;
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    const task = storage()
      .ref(`crop_images/${cropName}`)
      .putFile(uploadUri);

    try {
      await task;
      this.setState({loading: false});
    } catch (e) {
      Alert.alert(
        'Fail Saving',
        'You data is fail to process. Please try again!',
      );
    }

    popBack(componentId);
  };

  render() {
    const {cropName, loading, cropUri} = this.state;
    const {componentId, action} = this.props;

    const image =
      action === 'edit'
        ? {uri: cropUri}
        : require('../../assets/images/crop_placeholder.jpg');

    return (
      <React.Fragment>
        <Header componentId={componentId} />
        <Container>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            <ImageWrapper>
              <Text fontSize={20} margin>
                Upload Image
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.selectFile()}>
                <Image source={image} resizeMode="cover" />
              </TouchableOpacity>
            </ImageWrapper>
            <TextInputWrapper>
              <Text fontSize={17} margin>
                Crop Name
              </Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="eg. Carrot"
                value={cropName}
                onChangeText={value => this.setState({cropName: value})}
              />
            </TextInputWrapper>
          </KeyboardAvoidingView>
          <Button
            activeOpacity={0.7}
            disabled={cropName.length === 0}
            onPress={this.uploadImage}
            cropName={cropName}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text fontSize={20} color={utils.colors.white}>
                {action === 'edit' ? 'Update' : 'Save'}
              </Text>
            )}
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}
