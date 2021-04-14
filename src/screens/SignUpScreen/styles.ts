import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    justify-content: center;
    margin-bottom: 150px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #fff;
    text-align: center;
`;

export const Spacer = styled.View`
    margin: 16px;
`;

export const ErrorMessage = styled.Text`
    font-size: 16px;
    color: #c53030;
    text-align: center;
    margin-bottom: 16px;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 8px;
`;

export const InputElement = styled.TextInput`
    padding: 16px 8px;
    font-size: 16px;
    background-color: #fff;
    flex: 1;
    padding: 8px;
`;

export const InputLabel = styled.Text`
    color: #b2d235;
    font-size: 16px;
    font-weight: 700;
`;
