import * as React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const names = ["Advocate", "Notary", "Document Writer"];

export default function Details_2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Designation
      </Typography>
      <FormControl sx={{ m: 0, width: 500 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={names}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Designation" />
          )}
        />
      </FormControl>
    </React.Fragment>
  );
}
