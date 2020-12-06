import './App.css';
import React, {useState} from "react";

import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './pages/Navigation';
import Menu from './pages/Menu';

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token")? true: false);

  const PrivateRoute = ({ component, ...rest }) => {
    const isAuthed = localStorage.getItem('token');
    console.log(isAuthed, 'dddddddddddddddddddd')
    return (
      <Route {...rest} exact
        render = {(props) => (
          isAuthed ? (
            <div>
              {React.createElement(component, props)}
            </div>
          ) :
          (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        )}
      />
    )
  }
  
  return (
      <Router>    
            <Navigation isAuth={loggedIn} setLoggedIn={setLoggedIn}/>
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/login" setLoggedIn={setLoggedIn} component={Login}/>
              <Route path="/register" component={Register}/>
              
              <PrivateRoute path="/menu/:id" component={Menu} />
            </Switch>
          
          {/* Footer Section goes here */}     
      </Router>      
  );
}

export default App;
