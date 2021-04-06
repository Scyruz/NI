import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, useTheme } from "./Theme";

export const assets = [
    require("./assets/patterns/1.jpg"),
    require("./assets/patterns/2.jpg"),
    require("./assets/patterns/4.jpg"),
] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 2000;
const height = (width * aspectRatio);

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern: 0 | 1 | 2;
}


const Container = ({ children, footer, pattern }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const asset = assets[pattern];
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight} backgroundColor="peach" >
                <Box flex={1} borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61} >
                    <Box backgroundColor="white">
                        <Image
                            source={asset}
                            style={{
                                width,
                                height,
                                borderBottomLeftRadius: theme.borderRadii.xl
                            }}
                        />
                    </Box>
                    <Box flex={1} overflow="hidden">
                        <Image
                            source={asset}
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                width,
                                height,
                                top: -height * 0.61,
                            }}
                        />
                        <Box borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white" flex={1}>
                            {children}
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop="m" />
                {footer}
                <Box height={insets.bottom} />
            </Box >
        </KeyboardAwareScrollView>
    );
};


export default Container;