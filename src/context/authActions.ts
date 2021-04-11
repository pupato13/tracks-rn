import { IAuthState } from "./authState";

// eslint-disable-next-line no-shadow
export enum ActionType {
    signUp,
    signIn,
    signOut,
    addError,
}

export interface ICredentials {
    email: string;
    password: string;
}

export interface ISignUp {
    type: ActionType.signUp;
    payload: IAuthState;
}

export interface ISignIn {
    type: ActionType.signIn;
    payload: IAuthState;
}

export interface ISignOut {
    type: ActionType.signOut;
}

export interface IAddError {
    type: ActionType.addError;
    payload: string;
}

export type AuthActions = ISignUp | ISignIn | ISignOut | IAddError;
