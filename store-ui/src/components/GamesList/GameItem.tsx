import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import { CalificationHeader } from "./CalificationHeader";
import { useDispatch } from "react-redux";
import { addGame } from "../../store/ShoppingCartSlice";

export interface Game {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  calification: number;
  price: number;
  publishDate: string;
  stock: number;
}

export const GameImage = styled.img<{ squareSize: number }>`
  width: ${props => props.squareSize}px;
  height: ${props => props.squareSize}px;
`

const GameHeader = (props: Game) => {
  const { title, calification } = props;

  return (
    <Grid item container sm>
      <Grid item xs={8} justifyContent='flex-start'>
        <Typography noWrap variant='subtitle1'><b>{title}</b></Typography>
      </Grid>
      <Grid item xs={2}>
        <CalificationHeader calification={calification} />
      </Grid>
    </Grid>
  )
}

export const GameItem = (props: Game) => {
  const { imgUrl, price, publishDate, stock, id } = props;

  const dispatch = useDispatch()

  return <>
    <Paper elevation={1}>
      <Grid container spacing={2}>
        <Grid item>
          <GameImage squareSize={110} src={imgUrl} />
        </Grid>
        <Grid item container sm xs={12}>
          <Grid item xs={12}>
            <GameHeader {...props} />
            <Grid container item direction='column' alignItems={'flex-start'}>
              <Grid item><Typography><b>Price:</b> ${price}</Typography></Grid>
              <Grid item><Typography><b>Stock:</b> {stock}</Typography></Grid>
              <Grid item><Typography><b>Publish date:</b> {new Date(publishDate).toLocaleDateString()}</Typography></Grid>
              
              
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={() => dispatch(addGame(props))} >add to cart</Button>
          </Grid>
        </Grid>

      </Grid>

    </Paper>
  </>
}
