import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Box, Text } from '../components/Theme';
import { Button } from '../components'
import { Routes, StackNavigationProps } from '../components/Navigation';

const { width } = Dimensions.get("window");
const picture = {
    src: require('./assets/5.png'),
    width: 2000,
    height: 2000,
};

export const assets = [picture.src]

const Welcome =
    ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
        return (
            <Box flex={1} backgroundColor="white">
                <Box
                    flex={1}
                    borderBottomRightRadius="xl"
                    backgroundColor="grey"
                    alignItems="center" >
                </Box>
                <Box flex={1} borderTopLeftRadius="xl" >
                    <Box
                        backgroundColor="grey"
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        padding="xl"
                    />
                    <Box backgroundColor="white" borderTopLeftRadius="xl" flex={1} justifyContent="space-evenly" alignItems="center">
                        <Text variant="title2">Empecemos</Text>
                        <Text variant="body" textAlign="center">
                            Inicia sesión
                            para una experiencia increíble
                    </Text>
                        <Button
                            variant="primary"
                            label="¿Ya tienes una cuenta?"
                            onPress={() => navigation.navigate("Login")} />
                        <Button
                            label="Únete, es Gratis"
                            onPress={() => true} />
                        <Button
                            variant="transparent"
                            label="¿Olvidaste tu contraseña?"
                            onPress={() => true} />
                    </Box>
                </Box >
            </Box >
        );
    }

export default Welcome;