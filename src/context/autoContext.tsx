import React, { createContext, useCallback, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from "../hooks/RootNavigation";
import api from "../services/api";
import { ActionType, AuthActions, ISignUp } from "./authAction";
import { initialState, IAuthState } from "./authState";

// export const AuthContext = createContext<{
//     state: IAuthState;
//     dispatch: React.Dispatch<AuthActions>;
// }>({
//     state: initialState,
//     dispatch: () => {},
// });

const TOKEN_KEY = "@TrackersApp";

interface ICredentials {
    email: string;
    password: string;
}

interface IAuthContextData {
    authState: IAuthState;
    // signUp(): Promise<void>;
    authDispatch: React.Dispatch<AuthActions>;
    signUp(credentials: ICredentials): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

// export const signUp_Teste = async ({ email, password }: ICredentials): Promise<void> => {

// };

// export const AuthContextConsumer = AuthContext.Consumer;
// export const AuthContextProvider = AuthContext.Provider;

// export default AuthContext;

const AuthProvider: React.FC = ({ children }) => {
    const signUp = useCallback(async ({ email, password }) => {
        // const { authDispatch } = useContext(AuthContext);

        console.log("");
        console.log("SIGN UP METHOD");
        console.log("");
        // console.log("AuthContext.Provider -> ", AuthContext.Provider._context);

        const authContext = useContext(AuthContext);

        console.log("");
        console.log("INSTANCE AUTH CONTEXT");
        console.log(authContext);
        console.log("");
        // console.log("CALL TESTE 2");
        // const response = await api.post("/signup", {
        //     email,
        //     password,
        // });
        // console.log(response);
        // await AsyncStorage.setItem(TOKEN_KEY, response.data.token);
        // authDispatch({
        //     type: ActionType.signUp,
        //     payload: { token: response.data.token },
        // });

        console.log("");
        console.log("CALL SIGN UP FROM USE AUTH CONTEXT");
        console.log("");

        const response = await api.post("/signup", {
            email,
            password,
        });

        console.log(response);

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        // authDispatch({
        //     type: ActionType.signUp,
        //     payload: {
        //         token: response.data.token,
        //     },
        // });

        //navigate("/TrackList");

        navigate("/TrackList");
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authState: initialState,
                authDispatch: () => {},
                signUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext(): IAuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuthContext };
