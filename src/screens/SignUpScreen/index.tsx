import React, { useCallback, useContext, useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ActionType } from "../../context/authAction";
import { signUp, teste, signUp_Teste, teste2 } from "../../context/authReducer";
import { useAuthContext } from "../../context/autoContext";
import { useDiego } from "../../context/diego";
// import AuthContext from "../../context/authContext_old";

import {
    Container,
    Title,
    Spacer,
    ErrorMessage,
    Row,
    InputElement,
    InputLabel,
} from "./styles";

const SignUpScreen: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, signUp } = useDiego();

    const handleSignUp = useCallback(async () => {
        console.log("");
        console.log("CALL HANDLE SIGN UP");
        console.log("");
        console.log("Email -> ", email);
        console.log("Password -> ", password);
        console.log("");

        await signUp({
            email,
            password,
        });
    }, [email, password]);

    return (
        <Container>
            <Title>Sign Up for Tracker</Title>
            <Spacer />
            <Row>
                <InputElement
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </Row>
            <Spacer />
            <Title>{email}</Title>
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
            {state.errorMessage ? (
                <ErrorMessage>{state.errorMessage}</ErrorMessage>
            ) : null}
            <Button text="Sign Up" onPress={handleSignUp} />
        </Container>
    );
};

export default SignUpScreen;
