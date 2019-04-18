import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//action

class CouterScreen extends Component {
  render() {
    const { container, conainerButton, buttonStyle, text, textStyle } = styles;
    return (
      <View style={container}>
        <View style={conainerButton}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
              this.props.onDecrement(1);
            }}
          >
            <Text> {"Decrement - "}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
              this.props.onIncrement(1);
            }}
          >
            <Text> {"Increment + "}</Text>
          </TouchableOpacity>
        </View>
        <View style={textStyle}>
          <Text style={text}>Count: {this.props.times} </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#d3fee9",
    justifyContent: "center"
  },
  conainerButton: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonStyle: {
    height: 44,
    backgroundColor: "#8846a4",
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 5
  },
  textStyle: {
    alignItems: "center"
  },
  text: {
    color: "#111499",
    fontSize: 20
  }
};
export default CouterScreen;
