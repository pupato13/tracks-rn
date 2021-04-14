import React, { useState } from "react";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";
import { Button, Input, LinkButton } from "..";
import { ICredentials } from "../../context/authActions";

import { Container, Title, Spacer, ErrorMessage } from "./styles";

interface IAuthFormScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    headerText: string;
    errorMessage: string;
    linkText: string;
    linkScreenName: string;
    submitButtonText: string;
    handleSubmit({ email, password }: ICredentials): Promise<void>;
}

const AuthForm: React.FC<IAuthFormScreenProps> = ({
    navigation,
    headerText,
    errorMessage,
    linkText,
    linkScreenName,
    submitButtonText,
    handleSubmit,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Title>{headerText}</Title>
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
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <Button
                text={submitButtonText}
                onPress={() => handleSubmit({ email, password })}
            />
            <LinkButton label={linkText} goToScreen={linkScreenName} />
        </Container>
    );
};

export default AuthForm;
