import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FlyForm from '../components/FlyForm';
import { connect } from "react-redux";
import { addFly, clearFlyEntry } from '../actions';
import { addFlyToAPI } from "../ApiCalls";

class AddFly extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearFlyFields()
  }

  addFly = () => {
    const currentFlyEntry = this.props.currentFlyEntry
    addFlyToAPI(currentFlyEntry)
      .then(data => {
        this.props.addFly(data.data);
        this.props.clearFlyFields();
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlyForm />
        
        <View style={styles.buttonContainer}>

        <TouchableOpacity color='white' style={styles.button}
            onPress = {() => {
              this.props.clearFlyFields();
              this.props.navigation.navigate('MyFlyBox');
              }}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress = {() => {
              this.addFly()
              this.props.navigation.navigate('MyFlyBox');
              }}>
            <Text style={styles.buttonText}>Submit</Text>
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
    height: "100%",
    width: "100%",
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center',
    width: "80%",
    alignSelf: "center",
    height: "30%",
    marginTop: "5%",
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    alignSelf: "center",
    margin: 5,
    height: "20%",
    width: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2A9D8F',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {

  }
})

const mapStateToProps = state => ({
  currentFlyEntry: state.currentFlyEntry,
})

const mapDispatchToProps = (dispatch) => ({
  addFly: data => dispatch( addFly(data) ),
  clearFlyFields: () => dispatch( clearFlyEntry() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFly);