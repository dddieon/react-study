import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Search from '../routes/Search';

function App() {
  const [api, setApi] = useState();
  return (
    <Router>
      <Route path="/" exact component={Home} prop={(api, setApi)}></Route>
      <Route path="/detail" exact component={Detail}></Route>
      <Route path="/s/:name" component={Search}></Route>
    </Router>
  );
}

export default App;
