import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { TextField } from "@material-ui/core";

interface TextProps {
  className?: string;
  margin?: number;
  type?: string;
  padding?: string;
  children?: ReactNode;
}

const useStyles = makeStyles({
  root: (props: TextProps) => ({
    margin: props.margin ? props.margin : 0,
  }),
});

const Text: FC<TextProps> = ({ margin = 0, children }): JSX.Element => {
  const classes = useStyles({ margin });
  return (
    <TextField
      className={classes.root}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
    />
  );
};

export default Text;
