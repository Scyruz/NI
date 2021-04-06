import React from "react";
import { View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import SocialLogin from "../Authentication/components/SocialLogin";
import { Box, Text } from "./Theme";

interface FooterProps {
    onPress: () => void;
    title: string;
    action: string;
};

const Footer = ({ onPress, title, action }: FooterProps) => {
    return (
        <>
            <SocialLogin />
            <Box alignItems="center" margin="m" >
                <TouchableOpacity activeOpacity={0.7}{...{ onPress }}>
                    <Text variant="button" color="text" textAlign="center" marginHorizontal="s">
                        <Text >{title} </Text>
                        <Text color="primary">{action}</Text>
                    </Text>
                </TouchableOpacity>
            </Box>
        </>
    );
};

export default Footer;