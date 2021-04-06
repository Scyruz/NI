import React, { forwardRef } from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { Box, useTheme } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
    placeholder: string;
    icon: string;
    touched?: boolean;
    error?: string;
};

const TextInput = forwardRef<RNTextInput, TextInputProps>(
    ({ icon, touched, error, ...props }: TextInputProps, ref) => {

        const theme = useTheme();
        const SIZE = theme.borderRadii.m * 2;

        const reColor = !touched ? "text" : error ? "coral" : "primary";
        const color = theme.colors[reColor];

        return (
            <Box
                flexDirection="row"
                height={48}
                alignItems="center"
                borderRadius="s"
                borderWidth={0.8}
                borderColor={reColor}
                padding="s"
            >
                <Box padding="s" {...{ color }}>
                    <Icon name={icon} size={16} {...{ color }} />
                </Box>
                <Box flex={1}>
                    <RNTextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor={color}
                        {...{ ref }}
                        {...props}
                    />
                </Box>
                {touched && (
                    <Box
                        height={SIZE}
                        width={SIZE}
                        borderRadius="m"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={!error ? "primary" : "coral"} >
                        <Icon
                            name={!error ? "check" : "x"}
                            color="white"
                            size={16} />
                    </Box>)
                }
            </Box >
        );
    });

export default TextInput;