import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import {
  Grid,
  TextField,
  Box,
  Button,
  Typography,
  MenuItem,
} from "@material-ui/core";

const yellowtheme = createTheme({ palette: { primary: yellow } });

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
      // padding : theme.spacing(0)
    },
  },
}));

const countries = [
  {
    label: "India",
    value: "India",
  },
  {
    label: "USA",
    value: "USA",
  },
  {
    label: "UAE",
    value: "UAE",
  },
  {
    label: "China",
    value: "China",
  },
  {
    label: "Japan",
    value: "Japan",
  },
];

const states = [
  {
    label: "Maharashtra",
    value: "Maharashtra",
  },
  {
    label: "Telangana",
    value: "Telangana",
  },
  {
    label: "Karnatka",
    value: "Karnatka",
  },
  {
    label: "Delhi",
    value: "Delhi",
  },
];

export default function Checkout() {
  const classes = useStyle();
  const [countrys, setCountries] = useState("India");
  const [riyasat, setRiyasat] = useState("");

  const handelEvent = (event) => {
    setCountries(event.target.value);
  };

  const handelState = (event) => {
    setRiyasat(event.target.value);
  };

  return (
    <>
      <Box sx={{ mx: "100" }}>
        <form className={classes.root}>
          <Grid container spacing={1}>
            <Grid item md={2} lg={2}></Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                component="h1"
                variant="h4"
                style={{ textAlign: "center", margin: "10px" }}
              >
                Add a new adress:
              </Typography>
              <Typography
                component="h1"
                variant="body1"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                On the move? Pick up your order from our pickup store.
              </Typography>
              <Typography
                component="h1"
                variant="body1"
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  fontWeight: "300",
                }}
              >
                Secure package delivery and pickup at self-service lockers or
                staffed locations Find a pickup location near you
              </Typography>
              <hr />
              <TextField
                label="Select country"
                variant="outlined"
                fullWidth
                helperText="please select your country"
                value={countrys}
                select
                onChange={handelEvent}
                defaultValue="India"
              >
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.value}
                  </MenuItem>
                ))}
              </TextField>
              <Typography style={{ marginLeft: "10px" }} variant="body1">
                First Name:
              </Typography>
              <TextField
                label="First Name"
                placeholder="Enter your first name"
                variant="outlined"
                fullWidth
              />

              <Typography style={{ marginLeft: "10px" }} variant="body1">
                Last Name:
              </Typography>

              <TextField
                label="Last name"
                placeholder="Enter your last name"
                variant="outlined"
                fullWidth
              />

              <Typography style={{ marginLeft: "10px" }} variant="body1">
                Email:
              </Typography>

              <TextField
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                fullWidth
                type="email"
              />

              <Typography style={{ marginLeft: "10px" }} variant="body1">
                Number:
              </Typography>

              <TextField
                label="Number"
                placeholder="Enter your number"
                variant="outlined"
                fullWidth
              />

              <Typography style={{ marginLeft: "10px" }} variant="body1">
                Address:
              </Typography>

              <TextField
                label="Address"
                placeholder="Enter your address"
                multiline
                fullWidth
                variant="outlined"
                maxRows={4}
              />
              <Grid container spacing={1}>
                <Grid item xs={12} md={3} lg={3}>
                  <Typography style={{ marginLeft: "10px" }} variant="body1">
                    City:
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="City"
                    placeholder="City"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Typography style={{ marginLeft: "10px" }} variant="body1">
                    State:
                  </Typography>
                  <TextField
                    variant="outlined"
                    value={riyasat}
                    select
                    label="Select state"
                    helperText="Selec your state"
                    fullWidth
                    onChange={handelState}
                  >
                    {states.map((state) => (
                      <MenuItem key={state.label} value={state.value}>
                        {state.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Typography style={{ marginLeft: "10px" }} variant="body1">
                    Pin Code:
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="Pin code"
                    placeholder="Pin Code"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <MuiThemeProvider theme={yellowtheme}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.root}
                    size="large"
                    type="submit"
                  >
                    Add address
                  </Button>
                </MuiThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
