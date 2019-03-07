import React , { Component } from 'react';
import Login from './components/Login';
import { BrowserRouter as HashRouter, Route , Switch } from 'react-router-dom';
import DataPage from './components/DataPage';


class App extends Component {
  render(){
    return(
      <HashRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route  path='/user' component={DataPage} /> 
          </Switch>
        </div>
      </HashRouter> 
    )
  }
}
 
export default App;
