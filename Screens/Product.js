import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";


const Product = ({ navigation }) => {
    const [data, setData] = useState('');

    const getData = async () => {
        let res = await fetch(`https://fakestoreapi.com/products`);
        res = await res.json();
        setData(res)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View>
            <View style={styles.head}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Product List</Text>
            </View>
            <View style={{ padding: 20, marginBottom: 150 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        data && data.length > 0 ?
                            data.map((item,index) => (
                                <View key={index} style={styles.container} onPress={() => navigation.navigate('single', item.id)}>
                                    <View>
                                        <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }}></Image>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={{ textAlign: "center" }}>{item.title}</Text>
                                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>RS: {item.price}</Text>
                                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('single', item.id)}><Text style={styles.edit} >View detail</Text></TouchableOpacity>
                                    </View>
                                    <View style={styles.rate}>
                                        <Text style={{ color: "red", fontWeight: "bold" }}>Rate: {item.rating.rate}</Text>
                                    </View>
                                </View>

                            )) : <Text>No Product</Text>
                    }
                </ScrollView>


            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    head: {
        marginTop: 45,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 220,
        width: "100%",
        backgroundColor: "#fff",
        elevation: 30,
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,

    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: 100,
        backgroundColor: "red",
        padding: 5,
        borderRadius: 3,
        marginTop: 10
    },
    edit: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    },
    rate: {
        position: "absolute",
        top: 5,
        right: 12,
        color: "red"
    }

})

