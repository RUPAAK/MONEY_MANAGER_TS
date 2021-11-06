import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";
import Text from "../components/Text";
import ScreenContainer from "../components/ScreenContainer";
import { Button, Container } from "@mui/material";
import Push from "../components/Button";

// const Root = styled("div")(({ theme }) => ({
//   padding: theme.spacing(1),
//   // [theme.breakpoints.down("md")]: {
//   //   backgroundColor: theme.palette.secondary.main,
//   // },
//   // [theme.breakpoints.up("md")]: {
//   //   backgroundColor: theme.palette.primary.main,
//   // },
//   // [theme.breakpoints.up("lg")]: {
//   //   backgroundColor: green[500],
//   // },
// }));

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

export default function Register() {
  return (
    <ScreenContainer>
      <CurrentContainer>
        <Text label="Username" color="success" type="text" />
        <Text label="Email" color="success" type="email" margin="10px" />
        <Text label="Password" color="success" type="password" />
        <Text
          label="Confirm Password"
          color="success"
          type="password"
          margin="10px"
        />
        <Push variant="contained" size="medium" color="success">
          Regster
        </Push>
      </CurrentContainer>
    </ScreenContainer>
  );
}
