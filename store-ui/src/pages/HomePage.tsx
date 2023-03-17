import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';

export const HomePage = () => {

  return (<>
    <Stack>
      <NavigationBar />
      <Outlet />
    </Stack>
  </>)
}
