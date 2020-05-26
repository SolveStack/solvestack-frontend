// React
import React, { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

// Material-UI Styles
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Material UI Components
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// Material UI Icons
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

interface FormValues {
    yourName: string;
    email: string;
    message: string;
}

const InitialValues: FormValues = { yourName: '', email: '', message: '' };

const ContactUs: FunctionComponent = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: InitialValues,

        validationSchema: Yup.object({
            yourName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().min(60, 'Must be at least 60 characters').required('Required'),
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            // TODO: send values to mailing API
            setSubmitting(false);
            resetForm({});
        },
    });

    const ComingSoonMessage: FunctionComponent = () => {
        return (
            <Paper>
                <Typography component="h2">Contact us emails are coming soon!</Typography>
                <Typography>For now, reach us at ana.tomboulian@gmail.com or bluefire2121@gmail.com</Typography>
            </Paper>
        );
    };

    return (
        <Box>
            <Card>
                <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                    <CardContent>
                        <Typography variant="h5" component="h1">
                            Contact Us
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="yourName"
                                    name="yourName"
                                    type="text"
                                    label="Your Name"
                                    variant="outlined"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.yourName}
                                    error={formik.touched.email && formik.errors.yourName ? true : false}
                                    helperText={
                                        formik.touched.email && formik.errors.yourName ? formik.errors.yourName : null
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error={formik.touched.email && formik.errors.email ? true : false}
                                    helperText={
                                        formik.touched.email && formik.errors.email ? formik.errors.email : null
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="message"
                                    name="message"
                                    type="text"
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    required
                                    multiline
                                    rowsMax={4}
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    error={formik.touched.message && formik.errors.message ? true : false}
                                    helperText={
                                        formik.touched.message && formik.errors.message ? formik.errors.message : null
                                    }
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon />}
                            type="submit"
                            disabled={formik.isSubmitting}
                        >
                            SEND
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </Box>
    );
};

export default ContactUs;
