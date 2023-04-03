import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../Screens/Splash";
import Product from "../Screens/Product";
import Singleproduct from "../Screens/SingleProduct";

const Stack = createNativeStackNavigator();

const Stacksceen = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    load ? <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} /> : null
                }
                <Stack.Screen name="product" component={Product} options={{ headerShown: false }} />
                <Stack.Screen name="single" component={Singleproduct} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacksceen;