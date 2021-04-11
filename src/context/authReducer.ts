import AsyncStorage from "@react-native-community/async-storage";
import { useContext } from "react";
import { navigate } from "../hooks/RootNavigation";
import api from "../services/api";
import { ActionType, AuthActions, ISignUp } from "./authAction";
import { IAuthState } from "./authState";
import { useAuthContext } from "./autoContext";
// import AuthContext from "./autoContext";
// import { AuthContext } from "./autoContext";

const TOKEN_KEY = "@TrackersApp";

interface ISignUpCredentials {
    email: string;
    password: string;
}

export function authReducer(
    state: IAuthState,
    action: AuthActions,
): IAuthState {
    switch (action.type) {
        case ActionType.signUp:
            return { token: action.payload.token, errorMessage: "" };
        case ActionType.addError:
            return { errorMessage: action.payload };
        default:
            return state;
    }
}

export const signUp = async ({
    email,
    password,
}: ISignUpCredentials): Promise<void> => {
    const { authDispatch } = useAuthContext();

    try {
        const response = await api.post("/signup", {
            email,
            password,
        });

        console.log(response);

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        authDispatch({
            type: ActionType.signUp,
            payload: { token: response.data.token },
        });

        navigate("/TrackList");
    } catch (error) {
        console.log(error.message);
        // dispatch({
        //     type: ActionType.addError,
        //     payload: "Something went wrong with Sign Up!",
        // });
    }
};

export const signUp_Teste = async ({
    email,
    password,
}: ISignUpCredentials): Promise<void> => {
    const { authDispatch } = useAuthContext();

    try {
        const response = await api.post("/signup", {
            email,
            password,
        });

        console.log(response);

        await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

        authDispatch({
            type: ActionType.signUp,
            payload: { token: response.data.token },
        });

        navigate("/TrackList");
    } catch (error) {
        authDispatch({
            type: ActionType.addError,
            payload: "Something went wrong with Sign Up!",
        });
    }
};

export const teste = ({ email, password }: ISignUpCredentials): ISignUp => ({
    type: ActionType.signUp,
    payload: { token: "", errorMessage: "" },
});

export const teste2 = async ({
    email,
    password,
}: ISignUpCredentials): Promise<void> => {
    const { authDispatch } = useAuthContext();

    console.log("CALL TESTE 2");

    const response = await api.post("/signup", {
        email,
        password,
    });

    console.log(response);

    await AsyncStorage.setItem(TOKEN_KEY, response.data.token);

    authDispatch({
        type: ActionType.signUp,
        payload: { token: response.data.token },
    });
};
function AuthContext(AuthContext: any): { authDispatch: any } {
    throw new Error("Function not implemented.");
}
