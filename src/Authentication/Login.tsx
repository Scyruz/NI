import React, { useRef } from "react";
import { Button, Container, Text } from "../components";
import TextInput from "../components/Forms/TextInput";
import { Box } from "../components/Theme";
import Checkbox from "../components/Forms/Checkbox"
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";


const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .required('Campo requerido'),
    email: Yup.string()
        .email('Correo inválido')
        .required('Campo requerido'),
});


const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {

    const { handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched } =
        useFormik({
            validationSchema: LoginSchema,
            initialValues: {
                email: "",
                password: "",
                remember: false
            },
            onSubmit: //Back
                (values) => console.log(values),
        });
    const footer = (
        <Footer
            title="¿No tienes una cuenta?"
            action="Regístrate aquí"
            onPress={() => navigation.navigate("SignUp")}
        />
    );
    const password = useRef<typeof TextInput>(null);

    return (
        <Container pattern={2} {...{ footer }}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">
                    Bienvenido de nuevo
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Accede a tu cuenta
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
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Text variant="body" color="coral">
                        {errors.password}
                    </Text>
                    <Box flexDirection="row" justifyContent="space-between">
                        <Checkbox
                            label="Recuérdame   "
                            checked={values.remember}
                            onChange={() => setFieldValue("remember", !values.remember)} />
                        < Button variant="transparent" onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text color="primary">
                                Olvidé mi contraseña
                        </Text>
                        </Button>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button
                            variant="primary"
                            label="Iniciar Sesión"
                            onPress={handleSubmit}>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container >

    );
};

export default Login;