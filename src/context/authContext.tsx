import React, {
    createContext,
    useCallback,
    useContext,
    useReducer,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";
import { IAuthState, initialState } from "./authState";
import { ActionType, AuthActions, ICredentials } from "./authActions";

const TOKEN_KEY = "@TrackersApp";

const authReducer = (state: IAuthState, action: AuthActions): IAuthState => {
    switch (action.type) {
        case ActionType.addError:
            return { ...state, errorMessage: action.payload };
        case ActionType.signUp:
            return { token: action.payload.token, errorMessage: "" };
        default:
            return state;
    }
};

export interface IAuthContextData {
    state: IAuthState;
    signUp: (credentials: ICredentials) => Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const signUp = useCallback(
        async ({ email, password }: ICredentials): Promise<void> => {
            //
            console.log("");
            console.log("sign up method from DIEGO provider");
            console.log("");

            // dispatch({
            //     type: ActionType.signUp,
            //     payload: { token: "", errorMessage: "" },
            // });

            try {
                console.log("");
                console.log("call API");
                console.log("");

                const response = await api.post("/signup", { email, password });

                console.log("");
                console.log("RESPONSE ->", response);
                console.log("");

                console.log(response.data);

                const { token } = response.data;

                if (token) {
                    await AsyncStorage.setItem(TOKEN_KEY, token);

                    // dispatch({
                    //     type: "sign_up",
                    //     payload: token,
                    // });

                    dispatch({
                        type: ActionType.signUp,
                        payload: token,
                    });

                    // navigate to list
                }
            } catch (error) {
                console.log("");
                console.log("XI, DEU ERRO");
                console.log(error.message);
                console.log("");

                dispatch({
                    type: ActionType.addError,
                    payload: "Something went wrong with Sign Up!",
                });
            }
        },
        [],
    );

    return (
        <AuthContext.Provider
            value={{
                state,
                signUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
