import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import { GameItem } from "./GameItem"
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { ListHeader } from "./ListHeader";
import { Game } from "../../model/Game.model";

/**
 * Component to display a list of Games
 * 
 * @param {Game[]} games - list of games to display 
 * @component
 * @example
 * const games = getGames()
 * return (
 *  <GameList games={games}/>
 * )
 */
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
