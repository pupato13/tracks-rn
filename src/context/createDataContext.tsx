// import React, { useReducer } from 'react';

// export default <T, T2>(
//         reducer: {(state: T, action: {type: string, payload: any}): T},
//         actions: {[index: string]: Function},
//         initialState: T
//     ) => {
//     const Context = React.createContext<T2>({initialState} as unknown as T2);

//     const Provider = ({ children }: { children: any}) => {
//         const [state, dispatch] = useReducer(reducer, initialState);

//         const boundActions: {[index: string]: Function} = {};

//         for (let key in actions) {
//             boundActions[key] = actions[key](dispatch);
//         }

//         return (
//             <Context.Provider value={‌{ state, ...boundActions } as unknown as T2}>
//                 {children}
//             </Context.Provider>
//         );
//     }

//     return { Context, Provider };
// }

import React, { createContext, useReducer } from "react";

interface IAuthState {
    token?: string | null;
    errorMessage?: string | null;
}

interface IAuthAction {
    type: "add_error" | "sign_up";
    payload: string;
}

interface IAuthContextProps {
    authState: IAuthState;
    signUp: (dispatch: React.Dispatch<IAuthAction>) => void;
    signIn: (dispatch: React.Dispatch<IAuthAction>) => void;
    signOut: (dispatch: React.Dispatch<IAuthAction>) => void;
}

export default (reducer: any, actions: any, initialState: IAuthState) => {
    const Context = createContext<IAuthContextProps>({} as IAuthContextProps);

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions: any = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider
                value={{
                    authState: state,
                    ...actions,
                }}
            >
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};
