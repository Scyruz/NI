import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import Animated, { divide, Extrapolate, interpolateColors, interpolateNode, multiply } from 'react-native-reanimated';
import { useScrollHandler, useValue } from 'react-native-redash/src/v1/Hooks';

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot"
import { Routes, StackNavigationProps } from '../../components/Navigation';
import { makeStyles, Theme, useTheme } from '../../components/Theme';


const { width, height } = Dimensions.get("window");



const useStyles = makeStyles((theme: Theme) => ({
    container:
    {
        flex: 1,
        backgroundColor: "white",
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "stretch",
        justifyContent: "flex-end",
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: "hidden",
    },
    slider:
    {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: theme.borderRadii.xl,

    },
    footer:
    {
        flex: 1,
    },
    footerContent:
    {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: theme.borderRadii.xl,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const slides =
    [
        {
            title: "Nail It",
            subtitle: "Encuentra Tu Salón Favorito",
            description: "Lalalalalalalalalalalala",
            color: "#BFEAF5",
            picture: {
                src: require("../assets/1.png"),
                width: 1900,
                height: 3200,
            },
        },
        {
            title: "Diferente",
            subtitle: "Agenda Tu Mejor Versión",
            description: "Lalallalalalalalalalalalalala",
            color: "#BEECC4",
            picture: {
                src: require("../assets/2.png"),
                width: 2200,
                height: 3586,
            },
        },
        {
            title: "Divertida",
            subtitle: "Tu Estilo a Tu Manera",
            description: "Lalalalalallalalalalala",
            color: "#FFE4D9",
            picture: {
                src: require("../assets/3.png"),
                width: 2513,
                height: 3586,
            },
        },
        {
            title: "Poderosa",
            subtitle: "Ahora Nadie Te Detiene ",
            description: "Lalalalalalalalal",
            color: "#FFDDDD",
            picture: {
                src: require("../assets/4.png"),
                width: 2513,
                height: 3586,
            },
        },
    ]
export const assets = slides.map(slide => slide.picture.src)
const Onboarding =
    ({ navigation }: StackNavigationProps<Routes, "Onboarding">) => {
        const styles = useStyles();
        const theme = useTheme();
        const scroll = useRef<Animated.ScrollView>(null);
        const { scrollHandler, x } = useScrollHandler();
        const backgroundColor = interpolateColors(x, {
            inputRange: [0, width, width * 2, width * 3],
            outputColorRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
        })

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.slider, { backgroundColor }]}>
                    {slides.map(({ picture }, index) => {
                        const opacity = interpolateNode(x, {
                            inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
                            outputRange: [0, 1, 0],
                            extrapolate: Extrapolate.CLAMP,
                        })
                        return (
                            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
                                <Image
                                    source={picture.src}
                                    style={{
                                        width: width - theme.borderRadii.xl,
                                        height: (width - theme.borderRadii.xl) * picture.height / picture.width,
                                    }} />
                            </Animated.View>
                        );
                    })}

                    <Animated.ScrollView
                        ref={scroll}
                        horizontal
                        snapToInterval={width}
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        {...scrollHandler}
                    >
                        {slides.map(({ title, picture }, index) => (
                            <Slide key={index} right={!!(index % 2)} {...{ title, picture }}
                            />
                        ))}

                    </Animated.ScrollView>
                </Animated.View>

                <View style={styles.footer} >
                    <Animated.View
                        style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
                    />
                    <View style={styles.footerContent}>
                        <View style={styles.pagination}>

                            {slides.map((_, index) => (
                                <Dot
                                    key={index}
                                    currentIndex={divide(x, width)}
                                    {...{ index }}
                                />
                            ))}
                        </View>
                        <Animated.View style={{
                            flex: 1,
                            flexDirection: "row",
                            width: width * slides.length,
                            transform: [{ translateX: multiply(x, -1) }]
                        }} >
                            {slides.map(({ subtitle, description }, index) => {
                                const last = index === slides.length - 1;
                                return (
                                    <Subslide
                                        key={index}
                                        onPress={() => {
                                            if (last) {
                                                navigation.navigate("Welcome");
                                            }
                                            else {
                                                scroll.current
                                                    ?.getNode()
                                                    .scrollTo({ x: width * (index + 1), animated: true });
                                            }
                                        }}
                                        {...{ subtitle, description, last }}
                                    />
                                );
                            })}

                        </Animated.View>
                    </View>
                </View >
            </View >

        );
    };

export default Onboarding;