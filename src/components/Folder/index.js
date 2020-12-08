import { Text, ImageBackground } from "react-native";
import React from "react";
import normalize from "../../utils/normalize";
import { ImageI } from "./styles";

const Folder = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        maxWidth: normalize(415),
        maxHeight: normalize(200),
        marginBottom: normalize(-5),
      }}
      source={require("../../../assets/background.png")}
    >
      <ImageI
        source={require("../../../assets/logo.png")}
        style={{
          marginLeft: normalize(300),
          maxWidth: normalize(81),
          maxHeight: normalize(74),
          marginBottom: normalize(0),
          marginTop: normalize(70),
        }}
      />
      <Text
        style={{
          color: "#fff",
          marginLeft: normalize(270),
          fontFamily: "nunito-bold",
          fontSize: normalize(18),
        }}
      >
        Caracol App
      </Text>
      <Text
        style={{
          color: "#fff",
          marginLeft: normalize(165),
          fontFamily: "nunito-regular",
          fontSize: normalize(15)
        }}
      >
        A sua casa onde você estiver.
      </Text>
    </ImageBackground>
  );
};
export default Folder;
