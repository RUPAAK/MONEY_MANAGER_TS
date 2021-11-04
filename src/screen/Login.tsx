import { Box, Card, Container, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import ScreenContainer from "../components/ScreenContainer";
import { Formik, Form, Field } from "formik";
import Text from "../components/Text";

const InnerContainer = experimentalStyled(Box)(
  ({ theme }) => `
          // font-weight: ${theme.typography.fontWeightBold};
          color: ${theme.palette.secondary.main};
          display: block;
          padding: ${theme.spacing(2, 2, 0)};
  `
);

interface MyFormValues {
  firstName: string;
}
const Login: React.FC = (): JSX.Element => {
  const initialValues: MyFormValues = { firstName: "" };

  return (
    <ScreenContainer>
      <Container>
        <Text>hi</Text>
      </Container>
    </ScreenContainer>
  );
};

export default Login;
