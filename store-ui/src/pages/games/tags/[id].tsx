import { GamesList } from '@/components/GamesList/GamesList'
import { getGames } from '@/services/GameService'
import { Game } from '@/model/Game.model'
import { GetServerSideProps } from 'next'
import { HomePage } from '@/pages/HomePage'


export const getServerSideProps: GetServerSideProps = async (context) => {
  const filters = {title:'', tag: context.params?.id as string};
  const games = await getGames(filters)
  return {
    //TODO: JSON parse and stringify cause games has serializing error, why?
    props: {filters: filters, response: JSON.parse(JSON.stringify(games))}
  }
}

export default function GameListByTagPage(props : {response: Game[], filters: {[key: string]: string}}) {
  return (
    <>
    <div className="App">
        <HomePage>
          <GamesList response={props.response} filters={props.filters}/>
        </HomePage>
    </div>
     
    </>
  )
}
