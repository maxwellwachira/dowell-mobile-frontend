import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PolicyGeneratorOne from "./policyGenerator1";


function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Generator" >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Generator" component={PolicyGeneratorOne} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screens;