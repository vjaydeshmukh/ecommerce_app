import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import logo from "../media/dchannel.jpg";
export default class Login extends Component {
  check = () => {
    this.props.history.replace("/");
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
          <br />
          <Typography variant="h5" color="textSecondary">
            Checkout
          </Typography>
          <TextField
            label="Name."
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
            label="Phone"
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
            label="Address"
            id="outlined-size-small"
            type="text"
            name="address"
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
            onClick={this.check}
          >
            Checkout
          </Button>
        </Box>
      </Container>
    );
  }
}
