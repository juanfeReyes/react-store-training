import { Button, Grid, IconButton, styled, Typography } from "@mui/material"
import { Game } from "../GamesList/GameItem"
import DeleteIcon from '@mui/icons-material/Delete';
import { GameCartItem, removeGame } from "../../store/ShoppingCartSlice";
import { useDispatch } from "react-redux";

export const GameItemCart = (props: GameCartItem) => {
  const { id, title, count } = props;
  const dispatch = useDispatch()


  return <>
    <Grid container item xs={12} alignItems='center'>
      <Grid item xs={5}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>{count}</Typography>
      </Grid>
      <Grid item xs={5}>
        <Button>View details</Button>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={() => dispatch(removeGame(id))} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>

  </>
}
