import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { fetchFish} from "../ApiCalls";
import { setFish } from "../actions";
import { connect } from "react-redux";

class FishCaught extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount () {
    fetchFish().then((data) => this.props.setFish(data.data));
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("AddFish");
          }}
        >
          <Text style={styles.buttonText}>Add Fish</Text>
        </TouchableOpacity>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#264653",
    padding: 5,
    alignItems: "center",
    alignSelf: "center",
    width: 70,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "white",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  currentFish: state.currentFish,
});

const mapDispatchToProps = (dispatch) => ({
  setFish: (data) => dispatch(setFish(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FishCaught);

