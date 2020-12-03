import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './pages/Navigation';

function App() {
  return (
      <Router>    
            <Navigation />
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
          
          {/* Footer Section goes here */}     
      </Router>      
  );
}

export default App;
