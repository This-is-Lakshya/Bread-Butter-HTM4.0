import React, {useState} from 'react';
import {Grid, Paper, Avatar, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, Checkbox, FormControl} from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../styles/requestForm.css';

// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyBIL08YXBsalBbQQwLMAcxcWTJF3Hi0bk8",
    authDomain: "bread-and-butter-6383f.firebaseapp.com",
    databaseURL: "https://bread-and-butter-6383f-default-rtdb.firebaseio.com",
    projectId: "bread-and-butter-6383f",
    storageBucket: "bread-and-butter-6383f.appspot.com",
    messagingSenderId: "46107145176",
    appId: "1:46107145176:web:f0c654b61525fc767bb8ad",
    measurementId: "G-55T342GB1T"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  const MySwal = withReactContent(Swal);

const RequestForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [foodType, setFoodType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [qty, setQty] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleQtyChange = (event) => {
    const value = event.target.value;

    // Use a regular expression to validate decimal numbers
    if (/^\d*\.?\d*$/.test(value)) {
      setQty(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !foodType || !phoneNumber || !address || !qty || !acceptedTerms) {
      MySwal.fire("Failed", "Please fill out all the required fields.", "error");
      return;
    }

    const requestData = {
      name,
      email,
      foodType,
      phoneNumber,
      address,
      qty,
    };

    const requestsRef = ref(database, 'requests');
    push(requestsRef, requestData);

    setName('');
    setEmail('');
    setFoodType('');
    setPhoneNumber('');
    setAddress('');
    setQty('');
    setAcceptedTerms(false);

    MySwal.fire("Success", "Request has been generated successfully.", "success");
  };

  return (
    <div className='outermost_box'>
    <div className='requestForm'>
        <Grid>
        <Paper className='paper_form' >
        <Grid align='center'>
          <h2 style={headerStyle}>Generate a Request</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create a request!</Typography>
        </Grid>
        <form className='main_form' onSubmit={handleSubmit}>
          <TextField fullWidth label='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          <TextField fullWidth label='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <FormControl component="fieldset" style={marginTop}>
            <Typography variant="subtitle1">Food Type</Typography>
            <RadioGroup aria-label="Food Type" name="foodType" value={foodType} onChange={handleFoodTypeChange} row>
              <FormControlLabel value="Fast Food" control={<Radio />} label="Fast Food" />
              <FormControlLabel value="Regular Food" control={<Radio />} label="Regular Food" />
              <FormControlLabel value="Raw Material" control={<Radio />} label="Raw Material" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label='Phone Number' name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" />
          <TextField fullWidth label='Address' name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your Address" />
          <TextField fullWidth label='Qty' name="qty" value={qty} onChange={handleQtyChange} placeholder="Enter quantity" />
          <FormControlLabel
            control={<Checkbox name="acceptedTerms" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />}
            label="I accept the terms and conditions."
          />
          <br />
          <Button type='submit' variant='contained' color='primary'>Generate the Request</Button>
        </form>
      </Paper>
    </Grid>
    </div>
    </div>
  )
}

export default RequestForm;