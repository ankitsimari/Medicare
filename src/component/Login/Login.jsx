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
import { useState , useContext} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const defaultTheme = createTheme();

const initialData = {
  email: "",
  password: "",
};

export default function LogIn() {

  const Navigate = useNavigate()

  const { setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);





  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  console.log(email,password)
  console.log(data)

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get(
        `https://doctors-api-bc6x.onrender.com/user?email_like=${email}`
      );
  
      const responseData = response.data;
  
      if (responseData.length > 0 && responseData[0].email === email) {
        setIsAuth(true);

        Swal.fire({
          title: 'Login Successful',
          text: 'You are Logged in Successfully!',
          icon: 'success', // Set the icon to 'success'
          confirmButtonColor: '#3167D9'
        });
        localStorage.setItem("user", JSON.stringify(responseData[0]));
  
        setEmail("");
        setPassword("");
        if(email=="admin@gmail.com"){
          Navigate("/dashboard");
        }else{

          Navigate("/");
        }
      } else {
        Swal.fire({
          title: 'Wrong Credential',
          text: 'Enter Correct Credential',
          icon: 'error',
          confirmButtonColor: '#3167D9'
        })
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: "An error occurred while logging in",
        icon: 'error',
        confirmButtonColor: '#3167D9'
      })
    }
  };


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" data-aos="fade-up">
          <CssBaseline />
          <Box
            sx={{
              // marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // boxShadow:'0px 3px 6px rgba(0, 0, 0, 0.16)',
              // padding: defaultTheme.spacing(3),
              // borderRadius: defaultTheme.shape.borderRadius,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={handleChange}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                className="btn"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
