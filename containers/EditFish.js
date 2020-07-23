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
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.props.clearFishEntry()
                    this.props.navigation.navigate('FishCaught');
                    }}>
                    <Text style={styles.button}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}
                    onPress = {() => {
                    this.props.clearFishEntry()
                    this.updateFish()
                    this.props.navigation.navigate('FishCaught');
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
    currentFish: state.currentFish,
    selectedFishId: state.selectedFishId
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentFish: (data) => dispatch(setCurrentFish(data)),
    setFish: (data) => dispatch(addFish(data)),
    clearFishEntry: () => dispatch( clearFishEntry() )
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditFish);
