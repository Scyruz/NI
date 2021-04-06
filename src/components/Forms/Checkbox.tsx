import { Feather as Icon } from "@expo/vector-icons";
import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from "../../components";
import { Box } from "../Theme";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
};

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
    return (
        <RectButton
            style={{ justifyContent: "center" }}
            onPress={() => onChange()}>
            <Box flexDirection="row" alignItems="center">
                < Box
                    marginRight="s"
                    height={20}
                    width={20}
                    borderRadius="s"
                    justifyContent="center"
                    alignItems="center"
                    borderWidth={1}
                    borderColor="primary"
                    backgroundColor={checked ? "primary" : "white"} >
                    <Icon name="check" color="white" />
                </Box >
                <Text variant="button">{label}</Text>
            </Box >
        </RectButton >

    );
};

export default Checkbox;
