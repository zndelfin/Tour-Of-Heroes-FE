import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Title from "./Components/Title";
import AddEntry from "./components/AddEntry";

export default function App() {
  return (
    <div>
       <Header />
       <Title/>
        <MainContent/>
    </div>
      
  );
}

