import React, { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ButtonProps {
  className?: string;
  margin?: number;
  disabled?: boolean;
  size: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant: "contained" | "outlined" | "text";
  // | string;
  children: string;
}

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(0),
  background: "white",
  borderRadius: "6px",
  margin: `${theme.spacing(1)} 0`,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "95%",
  },
}));

const Push: FC<ButtonProps> = ({
  margin = 0,
  color = "primary",
  children,
  variant = "text",
  size,
}) => {
  return (
    <Button variant={variant} size={size} color={color}>
      {children}
    </Button>
  );
};

export default Push;
