import React, { useContext, useState } from "react";
import AuthContext from "../../context/authContext";

import { Container, Title } from "./styles";

const SignUpScreen: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {} = useContext(AuthContext);

    const handleSignUp = async () => {};

    return (
        <Container>
            <Title>Sign Up Screen</Title>
        </Container>
    );
};

export default SignUpScreen;
