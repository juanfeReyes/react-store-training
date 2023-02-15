import { FormControlLabel, Switch } from "@mui/material"
import FormGroup from "@mui/material/FormGroup"
import { useTheme } from "@mui/material/styles";
import React from "react";
import { ColorModeContext } from "./ThemeToggler";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from "styled-components";


const Container = styled.div`
  padding-right: 0.5rem;
`

export const ThemeSwitch = () => {

  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext);

  return <>
    <Container>
      <FormGroup>
        <FormControlLabel control={
          <Switch onClick={colorMode.toggleColorMode} />
        } label={theme.palette.mode === 'light' ? < Brightness5Icon /> : <DarkModeIcon />} labelPlacement="start" />
      </FormGroup>
    </Container>
  </>
}
