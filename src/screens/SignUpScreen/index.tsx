import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../context/authContext";

import {
    Container,
    Title,
    Spacer,
    ErrorMessage,
    Row,
    InputElement,
} from "./styles";

const SignUpScreen: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, signUp } = useAuth();

    const handleSignUp = useCallback(async () => {
        await signUp({
            email,
            password,
        });
    }, [email, password, signUp]);

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
