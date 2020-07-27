import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { fetchFish, deleteFish } from "../ApiCalls";
import { setFish, removeFish } from "../actions";
import { connect } from "react-redux";
import Fish from "../components/Fish";

class FishCaught extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFish: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    fetchFish()
      .then((data) => this.props.setFish(data.data))
      .then((fish) =>
        this.setState({ currentFish: fish.data, isLoading: false })
      );
  }

  handleDelete = (fishId) => {
    deleteFish(fishId);
    this.props.removeFish(fishId);
  };

  checkFish = () => {
    if (this.props.currentFish.length > 0 && !this.state.isLoading) {
      return (
        <FlatList
          style={styles.fish}
          data={this.props.currentFish}
          renderItem={({ item }) => (
            <Fish
              fish={item}
              navigation={this.props.navigation}
              handleDelete={this.handleDelete}
            />
          )}
        />
      );
    } else if (this.state.isLoading) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 50,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Loading Fish Data...
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 50,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            It doesn't look like you have any fish saved.
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("AddFish");
          }}
        >
          <Text color="white" style={styles.buttonText}>
            Add Fish
          </Text>
        </TouchableOpacity>
        {this.checkFish()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    padding: 10,
    alignItems: "center",
  },
  fish: {
    height: 60,
    width: "98%",
  },
  button: {
    backgroundColor: "#f7841f",
    alignSelf: "center",
    margin: "5%",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#212326",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  currentFish: state.currentFish,
});

const mapDispatchToProps = (dispatch) => ({
  setFish: (data) => dispatch(setFish(data)),
  removeFish: (id) => dispatch(removeFish(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FishCaught);
