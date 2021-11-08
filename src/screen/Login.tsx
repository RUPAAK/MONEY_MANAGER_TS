import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { Box, ThemeProvider } from "@mui/system";
import Text from "../components/Text";
import ScreenContainer from "../components/ScreenContainer";
import { Button, Container } from "@mui/material";
import Push from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { Message } from "../components/Alert";
import { Alert } from "react-bootstrap";

const MessageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  position: "relative",
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

const Login: React.FC = (): JSX.Element => {
  window.history.replaceState(null, "data", "/login");

  const [email, setemail] = React.useState<string>("");
  const [password, setpassword] = React.useState<string>("");

  const dispatch = useDispatch();

  const { userLogin } = bindActionCreators(actionCreators, dispatch);

  const user: any = useSelector((state: State) => state.userLogin);

  const { loading, userDetails, error } = user;

  const loginUserHandler = (): void => {
    // (history as unknown as History).push("/")
    userLogin({ email, password });
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
              message="Login Successfull"
              variant="success"
              // onClose={() => setShow(!show)}
              // onClick={() => setShow(!show)}
              // show={show}
            />
          </MessageBox>
        ) : (
          ""
        )}
        <Text
          label="Email"
          color="success"
          type="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <Text
          label="Password"
          color="success"
          type="password"
          margin="10px"
          onChange={(e) => setpassword(e.target.value)}
        />
        <Push
          variant="contained"
          size="medium"
          color="success"
          onClick={loginUserHandler}
        >
          Login
        </Push>
        <Box mt={1}>
          <Typography>
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Box>
      </CurrentContainer>
    </ScreenContainer>
  );
};

export default Login;
