import {useFormik} from 'formik';
import React from 'react';
import { Route } from 'react-router';


const {
	AppBar,
	colors,
	Avatar,
	CssBaseline,
	ThemeProvider,
	Typography,
	Container,
	createMuiTheme,
	Box,
	Grid,
	makeStyles,
	Button,
	SvgIcon,
	FormControlLabel,
	Checkbox,
	TextField,
	Link
} = MaterialUI;

// Create a theme instance.

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6'
		},
		secondary: {
			main: '#19857b'
		},
		error: {
			main: colors.red.A400
		},
		background: {
			default: '#fff'
		}
	}
});

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

function ProTip() {
	const classes = useStyles();
	return (
		<Typography className={classes.root} color="textSecondary">
			<LightBulbIcon className={classes.lightBulb} />
			Pro tip: See more <Link href="https://material-ui.com/getting-started/templates/">templates</Link> on the
			Material-UI documentation.
		</Typography>
	);
}

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function UserTemplate(props) {
	const formik = useFormik({
		initialValues:{
			account: '',
			pass: '',
		},
		onsubmit: values =>{

		},
	});
	
	const { Component, ...restProps } = props;
    const classes = useStyles();
	return (
		<Route
			{...restProps}
			render={(propsRoute) => {
				return (
					<form onsubmit={(e)=>{
						e.preventDefault();
						formik.handleSubmit(e);
						}}>
						<Container component="main" maxWidth="xs">
							<CssBaseline />
							<div className={classes.paper}>
								<Avatar className={classes.avatar} />
								<Typography component="h1" variant="h5">
									Sign up
								</Typography>
								<div className={classes.form} noValidate>
									<Grid container spacing={2}>

										<Grid item xs={12}>
											<input
												variant="outlined"
												required
												fullWidth
												id="account"
												label="Account name"
												name="account"
												autoComplete="Account"

												onChange={formik.handleChange}
											/>
										</Grid>
										<Grid item xs={12}>
											<input
												variant="outlined"
												required
												fullWidth
												name="password"
												label="Password"
												type="password"
												id="password"
												autoComplete="current-password"
												onChange={formik.handleChange}
											/>
										</Grid>
									</Grid>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
									>
										Sign Up
									</Button>
									<Grid container justify="flex-end">
										<Grid item>
											<Link href="#" variant="body2">
												Already have an account? Sign in
											</Link>
										</Grid>
									</Grid>
								</div>
							</div>
							<Box mt={5}>
								<Copyright />
							</Box>
						</Container>
					</form>
				);
			}}
		/>
	);
}
