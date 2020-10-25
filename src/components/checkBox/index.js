import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

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
              fontSize: 13,
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
    width: 16,
    height: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  LabelCheck: {
    color: "#000000",
    marginLeft: 6,
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
