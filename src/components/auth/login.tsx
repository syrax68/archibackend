import React from "react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import wait from '../../helpers/wait';
import {
    CardContent,
    Grid,
    Button
} from '@material-ui/core';
import {
    Link
} from "react-router-dom";

import {
    CustomTextField,
    CustomWrapper,
    LoginBody,
    LoginBox
} from './login.style';
import Header from '../header/header';


const Login = () => {

    return (
        <>
            <Header />
            <Formik
                enableReinitialize
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Merci de corriger votre Email').required('Merci de renseigner votre Email'),
                    password: Yup.string().min(5, 'Your password must contain between 4 and 60 characters.').max(60, 'Your password must contain between 4 and 60 characters.').required('Merci de renseigner votre mot de passe'),
                })}
                onSubmit={async (values, {
                    resetForm,
                    setErrors,
                    setStatus,
                    setSubmitting
                }) => {
                    try {
                        // NOTE: Make API request
                        await wait(200);
                        resetForm();
                        setStatus({ success: true });
                        setSubmitting(false);
                        console.log(values)
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        //setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values
                }) => (
                    <form onSubmit={handleSubmit}>
                        <CustomWrapper>
                            <LoginBody>
                                <LoginBox>
                                    <h2>Connexion</h2>
                                    <CardContent
                                        className="content"
                                    >
                                        <Grid
                                            container
                                            spacing={2}
                                            className="container"
                                        >
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <CustomTextField
                                                    error={Boolean(touched.email && errors.email)}
                                                    helperText={touched.email && errors.email}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    fullWidth
                                                    label="Email"
                                                    name="email"
                                                    required
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <CustomTextField
                                                    error={Boolean(touched.password && errors.password)}
                                                    helperText={touched.password && errors.password}
                                                    type="password"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    fullWidth
                                                    label="Password"
                                                    name="password"
                                                    required
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    color="secondary"
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                >
                                                    Se connecter
                                            </Button>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            spacing={1}
                                            className="container"
                                        >
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                            >
                                                <div className="sign_up">
                                                    <p style={{ color: "#fff" }}>Nouveau compte? <Link to="/signup">S'inscrire maintenant.</Link></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </LoginBox>
                            </LoginBody>
                        </CustomWrapper>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Login
