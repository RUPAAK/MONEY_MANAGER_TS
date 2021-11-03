import { Box, Card, Container, Typography } from "@material-ui/core";
import { experimentalStyled } from '@material-ui/core/styles';

const SectionHeading = experimentalStyled(Box)(
    ({ theme }) => `
          // font-weight: ${theme.typography.fontWeightBold};
          color: ${theme.palette.secondary.main};
          display: block;
          padding: ${theme.spacing(2, 2, 0)};
  `
  );
  

const Login: React.FC = (): JSX.Element => {
  return (
    <Box style={{background: 'red'}}>
        Hello
    </Box>
  );
};


export default Login;
