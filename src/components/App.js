import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Search from '../routes/Search';
import UserStore from '../store/api';

function App() {
  return (
    <UserStore>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
        <Route path="/s/:name" component={Search}></Route>
      </Router>
    </UserStore>
  );
}

export default App;
