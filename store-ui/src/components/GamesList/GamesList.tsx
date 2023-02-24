import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import { Game, GameItem } from "./GameItem"
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { ListHeader } from "./ListHeader";

export const GamesList = (props: { games: Game[] }) => {

  const { games } = props;

  return <>
    <Container>
      <ListHeader  title="Games"/>
      {games.length === 0 && <Typography variant='h3'> <SentimentDissatisfiedIcon fontSize='large'/> No games found</Typography>}
      <Grid container spacing={2} rowSpacing={4}>
        {games.map((game) =>
          <Grid item xs={4} key={game.id}>
            <GameItem  {...game}></GameItem>
          </Grid>
        )}
      </Grid>
    </Container>
  </>
}
