import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity="Madrid"/>
    <footer>
     <a href="https://github.com/maria-nr/final-project-react" target="_blank" rel="noreferrer" >
     Open-source on Git hub 
     </a>
     {" "} by Maria Narvaez 
     </footer>
     </div>
    </div>
  );
}


