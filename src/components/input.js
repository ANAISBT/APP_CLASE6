import { StyleSheet, TextInput } from "react-native";

import Colors from "../../constants/colors";
import React from "react";

const Input = ({ style, ...props }) => {
    return <TextInput {...props} style={[styles.input, { ...style }]} />;
  };
export default Input;
const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1,
        marginVertical:20,
    },
});

