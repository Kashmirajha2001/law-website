import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Autocomplete from "@mui/material/Autocomplete";

const names = [
  'Aadhar Card',
  'Voter Card',
  'License',
  'Passport',
  'Pan Card',
];

export default function Details_2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Verification
      </Typography>
      <FormControl sx={{ m: 0, width: 500 }}>
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={names}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Verification Document" />
          )}
        />
      </FormControl>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Verification ID Number"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Expiry date of ID(if any)"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}