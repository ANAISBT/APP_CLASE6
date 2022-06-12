import {StyleSheet, Text, View} from 'react-native'

import Colors from "../constants/colors";
import React from "react";

const NumberContainer = ({ children }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.number}>{children}</Text>
      </View>
    );
};
export default NumberContainer;
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: Colors.secondary,
        fontSize: 22,
    },
});

