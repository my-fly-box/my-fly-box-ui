import React, { Component }  from 'react';
import FlyForm from '../components/FlyForm';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { setCurrentFly, clearFlyEntry } from '../actions'
import { addUpdatedFly } from "../ApiCalls";
import { connect } from "react-redux";

class EditFly extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFly: null
        }
    }

    componentDidMount = () => {
        const selectedFly = this.props.currentFlies.find(fly => fly.id == this.props.selectedFlyId)
        this.setState({selectedFly: selectedFly})
        this.setCurrentFly(selectedFly)
    }

    setCurrentFly = (selectedFly) => {
        this.props.setCurrentFly(selectedFly.attributes)
    }

    updateFly = () => {
        addUpdatedFly(this.state.selectedFly)
    }

    render() {
       return (
        <View style={styles.container}>
            <FlyForm />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.props.navigation.navigate('MyFlyBox');
                    this.props.clearFlyEntry();
                    }}>
                    <Text style={styles.button}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.updateFly()
                    this.props.navigation.navigate('MyFlyBox');
                    this.props.clearFlyEntry();
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

const mapStateToProps = (state) => ({
    currentFlies: state.currentFlies,
    selectedFlyId: state.selectedFlyId
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentFly: (data) => dispatch(setCurrentFly(data)),
    setFlies: (data) => dispatch(addFly(data)),
    clearFlyEntry: (data) => dispatch(clearFlyEntry())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditFly);