import { styled } from "@mui/material/styles";
import { FC, ReactNode } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  margin?: string;
  type?: string;
  padding?: string;
  height?: string;
  label: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: (props: TextProps) => ({
    margin: props.margin ? props.margin : 0,
    // height: props.height ? props.height : 0,
    // padding: props.padding ? props.padding : 0,
  }),
});

const Root = styled(TextField)(({ theme }) => ({
  // padding: theme.spacing(0),
  background: "white",
  borderRadius: "6px",
  // margin: `${theme.spacing(1)} 0`,
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

const Text: FC<TextProps> = ({
  margin = "0px",
  color = "primary",
  type = "text",
  label,
  onChange,
}): JSX.Element => {
  const classes = useStyles({ margin, label });
  return (
    <Root
      className={classes.root}
      id="outlined-basic"
      variant="filled"
      color={color}
      type={type}
      label={label}
      onChange={onChange}
    />
  );
};

/**
 * PROPTYPES PACKAGE IS USED TO VALIDATE THE PROPS PROPERTY.
 * THIS CAN BE ACHIVED BY TYPESCRIPT
 */

// Text.propTypes = {
//   margin: PropTypes.string,
//   className: PropTypes.string,
// };

export default Text;
