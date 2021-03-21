import React from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
    // if (loading) {
    //     return (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //             }}
    //         >
    //             <ActivityIndicator size="large" color="#ff9000" />
    //         </View>
    //     );
    // }

    // return user ? <AppRoutes /> : <AuthRoutes />;
    return <AppRoutes />;
};

export default Routes;
