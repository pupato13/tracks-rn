import AsyncStorage from "@react-native-community/async-storage";
import { createContext } from "react";
import api from "../services/api";
import createDataContext from "./createDataContext";
// import createDataContext from "./createDataContext";

export interface IAuthReducerAction {
    type: string;
    payload: any;
}

export interface IAuthState {
    token: string;
    errorMessage: string;
}

export interface IAuthParams {
    email: string;
    password: string;
}

enum ACTIONS {
    ADD_ERROR = "add_error",
    SIGN_UP = "sign_up",
}

const TOKEN_KEY = "@TrackersApp";

export type Dispatch = (action: IAuthReducerAction) => void;

const authReducer = (state: IAuthState, action: IAuthReducerAction) => {
    switch (action.type) {
        case ACTIONS.ADD_ERROR:
            return { ...state, errorMessage: action.payload };
        case ACTIONS.SIGN_UP:
            return { token: action.payload, errorMessage: "" };
        default:
            return state;
    }
};

const signUp = (dispatch: Dispatch) => async ({
    email,
    password,
}: IAuthParams): Promise<void> => {
    try {
        // const response = await trackerApi.post("/signup", {
        //     email,
        //     password,
        // });
        const response = await api.post("/signup", {
            email,
            password,
        });

        console.log(response);

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        dispatch({
            type: ACTIONS.SIGN_UP,
            payload: response.data.token,
        });

        // navigate("TrackList");
        console.log("navigate to TrackList");
    } catch (error) {
        dispatch({
            type: ACTIONS.ADD_ERROR,
            payload: "Something went wrong with Sign Up!",
        });
    }
};

const signIn = (dispatch: Dispatch) => async ({
    email,
    password,
}: IAuthParams): Promise<void> => {
    try {
        // const response = await trackerApi.post("/signup", {
        //     email,
        //     password,
        // });
        const response = await api.post("/signup", {
            email,
            password,
        });

        console.log(response);

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        dispatch({
            type: ACTIONS.SIGN_UP,
            payload: response.data.token,
        });

        // navigate("TrackList");
        console.log("navigate to TrackList");
    } catch (error) {
        dispatch({
            type: ACTIONS.ADD_ERROR,
            payload: "Something went wrong with Sign Up!",
        });
    }
};

export const InitialState: IAuthState = {
    token: "",
    errorMessage: "",
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn },
    InitialState,
);

// const createDataContext = () => {

// };
