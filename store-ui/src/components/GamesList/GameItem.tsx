import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { Grid } from "@mui/material";
import styled from "styled-components";
import { CalificationHeader } from "./CalificationHeader";

export interface Game {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  calification: number;
  price: number;
  publishDate: string;
}

const GameImage = styled.img<{ squareSize: number }>`
  width: ${props => props.squareSize}px;
  height: ${props => props.squareSize}px;
`

const GameHeader = (props: Game) => {
  const {title, calification} = props;

  return (
    <Grid item container sm>
      <Grid item xs={8}>
        <Typography noWrap variant='subtitle1'>{title}</Typography>
      </Grid>
      <Grid item xs={2}>
        <CalificationHeader calification={calification} />
      </Grid>
    </Grid>
  )

}

export const GameItem = (props: Game) => {
  const { imgUrl,price, publishDate } = props;

  return <>
    <Paper elevation={1}>
      <Grid container spacing={2}>
        <Grid item>
          <GameImage squareSize={110} src={imgUrl} />
        </Grid>
        <Grid item container sm xs={12}>
          <Grid item xs>
            <GameHeader {...props}/>
            <Typography>Price: ${price}</Typography>
            <Typography>Publish date: {new Date(publishDate).toLocaleDateString()}</Typography>
          </Grid>
        </Grid>

      </Grid>

    </Paper>
  </>
}
