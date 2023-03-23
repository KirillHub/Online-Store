import { Box } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { routes as r } from './router';

function App() {
  const routes = useRoutes(r);

  return <Box className='App'>{routes}</Box>;
}

export default App;
