// import React, { createContext, useReducer } from "react";
// import { IAuthReducerAction, IAuthState } from "./authContext";

// interface IAuthCredentials {
//     email: string;
//     password: string;
// }

// // VER ESSE GITHUB AQUI
// // https://github.com/carvalhoviniciusluiz/facebook-clone/blob/master/src/StateProvider.tsx

// interface IAuthContextData {
//     reducer: (prevState: IAuthState, action: IAuthReducerAction) => IAuthState;
//     actions: ((data: React.DispatchWithoutAction) => Promise<void>)[];
//     defaultValue: IAuthState;
//     // signUp(credentials: IAuthCredentials): Promise<void>;
// }

// interface IProvider {
//     reducer: (prevState: IAuthState, action: IAuthReducerAction) => IAuthState;
//     initialState: IAuthState;
//     children: React.ReactNode;
// }

// // const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

// export default ({ reducer, actions, defaultValue }: IAuthContextData) => {
//     const Context = createContext<IAuthContextData>({} as IAuthContextData);

//     const Provider = () => {
//         const [state, dispatch] = useReducer(reducer, defaultValue);

//         // const boundActions = {};
//         const boundActions: React.Dispatch<IAuthReducerAction>[] = [];

//         for (let key in actions) {
//             boundActions[key] = actions[key](dispatch);
//             // boundActions[key] = actions[key](dispatch);
//             // boundActions.push(actions[key](dispatch));
//         }

//         return (
//             <Context.Provider
//                 value={{
//                     state,
//                     ...boundActions,
//                 }}
//             >
//                 {children}
//             </Context.Provider>
//         );
//     };

//     return { Context, Provider };
// };

// // const AuthProvider: React.FC = ({ children }) => {
// //     return <AuthContext.Provider value></AuthContext.Provider>;
// // };

import React, { createContext, useReducer } from "react";
import {
    Dispatch,
    IAuthParams,
    IAuthReducerAction,
    IAuthState,
} from "./authContext";

interface ICreateDataContext {
    Context: React.Context<IAuthContextData>;
    Provider: any;
}

interface IAuthContextData {
    reducer: (prevState: IAuthState, action: IAuthReducerAction) => IAuthState;
    actions: ((data: React.DispatchWithoutAction) => Promise<void>)[];
    defaultValue: IAuthState;
    // signUp(credentials: IAuthCredentials): Promise<void>;
}

export default (
    reducer: (state: IAuthState, action: IAuthReducerAction) => IAuthState, // | { errorMessage: any; token: string | null; } | { token: any; errorMessage: string; },
    actions: {
        signUp: (
            dispatch: Dispatch,
        ) => ({ email, password }: IAuthParams) => Promise<void>;
    },
    // InitialState: IAuthState): { Provider: any; Context: any; } {
    initialState: IAuthState,
): ICreateDataContext => {
    const Context = createContext<IAuthContextData>({} as IAuthContextData);

    const Provider = ({ children }: any) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
    };

    return { Context, Provider };
};
