import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import Createpoint from './pages/CreatePoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={Createpoint} path='/new-point' />
    </BrowserRouter>
  );
}

export default Routes;