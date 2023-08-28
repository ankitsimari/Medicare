import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useReducer } from "react";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const defaultTheme = createTheme();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  booking: false,
  member: false
};

export default function SignUp() {



  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "RESET":
        return initialState; 
      default:
        throw new Error(`Invalid action type`);
    }
  };
  

  // async function postUser(){
  //   try{
  //     let res = await fetch(`https://doctors-api-bc6x.onrender.com/user`,{
  //       method:"POST",
  //       body: JSON.stringify(state),
  //       headers:{
  //         "Content-type":"application/json"
  //       }
  //     })
  //     let resp = await res.json();
  //     dispatch({
  //       type:'RESET'
  //     })
  //   }
  //   catch(err){
  //     console.log("error", err);
  //   }
  // }

  async function postUser() {
    try {
      let res = await fetch(`https://doctors-api-bc6x.onrender.com/user`, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-type": "application/json",
        },
      });
      let resp = await res.json();
      dispatch({
        type: 'RESET' 
      });
    } catch (err) {
      console.log("error", err);
    }
  }
  

  const [state, dispatch] = useReducer(reducer, initialState);

  const { firstName, lastName, email, password } = state;
console.log(state)
  const handleSubmit = (event) => {
    event.preventDefault();
    postUser()
    console.log("Form submitted:", state);
    
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch({
      type: "CHANGE",
      payload: { name, value },
    });
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" data-aos="fade-up">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              className="btn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link className="themeColor" href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
