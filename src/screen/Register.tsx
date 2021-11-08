import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";
import Text from "../components/Text";
import ScreenContainer from "../components/ScreenContainer";
import { Box, Button, Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Push from "../components/Button";
import { Link, Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { Message } from "../components/Alert";
import { UserLoginResponse } from "../state/payload-types/user";
import { History } from "history";
import { auth } from "../authencation";
import { useEffect } from "react";

interface UserAttrs {
  loading: boolean;
  userDetails: UserLoginResponse["data"];
  error: any;
}

const MessageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  position: "relative",
}));

const Cancel = styled("p")(({ theme }) => ({
  position: "absolute",
  top: "2%",
  right: "1%",
  cursor: "pointer",
}));

const CurrentContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "80%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "65%",
  },
  [theme.breakpoints.up("md")]: {
    width: "35%",
  },

  height: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "grey",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(5),
}));

const Register: React.FC = (props, { history }): JSX.Element => {
  // window.history.replaceState(null, "datas", "/register");

  // const classes = useStyles();

  const [name, setname] = React.useState<string>("");
  const [email, setemail] = React.useState<string>("");
  const [password, setpassword] = React.useState<string>("");
  const [cpassword, setcpassword] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(true);

  const dispatch = useDispatch();

  const { userRegister } = bindActionCreators(actionCreators, dispatch);

  const user: any = useSelector((state: State) => state.userRegister);

  const { loading, userDetails, error } = user;

  // if (userDetails) {
  //   <Navigate to="/" />;
  // }

  const registerUserHandler = (): void => {
    // (history as unknown as History).push("/")
    userRegister({ name, email, password });
  };

  return (
    <ScreenContainer>
      <CurrentContainer>
        {error ? (
          <MessageBox>
            <Message
              message={error}
              variant="danger"
              // onClose={() => setShow(!show)}
              // onClick={() => setShow(!show)}
              // show={show}
            />
            {/* <Cancel >X</Cancel> */}
          </MessageBox>
        ) : (
          ""
        )}
        {userDetails ? (
          <MessageBox>
            <Message
              message="Registration Successfull"
              variant="success"
              // onClose={() => setShow(!show)}
              // onClick={() => setShow(!show)}
              // show={show}
            />
            {/* <Cancel >X</Cancel> */}
          </MessageBox>
        ) : (
          ""
        )}
        <Text
          label="Username"
          color="success"
          type="text"
          onChange={(e) => setname(e.target.value)}
        />
        <Text
          label="Email"
          color="success"
          type="email"
          margin="10px"
          onChange={(e) => setemail(e.target.value)}
        />
        <Text
          label="Password"
          color="success"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <Text
          label="Confirm Password"
          color="success"
          type="password"
          margin="10px"
          onChange={(e) => setcpassword(e.target.value)}
        />
        <Push
          variant="contained"
          size="medium"
          color="success"
          onClick={registerUserHandler}
        >
          Register
        </Push>
        <Box mt={1}>
          <Typography>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </CurrentContainer>
    </ScreenContainer>
  );
};

export default Register;
