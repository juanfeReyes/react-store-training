import { Grid, Paper, Typography, styled as mstyled, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { CommentList } from "../components/CommentList/CommentList";
import { CalificationHeader } from "../components/GamesList/CalificationHeader";
import { GameItem } from "../components/GamesList/GameItem";
import { MultipleAddToCart } from "../components/ShoppingCart/MultipleAddToCart";
import { Game } from "../model/Game.model";

export const GameImage = styled.img<{ squareSize: number }>`
  width: '100%';
  height: ${props => props.squareSize}px;
`

const HeaderStyled = mstyled(Typography)(() => ({
  textAlign: 'left',
  padding: '1rem',
}))

const RecommendedGamesContainer = styled(Grid)(() => ({
  padding: "1rem"
}))

const DetailRow = (props: { title: string, children: JSX.Element }) => {
  return <>
    <Grid container justifyContent={'space-between'}>
      <Grid item xs={6} container justifyContent='flex-start'>
        <Typography><b>{props.title}</b></Typography>
      </Grid>
      <Grid container item xs={6} justifyContent='flex-end'>
        {props.children}
      </Grid>
    </Grid>
  </>
}


export const GameDetailPage = () => {
  const game = (useLoaderData() as { response: Game }).response
  const { title, description, imgUrl, calification, price, stock, publishDate } = game;

  return <>
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={8}>
            <GameImage squareSize={300} src={imgUrl} />
          </Grid>
          <Grid container item xs={4} justifyContent='center' alignItems='center'>
            <div>
              <Grid container >
                <DetailRow title="Calification:"><CalificationHeader calification={calification} /></DetailRow>
                <DetailRow title="Description:"><Typography variant="body1">{description}</Typography></DetailRow>
                <DetailRow title="Price:"><Typography variant="body1">$ {price}</Typography></DetailRow>
                <DetailRow title="Stock:"><Typography variant="body1">{stock}</Typography></DetailRow>
                <DetailRow title="Publish Date:"><Typography variant="body1">{new Date(publishDate).toLocaleDateString()}</Typography></DetailRow>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <CommentList comments={game.expand?.comment ? game.expand?.comment : []} />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container item xs={5}>
            <div>
              <MultipleAddToCart label="Games to cart" game={game} />
              <Divider variant="middle" />
              <RecommendedGamesContainer container>
                <Grid item xs={12}>
                  <div>
                    <Grid item xs={12} >
                      <HeaderStyled variant="h5">Recomended Games</HeaderStyled>
                    </Grid>
                    {game.expand?.recomendedGames?.map((game) =>
                      <Grid item xs={12} key={game.id}>
                        <GameItem {...game}></GameItem>
                      </Grid>
                    )}
                  </div>
                </Grid>
              </RecommendedGamesContainer>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  </>
}
