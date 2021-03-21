import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, Link, LinkText } from "./styles";

const TrackDetailScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Track Detail Screen</Title>
            <Link onPress={() => navigation.goBack()}>
                <LinkText>go to List</LinkText>
            </Link>
        </Container>
    );
};

export default TrackDetailScreen;
