import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Title from "./Components/Title";


export default function App() {
  return (
    <div>
       <Header />
       <Title/>
        <MainContent/>
    </div>
      
  );
}

