import React, { useState } from "react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import wait from '../../helpers/wait';
import {
    CardContent,
    Grid,
    Button
} from '@material-ui/core';
import{
    CustomTextField,
    CustomWrapper,
    LoginBody,
    LoginBox,
}from './login.style';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '@material-ui/core/Modal';
import {abonne} from './abonner';


const Signup = () => {
    const [checked, setChecked] = useState(false);
    const [checkedAbonne, setCheckedAbonne] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{marginTop: "120px"}}
        >
            {abonne}
        </Modal>
        <Formik
                enableReinitialize
                initialValues={{
                    firstname:'',
                    lastname:'',
                    email: '',
                    password:'',
                    reMakepassword:''
                }}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string().required('Merci de renseigner votre Nom'),
                    lastname: Yup.string().required('Merci de renseigner votre Prénom'),
                    email: Yup.string().email('Merci de corriger votre Email').required('Merci de renseigner votre Email'),
                    password: Yup.string().min(5 , 'Your password must contain between 4 and 60 characters.').max(60,'Your password must contain between 4 and 60 characters.').required('Merci de renseigner votre mot de passe'),
                    reMakepassword: Yup.string().min(5 , 'Your password must contain between 4 and 60 characters.').max(60,'Your password must contain between 4 and 60 characters.').required('Merci de renseigner votre mot de passe'),
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
                        if(checkedAbonne){
                            handleOpen();
                        }
                        console.log(open)
                        resetForm();
                        setStatus({ success: true });
                        setSubmitting(false);
                        
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
                                <h2>Creation Compte</h2>
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
                                                error={Boolean(touched.firstname && errors.firstname)}
                                                helperText={touched.firstname && errors.firstname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.firstname}
                                                fullWidth
                                                label="Nom"
                                                name="firstname"
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
                                                error={Boolean(touched.lastname && errors.lastname)}
                                                helperText={touched.lastname && errors.lastname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.lastname}
                                                fullWidth
                                                label="Prénom"
                                                name="lastname"
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
                                                label="Enter votre mot de passe"
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
                                            <CustomTextField
                                                error={Boolean(touched.reMakepassword && errors.reMakepassword)}
                                                helperText={touched.reMakepassword && errors.reMakepassword}
                                                type="password"
                                                value={values.reMakepassword}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                fullWidth
                                                label="Confirmation mot de passe"
                                                name="reMakepassword"
                                                required
                                                variant="outlined"
                                            />
                                        
                                        </Grid>
                                        <Grid container>
                                            <Checkbox
                                                checked={checkedAbonne}
                                                onChange={e=>setCheckedAbonne(!checkedAbonne)}
                                                color="primary"
                                                name="s'abonner"
                                            />
                                            <p>S'abonner pour avoir des réductions?</p>
                                        </Grid>
                                        <Grid container>
                                            <Checkbox
                                                checked={checked}
                                                onChange={e=>setChecked(!checked)}
                                                color="primary"
                                                name="s'abonner"
                                            />
                                            <p>j'accepte les termes et conditions</p>
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
                                                type="submit"
                                            >
                                                {checkedAbonne?"Choisir un Abonnement":"S'inscrire"}
                                            </Button>   
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={1}
                                        className="container"
                                    >    
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
export default Signup