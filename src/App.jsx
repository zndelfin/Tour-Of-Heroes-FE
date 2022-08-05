import React from "react";
import "./App.css";
import Header from "./components/Header";
//import MainContent from "./components/MainContent";
import Menu from "./components/Menu"
import CardItems from "./components/CardItems";

export default function App() {
  return (
    <div>
       <Header />
       <div class="content">
       <Menu />
       <CardItems />   
       <CardItems />   
       <CardItems />  
       </div>
       
    </div>
  );
}

