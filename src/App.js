import {useState} from "react";
import AllRoutes from './Routing/AllRoutes';
import Navbar from "./Component/NavBar"

function App() {
  
  return (
    <div id="App">
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
