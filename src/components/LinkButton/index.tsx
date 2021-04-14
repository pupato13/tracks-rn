import React from "react";

import { navigate } from "../../hooks/RootNavigation.js";

import { Container, LinkElement, LinkLabel } from "./styles";

interface ILinkProps {
    label: string;
    goToScreen: string;
}

const LinkButton: React.FC<ILinkProps> = ({ label, goToScreen }) => {
    return (
        <Container>
            <LinkElement onPress={() => navigate(goToScreen)}>
                <LinkLabel>{label}</LinkLabel>
            </LinkElement>
        </Container>
    );
};

export default LinkButton;
