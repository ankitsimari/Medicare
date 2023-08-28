import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import BookingLoading from '../Booking/BookingLoading';
import Swal from 'sweetalert2'
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FormContainer = styled(Container)({
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FormControlWrapper = styled(FormControl)({
  width: '100%',
  marginTop: '2rem',
});

const SubmitButton = styled(Button)({
  marginTop: '3rem',
});



const AddDoctorForm = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    experience: '',
    specialty: '',
    achievements: '',
    image:''
    // Add more fields as needed
  });
  const [loading,setLoading] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    axios.post(`https://doctors-api-bc6x.onrender.com/doctors`,doctorInfo).then((res)=>{
        console.log("done",res);
        setLoading(false);
        Swal.fire({
          title: 'New Doctor Added',
          text: 'Doctor added Successfully!',
          icon: 'success', // Set the icon to 'success'
          confirmButtonColor: '#3167D9'
        });
    })

    console.log(doctorInfo);

  
    setDoctorInfo({
      name: '',
      experience: '',
      specialty: '',
      achievements: '',
      image:''
    });
  };

  if(loading){
    return  <BookingLoading/>
    }
//   console.log(doctorInfo);


  return (
    <FormContainer maxWidth="md" className='m-3' data-aos="fade-up">
      <Typography variant="h4" gutterBottom>
        Add Doctor
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={doctorInfo.name}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Experience (in years)"
              name="experience"
              value={doctorInfo.experience}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Specialty"
              name="specialty"
              value={doctorInfo.specialty}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Achievements"
              name="achievements"
              value={doctorInfo.achievements}
              onChange={handleInputChange}
              multiline
             
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              name="image"
              value={doctorInfo.image}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <SubmitButton className='btn d-block m-auto mt-4' type="submit" variant="contained" color="primary">
          Add Doctor
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AddDoctorForm;
