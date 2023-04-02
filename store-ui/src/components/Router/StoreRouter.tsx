import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { ErrorPage } from "../../pages/ErrorPage"
import { GameDetailPage } from "../../pages/GameDetailPage"
import { HomePage } from "../../pages/HomePage"
import { getGameDetail, getGames } from "../../services/GameService"
import { GamesList } from "../GamesList/GamesList"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="games" replace/>,
      },
      {
        path: '/games',
        element: <GamesList/>,
        loader: async () => ({response: await getGames()}),
      },
      {
        path: '/games/tags/:id',
        element: <GamesList/>,
        loader: async ({params}) => {
          const filters = {title:'', tag: params.id};
          return {filters: filters, response: await getGames(filters)}
        }
      },
      {
        path: '/games/:id',
        element: <GameDetailPage />,
        loader: async ({params}) => ({response: await getGameDetail(params.id as string)})
      }
    ]
  },
  
])

export const StoreRouter = () => {

  return <>
    <RouterProvider router={router}/>
  </>
}
