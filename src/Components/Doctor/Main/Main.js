import React from 'react';
import { Route, Router } from 'react-router-dom';
import Events from '../Pages/Test';

const Main = () => {
  return (
    <div>
      <Route exact path="/" component={Events} />
    </div>
  );
};
export default Main;
