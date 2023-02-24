import pocketbaseEs from "pocketbase"
import { Game } from "../components/GamesList/GameItem"

const pb = new pocketbaseEs("http://localhost:8090")

const gameCollection = 'games';

export const getGames = async (filter: {title: string} = {title: ''}, page: number = 0, limit: number = 10) => {
  return (await pb.collection(gameCollection).getList<Game>(page, limit, {filter: `title~'${filter.title}'`})).items
}

export const createGame = async (game: Game)  => {
  await pb.collection(gameCollection).create(game)
}
