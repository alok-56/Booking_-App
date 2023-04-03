import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

const Singleproduct = ({ navigation, route }) => {
    const id = route.params;
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState('')
    const [price, setPrice] = useState('')
    const Calldata = async () => {
        let data = await fetch(`https://fakestoreapi.com/products/${id}`)
        data = await data.json();
        if (data) {
            setImg(data.image)
            setDescription(data.description)
            setPrice(data.price)
            setRate(data.rating.rate)
            setTitle(data.title)
        }

    }
    useEffect(() => {
        Calldata()
    }, [])
    return (
        <View>
            <View>
                <View style={{ width: "100%", height: 300, marginTop: 30 }}>
                    <ImageBackground style={{ height: 300, width: "100%" }} source={{ uri:img }}></ImageBackground>
                </View>
                <View style={{ width: "100%" }} >
                    <View style={styles.con}>
                        <Text style={{ fontSize: 18, width: "80%", fontWeight: "bold" }}>{title}</Text>
                        <Text style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>Rate: {rate}</Text>
                    </View>
                    <Text style={styles.dic}>{description}</Text>
                    <Text style={styles.price}>RS: {price}</Text>
                    <View style={{ alignSelf: "center", marginTop: 40 }}>
                        <TouchableOpacity style={styles.btn}><Text style={styles.buy}>Buy Now</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Singleproduct;

const styles = StyleSheet.create({
    con: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    dic: {
        marginTop: 10,
        fontSize: 15,
        padding: 2,
        textAlign: "left"
    },
    price: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "red"
    },
    btn: {
        width: 200,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 2
    },
    buy: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }

})