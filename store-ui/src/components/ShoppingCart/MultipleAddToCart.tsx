import { Button, Grid, Paper, styled, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Game } from "../../model/Game.model"
import { addGame } from "../../store/ShoppingCartSlice"

const Container = styled(Paper)(() => ({
  width: '60%',
  margin: '0.3rem',
  padding: '0.5rem',
  textAlign: 'center'
}))

const GridContainer = styled(Grid)(() => ({
  padding: '0.5rem',
}))


export const MultipleAddToCart = (props: { label: string, game: Game }) => {
  const { label, game } = props;

  const [itemsToCart, setItemsToCart] = useState(0)
  const dispatch = useDispatch()

  return <>
    <GridContainer id='multiple-add-cart' container justifyContent='flex-end'>
      <Container elevation={3}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              id="multiple-add-to-cart"
              label={label}
              defaultValue={itemsToCart}
              onChange={(event) => setItemsToCart(Number(event.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => dispatch(addGame({ game: game, count: itemsToCart }))}>Add to Cart</Button>
          </Grid>
        </Grid>
      </Container>
    </GridContainer>
  </>
}
