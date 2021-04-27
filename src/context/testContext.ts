import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./contextFactory";
import trackerApi from "../services/api";
import { navigate } from "../hooks/RootNavigation.js";
import { IAuthState } from "./authState";
import { ICredentials } from "./authActions";

const TOKEN_KEY = "@TrackersApp";
const ACTIONS = {
    ADD_ERROR: "add_error",
    SIGN_UP: "sign_up",
};

export interface ITestActions {
    type: "add_error" | "sign_up";
    payload: string;
}

const authReducer = (state: IAuthState, action: ITestActions) => {
    switch (action.type) {
        case ACTIONS.ADD_ERROR:
            return { ...state, errorMessage: action.payload };
        case ACTIONS.SIGN_UP:
            return { token: action.payload, errorMessage: "" };
        default:
            return state;
    }
};

const signUp = (dispatch: React.Dispatch<ITestActions>) => async ({
    email,
    password,
}: ICredentials) => {
    try {
        const response = await trackerApi.post("/signup", {
            email,
            password,
        });

        console.log(response);

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        dispatch({
            type: "sign_up",
            payload: response.data.token,
        });

        navigate("TrackList");
    } catch (error) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with Sign Up!",
        });
    }
};

const signIn = (dispatch: React.Dispatch<ITestActions>) => {
    return async ({ email, password }: ICredentials) => {
        // go to api and signIn
    };
};

const signOut = (dispatch: React.Dispatch<ITestActions>) => {
    return () => {
        // manage async storage
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut },
    {
        token: null,
        errorMessage: "",
    },
);
