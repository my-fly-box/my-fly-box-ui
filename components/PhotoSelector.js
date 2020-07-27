import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

class PhotoSelector extends Component {
  constructor(props) {
      super(props)
      this.state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
      }
  } 

  async componentDidMount() {
    this.getPermissionAsync()
  }

 //permissions for iOs camera roll .. android uses one permission for both camera and roll
  getPermissionAsync = async () => {
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('We need permissions for your camera roll to upload past fish caught');
      }
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.uploadPhoto(photo.uri)
      console.log('photo', photo)

      // need to test this once the endpoint for uploadPhoto is running to make sure it still has time to run - added so the user is brought back to add fish page to see the returned data
      this.props.navigation.navigate('AddFish');
    }
  }

  // need to figure out why there is no base64 to access
  pickImage = async () => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    this.uploadPhoto(photo.uri)
    console.log(photo)

    // need to test this once the endpoint for uploadPhoto is running to make sure it still has time to run - added so the user is brought back to add fish page to see the returned data
    this.props.navigation.navigate('AddFish');
  }

  uploadPhoto = async (photo) => {
    const response = await fetch("https://my-fly-box-api.herokuapp.com/api/v1/images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      base_64: photo,
    })
  })

  const imageResponse = await response.json();
  console.log(imageResponse)
  }


  render(){
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>Camera not available</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                  }}
                  onPress={()=>this.pickImage()}>
                  <Ionicons
                      name="ios-photos"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <FontAwesome
                      name="camera"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
      );
    }
  }
}

export default PhotoSelector;