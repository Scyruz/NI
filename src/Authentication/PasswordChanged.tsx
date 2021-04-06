import React from "react";
import { Box, Button, Container, Text } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Feather as Icon } from "@expo/vector-icons"
import CloseButton from "../components/CloseButton";

const SIZE = 80;


const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, "PasswordChanged">) => {
    return (
        <Container
            pattern={0}
            footer=
            {
                <Box flexDirection={"row"} justifyContent="center" marginBottom="m">
                    <CloseButton onPress={() => navigation.pop()} />
                </Box >
            }>
            < Box flex={1} justifyContent="center" alignItems="center">
                <Box
                    backgroundColor="primary"
                    opacity={0.5}
                    marginBottom="xl"
                    style={{
                        height: SIZE,
                        width: SIZE,
                        borderRadius: SIZE / 2,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text color="primary" textAlign="center">
                        < Icon name="check" size={32} />
                    </Text>
                </Box>
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Tu contraseña se ha reestablecido exitosamente
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                </Text>
                <Box alignItems="center" marginTop="m">
                    <Button
                        variant="primary"
                        label="Volver a Iniciar Sesión"
                        onPress={() => navigation.navigate("Login")}>
                    </Button>
                </Box>
            </Box>

        </Container >
    );
};

export default PasswordChanged;