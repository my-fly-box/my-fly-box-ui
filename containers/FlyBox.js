import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Fly from '../components/Fly';
import { setFlies } from '../actions'
import { connect } from "react-redux";

// Rachael: this is mocked out data that will be removed once the API requests are up and running
const TestFlies = [
    {
        id: 1,
        name: "Parachute Adams",
        size: 18,
        color: "tan",
        category: "dry",
        amount: 2,
        isFavorite: false,
        user_id: 1,
        created_at: "07/18/2020",
        updated_at: null
    },
    {
        id: 2,
        name: "Copper John",
        size: 20,
        color: "copper",
        category: "midge",
        amount: 1,
        isFavorite: false,
        user_id: 1,
        created_at: "07/19/2020",
        updated_at: null
    },
    {
        id: 1,
        name: "Zebra Midge",
        size: 22,
        color: "red",
        category: "midge",
        amount: 3,
        isFavorite: false,
        user_id: 1,
        created_at: "07/17/2020",
        updated_at: null
    }
]

const FlatListItemSeparator = () => {
    return (
        <View style={{ height: 1.5, width: "100%", backgroundColor: "#7A5C58"}} />
    )
}

class FlyBox extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.props.setFlies(TestFlies)
    }

    checkFlyBox = () => {
        if (this.props.currentFlies.length > 0) {
            return (
                <FlatList
                    style={styles.fly}
                    ItemSeparatorComponent={FlatListItemSeparator} 
                    data={this.props.currentFlies}
                    renderItem={({item}) => 
                        <Fly fly={item} navigation={this.props.navigation} />
                    }
                />
            )
        }
        else {
            return (
                <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 50}}>
                    <Text style={{ fontSize: 30, fontWeight: "bold"}}>Your fly box is empty.</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerFont}>Fly Name</Text>
                    <Text style={styles.headerFont}>Fly Type</Text>
                    <Text style={styles.headerFont}>Size</Text>
                    <Text style={styles.headerFont}>Edit</Text>
                </View>
                {this.checkFlyBox()}
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8E9F3'
    },
    fly: {
        height: 44,
        width: "100%",
      },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingVertical: 10,
        borderBottomColor: "#2A9D8F",
        borderBottomWidth: 2,
        backgroundColor: "#BDC667"
    },
    headerFont: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2A9D8F"
    }
  });

  const mapStateToProps = state => ({
    currentFlies: state.currentFlies,
  })

  const mapDispatchToProps = (dispatch) => ({
    setFlies: data => dispatch( setFlies(data) ),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(FlyBox);