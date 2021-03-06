import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, Text } from '../../components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
    },
    subtitle: {
        marginBottom: 12,
        color: "#0C0D34",
    },
    description: {
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40,
    },
});

interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <Button
                label={last ? "Empieza Ahora" : "Next"}
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    );
};

export default Subslide;
