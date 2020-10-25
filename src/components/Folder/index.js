import React from "react";

import { ImageI } from "./styles";

import { Text, ImageBackground } from "react-native";

export default Folder = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        maxWidth: 405,
        maxHeight: 200,
        marginBottom: -5,
      }}
      source={require("../../../assets/background.png")}
    >
      <ImageI
        source={require("../../../assets/logo.png")}
        style={{
          marginLeft: 268,
          maxWidth: 81,
          maxHeight: 74,
          marginBottom: 0,
          marginTop: 70,
        }}
      />
      <Text
        style={{
          color: "#fff",
          marginLeft: 248,
          fontFamily: "nunito-bold",
          fontSize: 18,
        }}
      >
        Caracol App
      </Text>
      <Text
        style={{
          color: "#fff",
          marginLeft: 170,
          fontFamily: "nunito-regular",
          fontSize: 14,
          width: 1200,
        }}
      >
        A sua casa onde você estiver.
      </Text>
    </ImageBackground>
  );
};
