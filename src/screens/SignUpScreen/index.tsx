import React, { useCallback, useContext, useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ActionType } from "../../context/authAction";
import { signUp, teste, signUp_Teste, teste2 } from "../../context/authReducer";
import { useAuthContext } from "../../context/autoContext";
// import AuthContext from "../../context/authContext_old";

import { Container, Title, Spacer, ErrorMessage } from "./styles";

const SignUpScreen: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const {} = useContext(AuthContext);

    // const { authState, authDispatch, signUp } = useAuthContext();

    const authContext = useAuthContext();

    // const handleSignUp = async () => {
    //     // Alert.alert("ops");

    //     // await dispatch({
    //     //     type: ActionType.signUp,
    //     //     payload: { }
    //     // });
    //     // await dispatch(
    //     //     signUp({
    //     //         email,
    //     //         password,
    //     //     }),
    //     // );

    //     // dispatch(signUp_Teste({ email, password }));
    //     await teste2({ email, password });
    // };

    const handleSignUp = useCallback(async () => {
        // await teste2({ email, password });

        // await signUp({
        //     email,
        //     password,
        // });

        console.log("");
        console.log("CALL HANDLE SIGN UP");
        console.log("");

        await authContext.signUp({
            email,
            password,
        });
    }, []);

    return (
        <Container>
            <Title>Sign Up for Tracker</Title>
            <Spacer />
            <Input
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Spacer />
            {authContext.authState.errorMessage ? (
                <ErrorMessage>
                    {authContext.authState.errorMessage}
                </ErrorMessage>
            ) : null}
            <Button text="Sign Up" onPress={handleSignUp} />
        </Container>
    );
};

export default SignUpScreen;
