import React from 'react'
import './filters.css'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    color: 'white', // Change the text color to white
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Change the border color to white
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Change the hover border color to white
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Change the focused border color to white
    },
  },
}));

const names = ["Advocate", "Notary", "Document Writer"];
const city = ["Kolkata", "Pune", "Delhi", "Ahmedabad", "Bangalore", "Hyderabad", "Vizag"];
const rating=["Above 4", "Above 3", "Above 2", "Above 1", "No ratings"];
const exp = ["No experience", "2 Years", "5 years", "10 years", "15 years and above"];

const Filters = () => {
    const classes = useStyles();
  return (
    <div>
        <form action="" className='filters'>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ width: 300}}
            renderInput={(params) => (
                <TextField {...params} label={<span style={{ color: 'white' }}>Designation</span>}
                InputProps={{
                    ...params.InputProps,
                    className: classes.input,
                  }}/>
            )}
            />
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label={<span style={{ color: 'white' }}>City</span>} InputProps={{
                    ...params.InputProps,
                    className: classes.input,
                  }}/>
            )}
            />
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rating}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label={<span style={{ color: 'white' }}>Ratings</span>} InputProps={{
                    ...params.InputProps,
                    className: classes.input,
                  }}/>
            )}
            />
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={exp}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label={<span style={{ color: 'white' }}>Experience</span>} InputProps={{
                    ...params.InputProps,
                    className: classes.input,
                  }}/>
            )}
            />
            <button className='btn'>Apply filters</button>
        </form>
    </div>
  )
}

export default Filters