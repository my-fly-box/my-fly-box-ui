import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Fly from "../components/Fly";
import { setFlies, removeFly } from "../actions";
import { connect } from "react-redux";
import { fetchFlies, deleteFly } from "../ApiCalls";

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
      // sorting flies in alphabetical order:
      let flies = this.props.currentFlies.sort((a, b) => {
        let nameA = a.attributes.name.toUpperCase();
        let nameB = b.attributes.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      })
      
      return (
        <FlatList
          style={styles.fly}
          data={flies}
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
        {this.checkFlyBox()}
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
  fly: {
    height: 60,
    width: "98%",
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
