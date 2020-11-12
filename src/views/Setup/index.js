import React from 'react';
import {
  TouchableOpacity,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
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
    ${props => (props.disabledButton ? 0.5 : 1)}
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

  onSave = async () => {
    const {cropImage, cropName, cropUri} = this.state;
    const {crop, componentId, action, onEdit} = this.props;

    this.setState({loading: true});
    const dbRef = firestore().collection('crops');
    const imageRef = storage().ref(`crop_images/${cropName}`);

    const data = {
      key: crop.key,
      cropName: cropName,
      cropUri: cropUri,
    };

    try {
      if (action === 'edit') {
        if (cropImage) {
          const uploadUri =
            Platform.OS === 'ios'
              ? cropImage.uri.replace('file://', '')
              : cropImage.uri;

          await imageRef.putFile(uploadUri);

          const getImageUrl = await imageRef.getDownloadURL();

          await dbRef
            .doc(crop.key)
            .update({name: cropName, image_url: getImageUrl});
          this.setState({cropUri: getImageUrl});
          onEdit(data);
        } else {
          await dbRef.doc(crop.key).update({name: cropName});
          onEdit(data);
        }
      } else {
        const uploadUri =
          Platform.OS === 'ios'
            ? cropImage.uri.replace('file://', '')
            : cropImage.uri;

        const task = storage()
          .ref(`crop_images/${cropName}`)
          .putFile(uploadUri);

        await task;
      }
    } catch (err) {
      Alert.alert(
        'Saving Fail',
        'Please Check Internet Connection and Try Again',
      );
    }

    this.setState({loading: false}, () => popBack(componentId));
  };

  render() {
    const {cropName, loading, cropUri, cropImage} = this.state;
    const {componentId, action} = this.props;

    const disabledButton = cropName.length === 0 || loading;
    const image =
      action === 'edit'
        ? {uri: cropUri}
        : cropImage || require('../../assets/images/crop_placeholder.jpg');

    return (
      <>
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
            disabled={cropName.length === 0 || loading}
            onPress={this.onSave}
            disabledButton={disabledButton}>
            {loading ? (
              <ActivityIndicator color={utils.colors.white} />
            ) : (
              <Text fontSize={20} color={utils.colors.white}>
                {action === 'edit' ? 'Update' : 'Save'}
              </Text>
            )}
          </Button>
        </Container>
      </>
    );
  }
}
