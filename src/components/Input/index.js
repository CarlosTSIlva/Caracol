import React, { useRef, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { useField } from "@unform/core";
import normalize from "../../utils/normalize";
function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      clearValue(ref) {
        ref.value = "";
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      style={styles.input}
      ref={inputRef}
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      placeholderTextColor="#666360"
      onChangeText={(value) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: normalize(560),
    width: normalize(327),
    marginBottom: normalize(15),
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(16),
    borderRadius: normalize(4),
    borderWidth: normalize(2),
    fontSize: normalize(15),
  },
});

export default Input;
