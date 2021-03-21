import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";

const App = createBottomTabNavigator();

const TrackListFlow = createStackNavigator();

const TrackListFlowRoutes: React.FC = () => (
    <TrackListFlow.Navigator
        // To remove Header
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#312e38" },
        }}
    >
        <TrackListFlow.Screen name="List" component={TrackListScreen} />
        <TrackListFlow.Screen
            name="TrackDetail"
            component={TrackDetailScreen}
        />
    </TrackListFlow.Navigator>
);

const AppRoutes: React.FC = () => (
    <App.Navigator
        initialRouteName="List"
        tabBarOptions={{
            labelPosition: "beside-icon",
            activeTintColor: "#e6e600",
            labelStyle: {
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                fontWeight: "600",
            },
            inactiveTintColor: "#B7B7CC",
        }}
    >
        <App.Screen
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon size={25} name="list" color={color} />
                ),
                title: "List",
            }}
            name="TrackList"
            component={TrackListFlowRoutes}
        />
        <App.Screen
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon size={25} name="list" color={color} />
                ),
                title: "Create",
            }}
            name="TrackCreate"
            component={TrackCreateScreen}
        />
        <App.Screen
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon size={25} name="list" color={color} />
                ),
                title: "Account",
            }}
            name="Account"
            component={AccountScreen}
        />
    </App.Navigator>
);

export default AppRoutes;
