import { Grid, Paper, Typography, styled as mstyled, Divider, Chip, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { useLoaderData, useNavigate } from "react-router-dom";
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

const GridContent = styled(Grid)(() => ({
  justifyContent: 'flex-end'
}))

const DetailRow = (props: { title: string, children: JSX.Element }) => {
  return <>
    <Grid container>
      <Grid item xs={6} container >
        <Typography><b>{props.title}</b></Typography>
      </Grid>
      <GridContent container item xs={6}>
        {props.children}
      </GridContent>
    </Grid>
  </>
}

const GameInfo = (props: { game: Game }) => {
  const { description, calification, price, stock, publishDate } = props.game;

  return <>
    <Grid container >
      <DetailRow title=""><CalificationHeader calification={calification} /></DetailRow>
      <DetailRow title="Publish Date:"><Typography variant="body1">{new Date(publishDate).toLocaleDateString()}</Typography></DetailRow>
      <DetailRow title="Price:"><Typography variant="body1">$ {price}</Typography></DetailRow>
      <DetailRow title="Stock:"><Typography variant="body1">{stock}</Typography></DetailRow>
      <Typography textAlign={"justify"} variant="body1">{description}</Typography>
    </Grid>
  </>
}

const TagBanner = (props: { tags: string[] }) => {

  const navigate = useNavigate()

  const handleChipClick = (tag: string) => {
    navigate(`/games/tags/${tag}`)
  }

  return <>
    <GridContent container spacing={2}>
      {
        props.tags.map((tag) =>
          <Grid item xs={'auto'}>
            <Chip label={tag} onClick={() => handleChipClick(tag)} />
          </Grid>
        )
      }
    </GridContent>
  </>
}


export const GameDetailPage = () => {
  const game = (useLoaderData() as { response: Game }).response
  const { title, imgUrl, tags } = game;

  return <>
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={7}>
            <GameImage squareSize={325} src={imgUrl} />
          </Grid>
          <Grid item xs={5}>
              <Stack alignItems={'center'} justifyContent={'space-between'} spacing={1} direction="column">
                <TagBanner tags={tags} />
                <GameInfo game={game} />
                <MultipleAddToCart label="Games to cart" game={game} />
              </Stack>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <CommentList comments={game.expand?.comment ? game.expand?.comment : []} />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container item xs={5}>
            <div>
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
