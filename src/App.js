
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
}from 'react-router-dom';
import India from './Components/India';
import World from './Components/World';
import Header from './Components/Header';


class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(


        <div className="container-fluid,pl-0,pr-0">
  
        <Router>
        <Header/>
          <Switch>
            <Route exact path="/"><India/> </Route>
            <Route path="/India"><India/> </Route>
            <Route path="/World"><World/> </Route>
            
          </Switch>
        </Router>

        </div>


    )
  }
}
export default App;
