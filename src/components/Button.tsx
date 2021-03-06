import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme, Text } from "./Theme"

const styles = StyleSheet.create({
    container:
    {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },
})

interface Buttonprops {
    variant: "default" | "primary" | "transparent";
    label?: string;
    onPress: () => void;
    children?: ReactNode;
}

const Button = ({ variant, label, onPress, children }: Buttonprops) => {
    const theme = useTheme<Theme>();
    const backgroundColor = variant === "primary" ? theme.colors.primary : variant === "transparent" ? "transparent" : theme.colors.grey;
    const color = variant === "primary" ? theme.colors.white : theme.colors.button;
    return (
        <RectButton style={[styles.container, { backgroundColor }]}
            {...{ onPress }}>
            {children ? children : (<Text variant="button" style={{ color }} >{label}</Text>
            )}
        </RectButton >
    );
};

Button.defaultProps = { variant: "default" };
export default Button;
