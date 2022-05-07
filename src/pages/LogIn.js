import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MdContentCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { PageTitle } from "../components/SharedComponents";
import { user } from "../data/userInfo";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [value, setValue] = useState("");

  const handleCopy = () => {
    toast.info("Login Data Copied");
    setUsername(user.userId);
    setPassword(user.pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    value.length > 0
      ? username === user.userId && password === user.pass
        ? toast.success("Login Successful") && navigate("/dashboard")
        : toast.error("Wrong Username or Password")
      : toast.info("Please Check the reCAPTCHA");
  };

  return (
    <Box className="log-in-bg">
      <PageTitle title="Login" />
      <ToastContainer theme="colored" />
      <Box sx={{ pt: 10 }} className="loginBox">
        <Grid
          container
          sx={{ boxShadow: "1px 1px 5px #ccc" }}
          className="loginHeight"
        >
          <Grid
            item
            sm={2}
            md={3}
            lg={5}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img
              src="https://i.ibb.co/XCvf2tJ/Surface.png"
              className="loginHeight"
            />
          </Grid>
          <Grid item xs={12} md={9} lg={7} className="loginHeight">
            <Box
              style={{
                padding: "50px",
                backgroundColor: "#fff",
                height: "88%",
              }}
            >
              <img
                src="https://i.ibb.co/R3Jg1qc/login.png"
                alt=""
                className="login-logo"
              />
              <Typography color="primary" variant="h5">
                Sign In
              </Typography>
              <Typography variant="body2" style={{ color: "#758590" }}>
                Sign in to stay connected.
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  size="small"
                  label="Email"
                  variant="outlined"
                  sx={{ my: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="small"
                  label="Password"
                  variant="outlined"
                  type="password"
                  sx={{ my: 1 }}
                />
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      size="small"
                      color="primary"
                      sx={{ p: 0, color: "#EF7822" }}
                    />
                    <Typography variant="body2" style={{ color: "#758590" }}>
                      Remember Me ?
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    className="cursor"
                    style={{ color: "#2E86ED" }}
                  >
                    Forgot Password
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(value) => setValue(value)}
                  />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="primary"
                  sx={{ mt: 2, mb: 1 }}
                >
                  LOGIN
                </Button>
              </form>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" sx={{ color: "#758590" }}>
                  Want to login to your services ?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ borderBottom: "1px solid #EF7822", ml: 1 }}
                  color="primary"
                  className="cursor"
                >
                  Login Here
                </Typography>
              </Box>
            </Box>
            <Box className="loginCopyInfo">
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="body2">username: {user.userId}</Typography>
                <Typography variant="body2">password: {user.pass}</Typography>
              </Box>
              <IconButton className="copyBtn" onClick={handleCopy}>
                <MdContentCopy style={{ color: "#444" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LogIn;
