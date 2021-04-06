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
