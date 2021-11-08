import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Acomponent/Home";
import ViewOne from "./Acomponent/ViewOne";
import ViewDB from "./Acomponent/ViewDB";
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import store from "./store/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <div id="max">
          <NavLink className="navv" to="/home">Home</NavLink>
          <NavLink className="navv" to="/viewdb">Data Base</NavLink>
          <NavLink className="navv" to="/viewone">View By one</NavLink>
        </div>
        <hr />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/viewdb" component={ViewDB} />
          <Route exact path="/viewone" component={ViewOne} />
        </Switch>
      </Router>
    </Provider>
    </>
  );
}

export default App;
