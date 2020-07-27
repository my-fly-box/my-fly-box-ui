import React, { Component }  from 'react';
import FishForm from '../components/FishForm';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { setCurrentFish, clearFishEntry } from '../actions'
import { addUpdatedFish } from "../ApiCalls";
import { connect } from "react-redux";

class EditFish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFish: null
        }
    }

    componentDidMount = () => {
        const selectedFish = this.props.currentFish.find(fish => fish.id == this.props.selectedFishId)
        this.setState({selectedFish: selectedFish})
        this.setCurrentFish(selectedFish)
    }

    setCurrentFish = (selectedFish) => {
        this.props.setCurrentFish(selectedFish.attributes)
    }

    updateFish = () => {
        addUpdatedFish(this.state.selectedFish)
    }

    render() {
       return (
        <View style={styles.container}>
            <FishForm />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.props.clearFishEntry()
                    this.props.navigation.navigate('FishCaught');
                    }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.props.clearFishEntry()
                    this.updateFish()
                    this.props.navigation.navigate('FishCaught');
                    }}>
                    <Text>Submit</Text>
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
    currentFish: state.currentFish,
    selectedFishId: state.selectedFishId
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentFish: (data) => dispatch(setCurrentFish(data)),
    setFish: (data) => dispatch(addFish(data)),
    clearFishEntry: () => dispatch( clearFishEntry() )
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditFish);
