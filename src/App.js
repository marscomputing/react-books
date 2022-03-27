import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllItems from './pages/AllItems';
import FavoriteItems from './pages/FavoriteItems';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<AllItems />} />
        <Route path='/favorites' exact element={<FavoriteItems />} />
      </Routes>
    </Layout>
  );
}

export default App;
