import { useFormik } from "formik";
import React, { useRef } from "react";
import { Linking } from "react-native";
import { Box, Button, Container, Text } from "../components";
import * as Yup from "yup";
import Footer from "../components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";
import TextInput from "../components/Forms/TextInput";


const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, "ForgotPassword">) => {
    const ForgotPasswordSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, 'Muy corta!')
            .max(50, 'Muy larga!')
            .required('Campo requerido'),
        passwordConfirmation: Yup.string()
            .equals([Yup.ref("password")], "Las contraseñas no coinciden"),
        email: Yup.string()
            .email('Correo inválido')
            .required('Campo requerido'),
    });

    const { handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched } =
        useFormik({
            validationSchema: ForgotPasswordSchema,
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
            title="¿Sigues sin poder acceder a tu cuenta?"
            action="Escríbenos"
            onPress={() => true}
        />
    );
    return (
        <Container pattern={0} {...{ footer }} >
            <Box padding="xl">
                <Text variant="body" textAlign="center" marginBottom="l">
                    Introduce el correo electrónico asociado a tu cuenta
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
                        <Text variant="body" color="coral">
                            {errors.email}
                        </Text>
                    </Box>
                    <Box marginBottom="m">
                        <TextInput
                            ref={password}
                            icon="lock"
                            placeholder="Nueva contraseña"
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
                        <Text variant="body" color="coral">
                            {errors.password}
                        </Text>
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
                    <Text variant="body" color="coral">
                        {errors.passwordConfirmation}
                    </Text>
                    <Box alignItems="center" marginTop="m">
                        <Button
                            variant="primary"
                            label="Reestablecer"
                            onPress={() => navigation.navigate("PasswordChanged")}>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;