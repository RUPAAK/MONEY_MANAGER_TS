import { Box, Card, Container, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import { FC, ReactNode } from "react";
import PropTypes from 'prop-types'

interface CoverContainerProps{
    children: ReactNode
}

const CoverContainer = experimentalStyled(Card)(
  ({ theme }) => `
        width: 100%;
        margin-top: ${theme.spacing(3)};
  `
);
const ScreenContainer: FC<CoverContainerProps>= ({children})=>{
    return (
        <CoverContainer>
                {children}
        </CoverContainer>
    )
}

ScreenContainer.propTypes={
    children: PropTypes.node
}

export default ScreenContainer