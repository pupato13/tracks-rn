import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import Routes from "./routes";
import { AuthContext, AuthProvider } from "./context/authContext";

const App: React.FC = () => {
    // const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    // const authContextValues = {
    //     authState,
    //     authDispatch,
    // };

    return (
        <AuthProvider>
            <NavigationContainer>
                <View style={{ flex: 1, backgroundColor: "#312e38" }}>
                    <Routes />
                </View>
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;
