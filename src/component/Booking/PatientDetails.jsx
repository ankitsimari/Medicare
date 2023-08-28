import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {

const [name,setName] = React.useState("");
const [city, setCity] = React.useState("");
const [state,setState] = React.useState("");
const [issue,setIssue] = React.useState("");

const obj = {
  "name": name,
  "city":city,
  "state":state,
  "issue":issue,
  "date" :new Date()
}

localStorage.setItem("Patient", JSON.stringify(obj))


  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Patient Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Patient Full name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid> */}

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            value={state}
            onChange={(e)=>setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} >
          <TextField
          multiline
          rows={2} 
            required
            id="issue"
            name="issue"
            label="Issue"
            fullWidth
            autoComplete="issue"
            variant="outlined"
            value={issue}
            onChange={(e)=>setIssue(e.target.value)}
          />
        </Grid>
{/*     
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}