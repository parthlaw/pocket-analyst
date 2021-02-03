import React from 'react';
import { Route } from 'react-router-dom';
import Events from '../Pages/Events/Events';
import Home from '../Pages/Home/Home';

const Main = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={Events} />
    </div>
  );
};
export default Main;
