import React, { Component }  from 'react';
import FlyForm from '../components/FlyForm';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { setCurrentFly, clearFlyEntry, updateFly } from '../actions'
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
        .then(data => {
          this.props.updateFly(data)
        })
    }

    render() {
       return (
        <View style={styles.container}>
            <FlyForm />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.props.clearFlyEntry()
                    this.props.navigation.navigate('MyFlyBox');
                    }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.updateFly()
                    this.props.clearFlyEntry()
                    this.props.navigation.navigate('MyFlyBox');
                    }}>
                    <Text>Update</Text>
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
        color: 'white',
        flex: 1,
        alignSelf: "center",
        margin: 5,
        marginTop: "20%",
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
  })

const mapStateToProps = (state) => ({
    currentFlies: state.currentFlies,
    selectedFlyId: state.selectedFlyId,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentFly: data => dispatch( setCurrentFly(data) ),
    setFlies: data => dispatch( addFly(data) ),
    updateFly: data => dispatch( updateFly(data) ),
    clearFlyEntry: () => dispatch( clearFlyEntry() ),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditFly);