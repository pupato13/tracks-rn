import React from "react";
import { createContext, useReducer } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

const TOKEN_KEY = "@TrackersApp";

interface IAuthState {
    token?: string | null;
    errorMessage?: string | null;
}

interface IAuthAction {
    type: "add_error" | "sign_up";
    payload: string;
}

const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "sign_up":
            return { token: action.payload, errorMessage: "" };
        default:
            return state;
    }
};

interface IAuthCredentials {
    email: string;
    password: string;
}

const signUp = (dispatch: React.Dispatch<IAuthAction>) => async ({
    email,
    password,
}: IAuthCredentials) => {
    try {
        const response = await api.post("/signup", { email, password });

        console.log(response);

        const { token } = response.data;

        if (token) {
            await AsyncStorage.setItem(TOKEN_KEY, token);

            dispatch({
                type: "sign_up",
                payload: token,
            });

            // navigate to list
        }
    } catch (error) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with Sign Up!",
        });
    }
};

const signIn = (dispatch: React.Dispatch<IAuthAction>) => {
    return async ({ email, password }: IAuthCredentials) => {
        // go to api and signIn
    };
};

const signOut = (dispatch: React.Dispatch<IAuthAction>) => {
    return () => {
        // manage async storage
    };
};

interface IAuthContextProps {
    authState: IAuthState;
    // authDispatch: React.Dispatch<IAuthAction>;
    signUp: (dispatch: React.Dispatch<IAuthAction>) => void;
    signIn: (dispatch: React.Dispatch<IAuthAction>) => void;
    signOut: (dispatch: React.Dispatch<IAuthAction>) => void;
}

const initialAuthState: IAuthState = {
    token: null,
    errorMessage: "",
};

// const AuthContext = createContext<IAuthContextProps>({
//     authState: initialAuthState,
//     authDispatch: () => {},
// });

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider
            value={{
                authState: state,
                signUp,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
