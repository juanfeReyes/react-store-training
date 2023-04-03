import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { ErrorPage } from "../../pages/ErrorPage"
import { GameDetailPage } from "../../pages/GameDetailPage"
import { HomePage } from "../../pages/HomePage"
import { LoginPage } from "../../pages/LoginPage"
import { getGameDetail, getGames } from "../../services/GameService"
import { GamesList } from "../GamesList/GamesList"
import { ProtectedRoute } from "./ProtectedRoute"

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/',
    element: <Navigate to='/games'/>,
  },
  {
    path: '/games',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [    
      {
        path: '',
        element: <GamesList/>,
        loader: async () => ({response: await getGames()}),
      },
      {
        path: 'tags/:id',
        element: <GamesList/>,
        loader: async ({params}) => {
          const filters = {title:'', tag: params.id};
          return {filters: filters, response: await getGames(filters)}
        }
      },
      {
        path: ':id',
        element: <ProtectedRoute><GameDetailPage /></ProtectedRoute>,
        loader: async ({params}) => ({response: await getGameDetail(params.id as string)})
      }
    ]
  }  
])

export const StoreRouter = () => {

  return <>
    <RouterProvider router={router}/>
  </>
}
