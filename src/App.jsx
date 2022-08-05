import React from "react";
import "./App.css";
import Header from "./components/Header";
//import MainContent from "./components/MainContent";
// import Menu from "./components/Menu"
// import CardItems from "./components/CardItems";
import MainContent from "./components/MainContent";
import Title from "./components/Title";


export default function App() {
  return (
    <div>
       <Header />
       <Title/>
        <MainContent/>
    </div>
      
  );
}

