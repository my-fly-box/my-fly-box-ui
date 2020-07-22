import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import FishForm from '../components/FishForm'
import { clearFishEntry } from '../actions';


class AddFish extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FishForm />
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('MyFlyBox');
              this.props.clearFishEntry();
              }}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('MyFlyBox');
              this.props.clearFishEntry();
              }}>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },
  button: {
    backgroundColor: '#00a8d5',
    color: 'white',
    margin: 5,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// const mapStateToProps = state => ({
//   currentFlyEntry: state.currentFlyEntry,
// })

const mapDispatchToProps = (dispatch) => ({
  clearFishEntry: () => dispatch( clearFishEntry() ),
})

export default connect(null, mapDispatchToProps)(AddFish);