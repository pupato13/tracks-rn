import React from "react";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";
import { AuthForm } from "../../components";
import { useAuth } from "../../context/authContext";

import { Container } from "./styles";

interface ISignUpScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SignUpScreen: React.FC<ISignUpScreenProps> = ({ navigation }) => {
    const { state, signUp } = useAuth();

    return (
        <Container>
            <AuthForm
                navigation={navigation}
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage || ""}
                linkText="Already have an account? Sign in instead"
                linkScreenName="SignIn"
                submitButtonText="Sign Up"
                handleSubmit={signUp}
            />
        </Container>
    );
};

export default SignUpScreen;
