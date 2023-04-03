import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Splash = () => {
    return (
        <View style={styles.con}>
            <Text style={styles.brand}>Booking Wala</Text>
            <Text style={styles.text}>Easy to Book</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    brand: {
        fontSize: 55,
        fontWeight: "bold",
        color: "red"
    },
    text: {
        fontSize: 28,
    }

})