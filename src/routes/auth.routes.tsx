import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        initialRouteName="SignUp"
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#333" },
        }}
    >
        <Auth.Screen name="SignIn" component={SignInScreen} />
        <Auth.Screen name="SignUp" component={SignUpScreen} />
    </Auth.Navigator>
);

export default AuthRoutes;
