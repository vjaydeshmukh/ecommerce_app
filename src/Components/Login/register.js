import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import logo from "../media/dchannel.jpg";
export default class Register extends Component {
  register = () => {
    this.props.history.replace("/login");
  };
  render() {
    return (
      <Container maxWidth="xs">
        <Box
          bgcolor="white"
          boxShadow="3"
          borderRadius="10px"
          textAlign="center"
          p="24px"
          mt="50px"
        >
          <img src={logo} />
          <TextField
            label="Username"
            id="outlined-size-small"
            type="text"
            name="name"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <TextField
            label="Email"
            id="outlined-size-small"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <TextField
            label="PhoneNo"
            id="outlined-size-small"
            type="phone"
            name="phone"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <TextField
            label="Password"
            id="outlined-size-small"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <TextField
            label="Confirm Password"
            id="outlined-size-small"
            type="password"
            name="confirm-password"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <br />
          <br />

          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.register}
          >
            Register
          </Button>
        </Box>
      </Container>
    );
  }
}
