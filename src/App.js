import React from "react";
import "./App.scss";
import Header from "./components/organisms/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import createRoutes from "./routes/routes";

function App() {
  return (
   <>
 
 <>
     <Header/>
    
      <Router>
        <div className="body-routes">{createRoutes()}</div>
      </Router>
     
    </>
   
   </>
  );
}

export default App;
