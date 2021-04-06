import React from "react";
import { Feather as Icon } from "@expo/vector-icons"
import { Box, Theme } from "./Theme";
import { Text } from "../components";


interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({ name, size, color, backgroundColor }: RoundedIconProps) => {
    const iconSize = size * 0.8;

    return (
        <Box
            height={size}
            width={size}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            {...{ backgroundColor }}
        >
            <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
                <Icon
                    color="white"
                    size={size * 0.8}
                    {...{ name }}
                />
            </Text>
        </Box>
    );

}

export default RoundedIcon;