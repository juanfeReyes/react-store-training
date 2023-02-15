import axios, { AxiosRequestConfig } from "axios"
import pocketbaseEs from "pocketbase"
import { Game } from "../components/GamesList/GameItem"

const baseUrl = 'http://localhost:8090/api'

const pb = new pocketbaseEs("http://localhost:8090")


export const getGames = async (filter: {title: string} = {title: ''}, page: number = 0, limit: number = 10) => {
  return (await pb.collection('games').getList<Game>(page, limit, {filter: `title~'${filter.title}'`})).items
}
