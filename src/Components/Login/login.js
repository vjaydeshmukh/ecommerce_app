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
export default class Login extends Component {
  login = () => {
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
          <br />
          <br />
          <Typography color="textSecondary">Forgot password?...</Typography>
          <br />

          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.login}
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }
}
