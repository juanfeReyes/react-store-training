import {Typography } from "@mui/material"
import styled from "styled-components";
import { CreateGameModal } from "../shared/Modal/CreateGameModal";

interface props {
  title: string;
}

const ContainerStyled = styled.div`
display: flex;
justify-content: 'end';
padding: 1rem;
`

export const ListHeader = (props: props) => {

  const { title } = props;

  return <>
    <ContainerStyled>
      <Typography variant="h3">{title}</Typography>
      <CreateGameModal/>
    </ContainerStyled>
  </>
}
