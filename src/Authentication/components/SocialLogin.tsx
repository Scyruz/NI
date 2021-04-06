import React, { ReactNode } from "react";
import Svg, { ClipPath, Defs, Path, Use } from "react-native-svg";
import { Box, useTheme } from "../../components/Theme";


interface SocialIconProps {
    children: ReactNode;
};

const GoogleIcon = () => (
    <Svg
        viewBox="0 0 50 50"
    >
        <Defs>
            <Path
                id="prefix__a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
        </Defs>
        <ClipPath id="prefix__b">
            <Use xlinkHref="#prefix__a" overflow="visible" />
        </ClipPath>
        <Path clipPath="url(#prefix__b)" fill="#FBBC05" d="M0 37V11l17 13z" />
        <Path
            clipPath="url(#prefix__b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
        />
        <Path
            clipPath="url(#prefix__b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
        />
        <Path
            clipPath="url(#prefix__b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
        />
    </Svg>
)

const FacebookIcon = () => (
    <Svg
        viewBox="0 0 580 550" >
        <Path
            d="M134.941 272.691h56.123v231.051a8.256 8.256 0 008.258 8.258h95.159a8.256 8.256 0 008.258-8.258V273.78h64.519a8.26 8.26 0 008.204-7.315l9.799-85.061a8.259 8.259 0 00-8.202-9.203h-74.316V118.88c0-16.073 8.654-24.224 25.726-24.224h48.59a8.258 8.258 0 008.258-8.258V8.319a8.256 8.256 0 00-8.258-8.258h-66.965A65.863 65.863 0 00307.027 0c-11.619 0-52.006 2.281-83.909 31.63-35.348 32.524-30.434 71.465-29.26 78.217v62.352H134.94a8.256 8.256 0 00-8.258 8.258v83.975a8.26 8.26 0 008.259 8.259z"
            fill="#385c8e"
        />
    </Svg>
)


const SocialIcon = ({ children }: SocialIconProps) => {
    const theme = useTheme();

    const SIZE = theme.borderRadii.l * 2;
    return (
        <Box flexDirection="row">
            <Box
                marginHorizontal="s"
                backgroundColor="white"
                width={SIZE} height={SIZE} borderRadius="l"
                justifyContent="center"
                alignItems="center">
                {children}
            </Box>
        </Box >
    );
}



const SocialLogin = () => {
    return (
        <Box flexDirection="row" justifyContent="center">
            <Box alignItems="center" >
                <SocialIcon >
                    <FacebookIcon />
                </SocialIcon>
            </Box>

            <Box alignItems="center">
                <SocialIcon >
                    <GoogleIcon />
                </SocialIcon>
            </Box>
        </Box >
    );
};

export default SocialLogin;