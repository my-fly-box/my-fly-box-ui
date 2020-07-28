import React, { Component } from "react";
import { Text, View, TouchableOpacity, Platform } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { connect } from "react-redux";
import { updateFishEntry } from "../actions";
import { uploadPhoto } from "../ApiCalls";

class PhotoSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
      cameraType: Camera.Constants.Type.back,
    };
  }

  async componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(
          "We need permissions for your camera roll to upload past fish caught"
        );
      }
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === "granted" });
  };

  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      const base64 = await FileSystem.readAsStringAsync(photo.uri, {
        encoding: "base64",
      });
      await this.props.updateFishEntry("image", base64);
      // This is where we would then call the uploadPhoto post request to send the image to identify the species. This is working properly in development, but not on Heroku on a production level. Commenting out the invocation to avoid errors while this error is being researched.
      // uploadPhoto(base64);
      this.props.navigation.navigate("AddFish");
    }
  };

  pickImage = async () => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    const base64 = await FileSystem.readAsStringAsync(photo.uri, {
      encoding: "base64",
    });
    await this.props.updateFishEntry("image", base64);
    // This is where we would then call the uploadPhoto post request to send the image to identify the species. This is working properly in development, but not on Heroku on a production level. Commenting out the invocation to avoid errors while this error is being researched.
    // uploadPhoto(base64);
    this.props.navigation.navigate("AddFish");
  };

  render() {
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>Camera not available</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.cameraType}
            ref={(ref) => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.pickImage()}
              >
                <Ionicons
                  name="ios-photos"
                  style={{ color: "#fff", fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.takePicture()}
              >
                <FontAwesome
                  name="camera"
                  style={{ color: "#fff", fontSize: 40 }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFishEntry: (field, data) => dispatch(updateFishEntry(field, data)),
});

export default connect(null, mapDispatchToProps)(PhotoSelector);
