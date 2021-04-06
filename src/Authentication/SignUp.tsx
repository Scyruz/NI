import React, { useRef } from "react";
import { Button, Container, Text } from "../components";
import TextInput from "../components/Forms/TextInput";
import { Box } from "../components/Theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref("password")], "Las contraseñas no coinciden"),
    email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
    const { handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            validationSchema: SignUpSchema,
            initialValues: {
                email: "",
                password: "",
                passwordConfirmation: "",
            },
            onSubmit: //Back
                (values) => console.log(values),
        });
    const password = useRef<typeof TextInput>(null);
    const passwordConfirmation = useRef<typeof TextInput>(null);
    const footer = (
        <Footer
            title="¿Ya tienes una cuenta?"
            action="Inicia sesión aquí"
            onPress={() => navigation.navigate("Onboarding")}
        />
    );


    return (
        <Container pattern={1} {...{ footer }} >
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Crea tu cuenta
            </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Este es el comienzo de una nueva experiencia
                </Text>
                <Box>
                    <Box marginBottom="m">
                        <TextInput
                            icon="mail"
                            placeholder="Correo electrónico"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={errors.email}
                            touched={touched.email}
                            autoCompleteType="email"
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom="m">
                        <TextInput
                            ref={password}
                            icon="lock"
                            placeholder="Contraseña"
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            error={errors.password}
                            touched={touched.password}
                            autoCompleteType="password"
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() => passwordConfirmation.current?.focus()}
                            secureTextEntry
                        />
                    </Box>
                    <TextInput
                        ref={passwordConfirmation}
                        icon="lock"
                        placeholder="Confirma tu contraseña"
                        onChangeText={handleChange("passwordConfirmation")}
                        onBlur={handleBlur("passwordConfirmation")}
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box alignItems="center" marginTop="m">
                        <Button
                            variant="primary"
                            label="Crear cuenta"
                            onPress={handleSubmit}>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container >

    );
};

export default SignUp;