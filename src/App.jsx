import React from "react";
import "./App.css";
import ActionBar from "./components/ActionBar";
import Header from "./components/Header";
//import MainContent from "./components/MainContent";
// import Menu from "./components/Menu"
// import CardItems from "./components/CardItems";
import MainContent from "./components/MainContent";


export default function App() {
  return (
    <div>
       <Header />
       <ActionBar/>
        <MainContent/>
    </div>
      
  );
}

