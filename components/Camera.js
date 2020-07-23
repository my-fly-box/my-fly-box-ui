// import React from 'react';
// import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// 
// export default class App extends React.Component {
//   state = {
//     hasPermission: null,
//     cameraType: Camera.Constants.Type.back,
//   }
//
//   async componentDidMount() {
//     this.getPermissionAsync()
//   }
//
//  //permissions for iOs camera roll .. android uses one permission for both camera and roll
//   getPermissionAsync = async () => {
//     if (Platform.OS === 'ios') {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('We need permissions for your camera roll to upload past fish caught');
//       }
//     }
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasPermission: status === 'granted' });
//   }
//
//   takePicture = async () => {
//     if (this.camera) {
//       let photo = await this.camera.takePictureAsync();
//       // this.uploadPhoto(photo.base64)
//       console.log(photo)
//     }
//   }
//
//   // need to figure out why there is no base64 to access
//   pickImage = async () => {
//     let photo = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images
//     });
//     // this.uploadPhoto(photo.uri)
//     console.log(photo)
//   }
//
//   uploadPhoto = (photo) => {
//     fetch("https://my-fly-box-api.herokuapp.com/api/v1/photo", {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       imgsource: photo,
//     }),
//   })
//   }
//
//   render(){
//     const { hasPermission } = this.state
//     if (hasPermission === null) {
//       return <View />;
//     } else if (hasPermission === false) {
//       return <Text>Camera not available</Text>;
//     } else {
//       return (
//           <View style={{ flex: 1 }}>
//             <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
//               <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
//                 <TouchableOpacity
//                   style={{
//                     alignSelf: 'flex-end',
//                     alignItems: 'center',
//                     backgroundColor: 'transparent'
//                   }}
//                   onPress={()=>this.pickImage()}>
//                   <Ionicons
//                       name="ios-photos"
//                       style={{ color: "#fff", fontSize: 40}}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={{
//                     alignSelf: 'flex-end',
//                     alignItems: 'center',
//                     backgroundColor: 'transparent',
//                   }}
//                   onPress={()=>this.takePicture()}
//                   >
//                   <FontAwesome
//                       name="camera"
//                       style={{ color: "#fff", fontSize: 40}}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </Camera>
//         </View>
//       );
//     }
//   }
// }
