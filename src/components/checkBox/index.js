import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import normalize from "../../utils/normalize";
export default function CheckBox(props) {
  function handleChange() {
    const { onChange } = props;
    if (onChange) {
      return onChange();
    }
  }

  return (
    <View style={styles.WrapperCheckBox}>
      <TouchableOpacity
        onPress={handleChange}
        style={[
          styles.CheckBox,
          { borderColor: props.checkColor ? props.checkColor : "#000000" },
        ]}
      >
        {props.value ? (
          <Icon
            name="check"
            style={{
              fontSize: normalize(13),
              color: props.iconColor ? props.iconColor : "#000000",
            }}
          />
        ) : null}
      </TouchableOpacity>

      <Text style={[styles.LabelCheck, props.labelStyle]}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBox: {
    width: normalize(16),
    height: normalize(16),
    borderWidth: normalize(1),
    justifyContent: "center",
    alignItems: "center",
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(20),
    marginTop: normalize(5),
  },
  LabelCheck: {
    color: "#000000",
    marginLeft: normalize(6),
  },
});

CheckBox.propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  iconColor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  checkColor: PropTypes.string,
};
