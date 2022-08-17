import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PolicyGeneratorOne from "./policyGenerator1";

const Stack = createNativeStackNavigator();

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Generator" >
                <Stack.Screen name="Generator" component={PolicyGeneratorOne} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screens;