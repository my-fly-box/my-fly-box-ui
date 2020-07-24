import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Fly from "../components/Fly";
import { setFlies, removeFly } from "../actions";
import { connect } from "react-redux";
import { fetchFlies, deleteFly } from "../ApiCalls";

const FlatListItemSeparator = () => {
  return (
    <View style={{ height: 1.5, width: "100%", backgroundColor: "#7A5C58" }} />
  );
};

class FlyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFlies: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    fetchFlies()
      .then((data) => this.props.setFlies(data.data))
      .then((fly) =>
        this.setState({ currentFlies: fly.data, isLoading: false })
      );
  }

  handleDelete = (flyId) => {
    deleteFly(flyId);
    this.props.removeFly(flyId);
  };

  checkFlyBox = () => {
    if (this.props.currentFlies.length > 0 && !this.state.isLoading) {
      return (
        <FlatList
          style={styles.fly}
          ItemSeparatorComponent={FlatListItemSeparator}
          data={this.props.currentFlies}
          renderItem={({ item }) => (
            <Fly
              fly={item}
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
            Loading Fly Data...
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
            It doesn't look like you have any flies saved to your fly box.
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerFont}>Fly Name</Text>
          <Text style={styles.headerFont}>Fly Type</Text>
          <Text style={styles.headerFont}>Size</Text>
          <Text style={styles.headerFont}>Edit</Text>
          <Text style={styles.headerFont}>Delete</Text>
        </View>
        {this.checkFlyBox()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E9F3",
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
    backgroundColor: "#BDC667",
  },
  headerFont: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2A9D8F",
  },
});

const mapStateToProps = (state) => ({
  currentFlies: state.currentFlies,
});

const mapDispatchToProps = (dispatch) => ({
  setFlies: data => dispatch( setFlies(data) ),
  removeFly: id => dispatch( removeFly(id) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyBox);
