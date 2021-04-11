import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../context/authContext";

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

    const { state } = useAuth();

    return state.token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
