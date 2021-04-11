import React from "react";

import { Container, ButtonElement, ButtonText } from "./styles";

interface IButtonProps {
    text: string;
    onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, onPress }) => {
    return (
        <Container>
            <ButtonElement onPress={onPress}>
                <ButtonText>{text}</ButtonText>
            </ButtonElement>
        </Container>
    );
};

export default Button;
