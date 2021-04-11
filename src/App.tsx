import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import Routes from "./routes";
import { authReducer } from "./context/authReducer";
import { initialState } from "./context/authState";
import { AuthProvider } from "./context/autoContext";
import { DiegoProvider } from "./context/diego";

const App: React.FC = () => {
    // const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    // const authContextValues = {
    //     authState,
    //     authDispatch,
    // };

    // const [authState, authDispatch] = useReducer(authReducer, initialState);

    // const authContextValues = {
    //     authState,
    //     authDispatch,
    // };

    return (
        <NavigationContainer>
            <DiegoProvider>
                <View style={{ flex: 1, backgroundColor: "#312e38" }}>
                    <Routes />
                </View>
            </DiegoProvider>
        </NavigationContainer>
    );
};

export default App;
