import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Game } from "../model/Game.model"
import { RootState } from "./ReduxStore"

/**
 * GameCartItem
 * @alias GameCartItem
 */
export interface GameCartItem extends Game {
  /** number of games in the cart */
  count: number
}

export interface ShoppingCartSliceState {
  games: {[key: string]: GameCartItem}
  counter: number
}

const initialState: ShoppingCartSliceState  = {
  games: {},
  counter: 0
}

const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addGame(state, gameAction: PayloadAction<Game>) {
      if(state.games[gameAction.payload.id]) {
        state.games[gameAction.payload.id].count++
      }else {
        state.games[gameAction.payload.id] = { ...gameAction.payload, count:1 }
      }
      state.counter++
    }, 
    removeGame(state, idAction: PayloadAction<string>){
      state.games[idAction.payload].count--
      state.games[idAction.payload].count === 0 && delete state.games[idAction.payload]
      state.counter--
    }
  }
})

export const selectCart = (state: RootState) => state.shoppingCart

export const {addGame, removeGame} = ShoppingCartSlice.actions

export default ShoppingCartSlice.reducer
