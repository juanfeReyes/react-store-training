import pocketbaseEs from "pocketbase"
import { Game } from "../model/Game.model";

const pb = new pocketbaseEs("http://localhost:8090")

const gameCollection = 'games';

/**
 * Service to get games from server
 * 
 * @param filter - filter object
 * @param page - number of page
 * @param limit - size of the page
 * @returns List of games
 */
export const getGames = async (filter: {title: string} = {title: ''}, page: number = 0, limit: number = 10) => {
  return (await pb.collection(gameCollection).getList<Game>(page, limit, {filter: `title~'${filter.title}'`})).items
}

/**
 * Service to create game in server
 * 
 * @param game - Game to create
 */
export const createGame = async (game: Game)  => {
  await pb.collection(gameCollection).create(game)
}
