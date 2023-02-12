import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Game } from '../../components/GamesList/GameItem';
import { GamesList } from '../../components/GamesList/GamesList';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { getGames } from '../../services/GameService';

export const HomePage = () => {

  const [games, setGames] = useState<Game[]>([])

  const handleSearchGames = async (title: string) => {
    const data = await getGames({title: title});
    setGames(data)
  }

  useEffect(() => {

    const fetchGames = async () => {
      const data = await getGames();
      setGames(data)
    }
    
    fetchGames();
  }, [])

  return (<>
    <Stack>
      <NavigationBar />
      <SearchBar handleSearchGames={handleSearchGames}/>
      <GamesList games={games}/>
    </Stack>
  </>)
}
