import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Title from "./Components/Title";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {
  return (
    <div>
       <Header />
       <Title/>
        <MainContent/>
    </div>
      
  );
}

