import React from "react";
import Header from "./components/Header/Header";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchView } from "./components/LaunchView/LaunchView";

import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

import"./style.css";
function App() {
  return (

    <div className="App">
     
      <Header/>
      <Router>
    
              <Switch>
                       <Route path="/launch/:flight_number">
                                              
                                              <LaunchView/> 
                                              
                                              
                        </Route>
      
                        <Route path="/">
                              <LaunchList/>
                        </Route>
              </Switch>
      </Router>
    </div>
  );
}

export default App;
