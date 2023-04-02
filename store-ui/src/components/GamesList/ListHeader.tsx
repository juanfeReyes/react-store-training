import { Chip, ListItem, Paper, Stack, Typography } from "@mui/material"
import styled from "styled-components";
import { CreateGameModal } from "../shared/Modal/CreateGameModal";

interface props {
  title: string;
  filters: { [key: string]: string }
}

const ContainerStyled = styled.div`
display: flex;
justify-content: 'end';
`

const FiltersList = (props: { filters: { [key: string]: string } }) => {
  const {filters} = props;
  const areFiltersValid = () => {
    return filters && Object.values(filters).some(value => value)
  }

  return <>
    {
      areFiltersValid() &&
      <Paper
      elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          listStyle: 'none',
          padding: '0.5rem'
        }} >
        <Stack direction="row" spacing={1} alignItems='center'>
          <Typography>Filters:</Typography>
          {Object.entries(filters).map(filter =>
            filter[1] &&
            <Chip label={`${filter[0].toUpperCase()}:  ${filter[1]}`} />
          )}
        </Stack>
      </Paper>
    }
  </>
}

/**
 * Add games filter in chip to show the filters applied
 */

/**
 * 
 * @param props 
 * @returns 
 */
export const ListHeader = (props: props) => {

  const { title } = props;

  return <>
    <Stack>
      <div>
        <ContainerStyled>
          <Typography variant="h3">{title}</Typography>
          <CreateGameModal />
        </ContainerStyled>
      </div>
      <FiltersList filters={props.filters} />
    </Stack>
  </>
}
