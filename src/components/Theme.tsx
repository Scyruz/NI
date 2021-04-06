import { createBox, createText, useTheme as useReTheme } from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";


export const theme = ({
    colors: {
        primary: "#3D5B59",
        title: "#353643",
        text: "#0C2D48",
        white: "white",
        button: "#0C0D34",
        grey: "rgba(12,13,52,0.05)",
        darkGrey: "#8A8D90",
        peach: "#FFE4D9",
        black: "black",
        coral: "#F79489",
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProDisplay-Bold",
            color: "white",
            textAlign: "center",
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProDisplay-Semibold",
            color: "title",
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProDisplay-Semibold",
            color: "title",
        },
        body: {
            fontSize: 16,
            lineHeight: 30,
            fontFamily: "SFProDisplay-Regular",
            color: "text",
        },
        button: {
            fontSize: 15,
            fontFamily: "SFProDisplay-Medium",
            color: "text",
        },
    },
    breakpoints: {},

});

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T) => () => {
        const currentTheme = useTheme();
        return styles(currentTheme);
    };
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();