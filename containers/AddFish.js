import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

class AddFish extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('MyFlyBox');
              alert('go to home page')
              }}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.props.navigation.navigate('MyFlyBox');
              alert('submit fish')
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

// const mapDispatchToProps = (dispatch) => ({
//   addFly: data => dispatch( addFly(data) ),
//   clearFlyFields: () => dispatch( clearFlyEntry() ),
// })

export default connect(null, null)(AddFish);