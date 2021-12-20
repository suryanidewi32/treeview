import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import HomeControl from 'Views/Components/Layout/Index';
import TreeModule from 'Views/Components/Forms/Trees/tree';
import deleteTree from 'Views/Components/Forms/Trees/deleteTree';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <HomeControl path="/site" component={deleteTree} />
      <HomeControl path="/" component={TreeModule} />
    </Switch>
  </BrowserRouter>
);
export default Routing;
