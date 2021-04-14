// import * as React from "react";

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//     navigationRef.current?.navigate(name, params);
// }
import React, { useRef } from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export const UseNavigate = (name: string): void => {
    const navigationRef = useRef<NavigationContainerRef>();

    navigationRef.current?.navigate(name);
};
