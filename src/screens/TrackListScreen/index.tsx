import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, Link, LinkText } from "./styles";

const TrackListScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Track List Screen</Title>
            <Link onPress={() => navigation.navigate("TrackDetail")}>
                <LinkText>go to Details</LinkText>
            </Link>
        </Container>
    );
};

export default TrackListScreen;
