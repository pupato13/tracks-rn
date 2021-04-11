export interface IAuthState {
    token?: string | null;
    errorMessage?: string | null;
}

export const initialState: IAuthState = {
    token: null,
    errorMessage: "",
};
